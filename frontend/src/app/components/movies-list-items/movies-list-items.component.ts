import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

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
    
  }

  ngOnInit(): void {
    this.getPupolarMovies();
    this.getMovie();

   }

   getPupolarMovies(): void{
    this.movieApi.popularMovies()
     .subscribe((res: any) => {
         this.movieArr = res.results.splice(0, this.numberOfMovies);
      
          console.log('The length of movie array:', this.movieArr.length)
             console.log(this.movieArr);
     
    },err =>{
      console.log(err);

    })
  }

  getMovie(): void{
    this.title = this.movieArr[0].title;
     console.log(this.title);
    
    }

  setMovieId(id: any): void{
    this.movieApi.setDetailMovieId(id);
    console.log(id);
    
  }

  showMore(){

    if(this.numberOfMovies < 20 ){
      this.numberOfMovies = this.numberOfMovies + 5
      this.getPupolarMovies()
    }
  }


  showLess(){
    if(this.numberOfMovies  > 10){
      this.numberOfMovies = this.numberOfMovies - 5
      this.getPupolarMovies()
    }
  }


  

}







