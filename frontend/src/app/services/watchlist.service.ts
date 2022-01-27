import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BaseUrl = 'http://localhost:3000/api/watchlist'

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * gets a list of watchlist items by the user's id
   * @param userId id of user as recorded in the database
   * @returns observable<[]> : [ {watchlist_id, user_id, movie_id, created_at} ]
   */
  getWatchlistByUserId(userId: string): Observable<any> {
    return this.http.get(`${BaseUrl}/${userId}`)
  }

  /**
   * 
   * @param data - { userId, movieId }
   * @returns Observable<{}> : {watchlist_id, user_id, movie_id, created_at}
   */
  addToWatchlist(data: object): Observable<any> {
    return this.http.post(`${BaseUrl}`, data)
  }

  /**
   * 
   * @param watchlistItemId id of watchlist item as recorded in the database
   * @returns Observable<{}> : {watchlist_id, user_id, movie_id, created_at}
   */
  removeWatchlistItem(watchlistItemId: string): Observable<any> {
    return this.http.delete(`${BaseUrl}/${watchlistItemId}`)
  }
}
