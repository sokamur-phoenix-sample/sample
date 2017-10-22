import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BaseballPlayer } from '../../models/baseball-player';
import { BaseballPlayerService } from '../../services/baseball-player.service';

@Component({
  selector: 'app-baseball-player-edit',
  templateUrl: './baseball-player-edit.component.html',
  styleUrls: ['./baseball-player-edit.component.css']
})
export class BaseballPlayerEditComponent implements OnInit {

  public title: string;
  public player: BaseballPlayer;

  constructor(
    public bsModalRef2: BsModalRef,
    private baseballPlayerService: BaseballPlayerService
  ) { }

  ngOnInit() {
  }

  save(): void {
    this.baseballPlayerService.update(this.player)
        .then(() => this.announce('Updated'));
    this.bsModalRef2.hide();
  }

  announce(message: string): void {
    this.baseballPlayerService.announceMission(message);
  }

}
