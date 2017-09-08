import { Component, OnInit } from '@angular/core';
import { BaseballPlayer } from '../../models/baseball-player';
import { BaseballPlayerService } from '../../services/baseball-player.service';

@Component({
  selector: 'app-baseball-player-index',
  templateUrl: './baseball-player-index.component.html',
  styleUrls: ['./baseball-player-index.component.css']
})
export class BaseballPlayerIndexComponent implements OnInit {

  baseballPlayers: BaseballPlayer[];

  constructor(
    private baseballPlayerService: BaseballPlayerService,
  ) { }

  getBaseballPlayers(): void {
    this.baseballPlayerService
        .getBaseballPlayers()
        .then(response => this.baseballPlayers = response);
  }

  ngOnInit(): void {
    this.getBaseballPlayers();
  }

}
