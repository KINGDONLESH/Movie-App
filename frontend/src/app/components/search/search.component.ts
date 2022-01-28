import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movieArr: any = [];
  constructor(private movieApi: MovieServiceService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.movieApi.searchMovie().
    subscribe((res: any) => {
      this.movieArr = res.results}, 
      err=>{console.log(err)}
      );
  }
}
