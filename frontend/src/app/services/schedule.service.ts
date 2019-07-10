import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Schedule } from '../models/schedule';

const GET_SCHEDULES = gql`
  {
    schedules {
      edges {
        node {
          title
          allDay
          start
          end
          backgroundColor
          borderColor
          textColor
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  schedules: Observable<Schedule[]>;

  constructor(private apollo: Apollo) { }

  getSchedules(): Observable<Schedule[]> {
    return this.schedules = this.apollo
      .watchQuery<any>({
        query: GET_SCHEDULES,
      })
      .valueChanges.pipe(map(result => result.data && result.data.schedules.edges.map(edge => edge.node)));
  }
}