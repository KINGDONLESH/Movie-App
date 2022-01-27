import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BaseUrl = 'http://localhost:3000/api/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * gets a list of comment records by movie ID
   * @param movieId id of movie as recorded in the database
   * @returns Observable<[]> : [ { comment_id, message, user_id, movie_id, created_at } ]
   */
  getCommentsByMovieId(movieId: string): Observable<any> {
    return this.http.get(`${BaseUrl}/${movieId}`);
  }

  /**
   * 
   * @param data - { message, userId, movieId, }
   * @returns Observable<{}> : { comment_id, message, user_id, movie_id, created_at }
   */
  addCommentToMovie(data: object): Observable<any> {
    return this.http.post(`${BaseUrl}`, data);
  }

  /**
   * 
   * @param commentId id of comment as recorded in the database
   * @returns Observable<{}> : { comment_id, message, user_id, movie_id, created_at }
   */
  removeCommentById(commentId: string): Observable<any> {
    return this.http.delete(`${BaseUrl}/${commentId}`);
  }

  /**
   * 
   * @param commentId id of comment as recorded in the database
   * @param newComment { message }
   * @returns Observable<{}> : { comment_id, message, user_id, movie_id, created_at }
   */
  updateCommentById(commentId: string, newComment: string): Observable<any> {
    return this.http.put(`${BaseUrl}/${commentId}`, {comment: newComment})
  }
}
