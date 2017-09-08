import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import * as $ from 'jquery';
import { BaseballPlayer } from '../models/baseball-player';

@Injectable()

export class BaseballPlayerService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseballPlayersUrl = 'api/v1/baseball_players';
  constructor(private http: Http) { }

  private missionAnnouncedSource = new Subject<string>();
 
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  getBaseballPlayers(): Promise<BaseballPlayer[]> {
    return this.http.get(this.baseballPlayersUrl)
               .toPromise()
               .then(response => response.json().baseball_players as BaseballPlayer[])
               .catch(this.handleError);
  }

  getBaseballPlayer(player_id: number): Promise<BaseballPlayer> {
    const url = `${this.baseballPlayersUrl}/${player_id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().baseball_player as BaseballPlayer)
               .catch(this.handleError);
  }

  update(player: BaseballPlayer): Promise<BaseballPlayer> {
    const url = `${this.baseballPlayersUrl}/${player.id}`;
    let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')});
    return this.http
               .put(url, JSON.stringify(player), {headers: headers})
               .toPromise()
               .then(() => player)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
