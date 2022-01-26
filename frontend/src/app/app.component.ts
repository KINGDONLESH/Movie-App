import { Component } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'string';
  viewmore: number = 10;
  moviesListItems!: number[];
  viewLess!: number;
  showMore!:any;
  movievsListItems!: any;

 viewMoreToggle(): void {
  this.viewmore = this.moviesListItems[0] + 5;  
 }

 viewLessTogggle(): void{
  this.viewLess = this.viewmore -5;
  }
=======
  title = 'MovieDB';
>>>>>>> 954c4a6855f4b36603bb11bd75eddbfa43c0a759
}

function viewLessTogggle() {
  throw new Error('Function not implemented.');
}

