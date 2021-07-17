import { Component, OnInit, ElementRef } from '@angular/core';

//import { Schedule } from '../../models/schedule';
//import { ScheduleService } from '../../services/schedule.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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

@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent {

  private calendarElement: any;
  // private schedules: Observable<any>;
  calendarOptions: CalendarOptions;
  private calendarEvents: EventInput[] = [];
  private loading: boolean;

  // getSchedules() {
  //   this.scheduleService.getSchedules()
  //     .subscribe((response: any) => this.schedules = response);
  // }

  constructor(
    private elementRef: ElementRef,
    // private scheduleService: ScheduleService
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_SCHEDULES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        data && data.schedules.edges.map(edge => this.calendarEvents.push(edge.node));
        this.loading = loading;
      });

    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      locale: 'ja',
      themeSystem: 'bootstrap',
      weekends: true,
      navLinks: true,
      slotDuration: '00:15:00',
      slotLabelInterval: '00:30',
      selectable: true,
      editable: true,
      allDayText: '終日',
      buttonText: {
        today: '今日'
      },
      events: []
    };
    setTimeout(() => {
      this.calendarOptions.events = this.calendarEvents;
    }, 500);
    console.log(this.calendarEvents);
  }
}
