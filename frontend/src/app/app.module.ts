import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';
import { BaseballPlayerService } from './services/baseball-player.service';
import { BaseballPlayerShowComponent } from './components/baseball-player-show/baseball-player-show.component';
import { BaseballPlayerEditComponent } from './components/baseball-player-edit/baseball-player-edit.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseballPlayerIndexComponent,
    BaseballPlayerShowComponent,
    BaseballPlayerEditComponent,
    ScheduleCalendarComponent
  ],
  entryComponents: [
    BaseballPlayerShowComponent,
    BaseballPlayerEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [BaseballPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
