import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {



  detailMovieId: any;

  constructor(private http: HttpClient) { }

  getLatest(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/860623?${environment.apiKey}`)

    let x = Math.floor((Math.random() * 4) + 1);
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=df28d542641cabda05a3ba0a68a5150b&language=en-US&page=${x}`);
  }

  getLatest1(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/429617?${environment.apiKey}`)

    let x = Math.floor((Math.random() * 4) + 1);
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=df28d542641cabda05a3ba0a68a5150b&language=en-US&page=${x}`);
  }

  getLatest2(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/885110?${environment.apiKey}`)

    let x = Math.floor((Math.random() * 4) + 1);
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=df28d542641cabda05a3ba0a68a5150b&language=en-US&page=${x}`);
  }

  popularMovies(): Observable<any[]> {
    let x = Math.floor((Math.random() * 4) + 1);
    return this.http.get<any[]>(`${environment.baseUrl}/popular?api_key=df28d542641cabda05a3ba0a68a5150b&language=en-US&page=${x}`);
  }

  setDetailMovieId(id: any): void{
    this.detailMovieId = id;
  }

  getCurrentMovie(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/3/movie/${this.detailMovieId}?${environment.apiKey}`);
  }
  searchMovie(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/search/movie?sort_by=popularity.desc`)
  }

  getActors(): Observable<any> {
    return this.http.get(`http://api.themoviedb.org/3/movie/${this.detailMovieId}/casts?api_key=bd71dc7772433931f0b658c89f90bf2d`)
  }
}
