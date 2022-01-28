import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {
  rating = 0;
  movieArr: any = [];
  results: any = [];
  title: any;
  pic: any;
  numberOfMovies : number = 10;
  moviesToBeDisplayed: any;

  constructor(private movieApi: MovieServiceService) { 
    this.movieArr = []
    
    
     }

  ngOnInit(): void {
    this.getPupolarMovies();
    this.getMovie();
    //this.getPop();
  }

  ratings(){
    return this.rating = this.rating + 1;
  }

  getPupolarMovies(): void{
    this.movieApi.popularMovies()
    .subscribe((res: any) => {
      this.movieArr = res.results.splice(0, this.numberOfMovies);
    },err =>{
      console.log(err);
  
    })
  }

  getMovie(): void{
    this.title = this.movieArr[0].title;
  }

  setMovieId(id: any): void{
    this.movieApi.setDetailMovieId(id);
    console.log(id);
    
  }


  showMoreItems(){

    if(this.numberOfMovies < 20 ){
      this.numberOfMovies = this.numberOfMovies + 5
      this.getPupolarMovies()
    }
  }

  showLessItems(){
    if(this.numberOfMovies  > 10){
      this.numberOfMovies = this.numberOfMovies - 5
      this.getPupolarMovies()
    }
  }



}
