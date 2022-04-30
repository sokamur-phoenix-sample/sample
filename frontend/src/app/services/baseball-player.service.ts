import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { BaseballPlayer } from '../models/baseball-player';

@Injectable({
  providedIn: 'root',
})

export class BaseballPlayerService {
  private baseballPlayersUrl = 'api/v1/baseball_players';
  constructor(private http: HttpClient) { }

  private missionAnnouncedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  getBaseballPlayers(): Promise<BaseballPlayer[]> {
    return this.http.get(this.baseballPlayersUrl)
               .toPromise()
               .then((response: any) => response.baseball_players as BaseballPlayer[] )
               .catch(this.handleError);
  }

  getBaseballPlayer(player_id: number): Promise<BaseballPlayer> {
    const url = `api/v1/baseball_players/player_id`;
    return this.http.get(url)
               .toPromise()
               .then((response: any) => response.baseball_player as BaseballPlayer)
               .catch(this.handleError);
  }

  update(player: BaseballPlayer): Promise<any> {
    const url = `api/v1/baseball_players/player_id`;
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http
               .put(url, JSON.stringify(player), {headers: headers})
               .toPromise()
               .then((response: any) => player)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
