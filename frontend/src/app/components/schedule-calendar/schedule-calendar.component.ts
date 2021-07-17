import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

//import { Schedule } from '../../models/schedule';
//import { ScheduleService } from '../../services/schedule.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private schedules: Observable<any>;
  calendarOptions: CalendarOptions;
  calendarEvents: EventInput[] = [];
  loading: boolean;

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

    // this.schedules.forEach(event => this.calendarEvents.push(event));
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
      events: this.calendarEvents
    };
    console.log(this.calendarEvents);
  }

  // ngAfterViewInit() {
    // this.calendarElement = $(this.elementRef.nativeElement);
    // this.calendarElement.fullCalendar({
    //   height: 530,
    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'month,agendaWeek,agendaDay'
    //   },
    //   dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    //   dayNamesShort: ['日','月','火','水','木','金','土'],
    //   allDayText: '終日',
    //   axisFormat: 'H:mm',
    //   timeFormat: 'H:mm',
    //   slotLabelFormat : 'H:mm',
    //   slotDuration: '00:15:00',
    //   navLinks: true, // can click day/week names to navigate views
    //   selectable: true,
    //   selectHelper: true,
    //   select: function(start, end) {
    //     var title = prompt('Event Title:');
    //     var eventData;
    //     if (title) {
    //       eventData = {
    //         title: title,
    //         start: start,
    //         end: end
    //       };
    //       $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
    //     }
    //     $('#calendar').fullCalendar('unselect');
    //   },
    //   editable: true,
    //   eventSources: this.schedules,
    //   buttonText: {
    //     today: '今日'
    //   },
    // });
  //}
}
