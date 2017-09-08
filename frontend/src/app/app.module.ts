import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';
import { BaseballPlayerService } from './services/baseball-player.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseballPlayerIndexComponent
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
