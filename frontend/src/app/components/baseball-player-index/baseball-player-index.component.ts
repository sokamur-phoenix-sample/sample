import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BaseballPlayer } from '../../models/baseball-player';
import { BaseballPlayerService } from '../../services/baseball-player.service';
import { BaseballPlayerShowComponent }  from '../baseball-player-show/baseball-player-show.component';

@Component({
  selector: 'app-baseball-player-index',
  templateUrl: './baseball-player-index.component.html',
  styleUrls: ['./baseball-player-index.component.css']
})
export class BaseballPlayerIndexComponent implements OnInit {

  baseballPlayers: BaseballPlayer[];
  bsModalRef: BsModalRef;

  constructor(
    private baseballPlayerService: BaseballPlayerService,
    private router: Router,
    private modalService: BsModalService
  ) {
    baseballPlayerService.missionAnnounced$.subscribe(
      message => { this.getBaseballPlayers(); }
    );
  }

  getBaseballPlayers(): void {
    this.baseballPlayerService
        .getBaseballPlayers()
        .then(response => this.baseballPlayers = response);
  }

  ngOnInit(): void {
    this.getBaseballPlayers();
  }

  public openModalWithShowComponent(player_id: number) {
    this.bsModalRef = this.modalService.show(BaseballPlayerShowComponent);
    this.bsModalRef.content.title = '野球選手詳細';
    this.baseballPlayerService.getBaseballPlayer(player_id)
                              .then(response => this.bsModalRef.content.player = response);
  }

}
