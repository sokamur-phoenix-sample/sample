import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';

const routes: Routes = [
  { path: 'baseball-players', component: BaseballPlayerIndexComponent },
  { path: 'schedule-calendar', component: ScheduleCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
