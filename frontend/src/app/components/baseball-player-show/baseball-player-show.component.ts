import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BaseballPlayer } from '../../models/baseball-player';

@Component({
  selector: 'app-baseball-player-show',
  templateUrl: './baseball-player-show.component.html',
  styleUrls: ['./baseball-player-show.component.css']
})
export class BaseballPlayerShowComponent implements OnInit {

  public title: string;
  public player: BaseballPlayer;

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

}
