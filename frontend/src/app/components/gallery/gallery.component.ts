import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  trailerMovie: any;

  constructor(private movieApi: MovieServiceService,
              private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.trailer();
  }

  trailer(): void{
    this.movieApi.getTrailor()
    .subscribe(res =>{
      console.log(res.results);
      
    })
  }

}
