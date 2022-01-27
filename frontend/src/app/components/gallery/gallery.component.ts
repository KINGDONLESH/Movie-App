import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  safeUrl: any;
  url: string = '';

  constructor(private movieApi: MovieServiceService,
              private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.movieTrailer();
  }

  movieTrailer(): void{
    this.movieApi.getTrailer()
    .subscribe(res =>{
      console.log(res);
      
    })
  }

}
