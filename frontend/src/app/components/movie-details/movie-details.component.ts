import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie_name: any = "Title of the movie";
  movie_description: any = "Shiba did this";
  movie_runtime!: any;
  movie_release_date!: any;
  movie_director!: any;
  movie_genre!: any;
  movie_rating: any = 1;

  movieArr: any = [];
  results: any = [];
  movie_pic: any;

  constructor(private movieApi: MovieServiceService) { }

  ngOnInit(): void {
    this.getMovie();
    this.getPupolarMovies();
    console.log("shu")
  }

  getPupolarMovies(): void{
    console.log("Shiba");
    this.movieApi.popularMovies()
    .subscribe((res: any) => {
      this.movieArr = res.results; 
      console.log(this.movieArr);
      //console.log(this.movieArr[0].title);
      
    },err =>{
      console.log(err);
      
    })
  }

  getMovie(): void{
    this.movie_name = this.movieArr[0].title;
    this.movie_rating = this.movieArr[0].vote_average;

    // this.pic = this.movieArr.results.backdrop_path;
    console.log(this.movie_name);
    console.log("shiba");
    //console.log(this.movieArr[0].vote_average);
    // console.log(this.pic);
    
  }

}
