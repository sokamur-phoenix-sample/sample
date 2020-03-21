import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'http://192.168.56.101:3000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
