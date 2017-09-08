import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';
import { BaseballPlayerService } from './services/baseball-player.service';
import { BaseballPlayerShowComponent } from './components/baseball-player-show/baseball-player-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseballPlayerIndexComponent,
    BaseballPlayerShowComponent
  ],
  entryComponents: [
    BaseballPlayerShowComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [BaseballPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
