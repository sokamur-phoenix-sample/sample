import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BaseballPlayer } from '../models/baseball-player';

@Injectable()

export class BaseballPlayerService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseballPlayersUrl = 'api/v1/baseball_players';
  constructor(private http: Http) { }

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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
