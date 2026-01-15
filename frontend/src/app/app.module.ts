import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import interactionPlugin from '@fullcalendar/interaction';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';
import { BaseballPlayerService } from './services/baseball-player.service';
import { BaseballPlayerShowComponent } from './components/baseball-player-show/baseball-player-show.component';
import { BaseballPlayerEditComponent } from './components/baseball-player-edit/baseball-player-edit.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { GraphQLModule } from './graphql.module';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   timeGridPlugin,
//   listPlugin,
//   interactionPlugin
// ]);

@NgModule({ declarations: [
        AppComponent,
        BaseballPlayerIndexComponent,
        BaseballPlayerShowComponent,
        BaseballPlayerEditComponent,
        ScheduleCalendarComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatButtonModule,
        MatCheckboxModule,
        FullCalendarModule,
        ModalModule.forRoot(),
        GraphQLModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
  // constructor(
  //   apollo: Apollo,
  //   httpLink: HttpLink
  // ) {
  //   apollo.create({
  //     link: httpLink.create({uri: 'http://localhost:3000/graphql'}),
  //     cache: new InMemoryCache()
  //   });
  // }
}
