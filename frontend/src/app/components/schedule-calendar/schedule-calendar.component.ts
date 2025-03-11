import {Apollo, gql} from 'apollo-angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

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
    styleUrls: ['./schedule-calendar.component.scss'],
    standalone: false
})
export class ScheduleCalendarComponent implements OnInit {

  private calendarElement: any;
  calendarOptions: CalendarOptions;
  private calendarEvents: EventInput[] = [];
  private loading: boolean;

  constructor(
    private elementRef: ElementRef,
    // private apollo: Apollo
  ) { }

  ngOnInit(): void {
    // this.apollo
    //   .watchQuery<any>({
    //     query: GET_SCHEDULES,
    //   })
    //   .valueChanges.subscribe(({ data, loading }) => {
    //     data && data.schedules.edges.map(edge => this.calendarEvents.push(edge.node));
    //     this.loading = loading;
    //   });

    this.calendarOptions = {
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        interactionPlugin
      ],
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
