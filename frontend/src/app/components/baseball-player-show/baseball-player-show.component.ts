import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BaseballPlayer } from '../../models/baseball-player';
import { BaseballPlayerEditComponent }  from '../baseball-player-edit/baseball-player-edit.component';

@Component({
    selector: 'app-baseball-player-show',
    templateUrl: './baseball-player-show.component.html',
    styleUrls: ['./baseball-player-show.component.css'],
    standalone: false
})
export class BaseballPlayerShowComponent implements OnInit {

  public title: string;
  public player: BaseballPlayer;

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalRef2: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  public openModalWithEditComponent(): void {
    this.bsModalRef2 = this.modalService.show(BaseballPlayerEditComponent);
    this.bsModalRef2.content.title = '野球選手編集';
    this.bsModalRef2.content.player = this.player;
  }

}
