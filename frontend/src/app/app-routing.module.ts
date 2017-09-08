import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseballPlayerIndexComponent } from './components/baseball-player-index/baseball-player-index.component';

const routes: Routes = [
  { path: 'baseball-players', component: BaseballPlayerIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
