import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  title:String;
  list  = [
    {name:'Prashobh',age:'25'},
      {name:'Abraham',age:'35'},
      {name:'Philip',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'},
      {name:'Sam',age:'25'},
      {name:'Rocky',age:'35'},
      {name:'Major',age:'40'},
      {name:'Kian',age:'40'},
      {name:'Karan',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'},
      {name:'Prashobh',age:'25'},
      {name:'Abraham',age:'35'},
      {name:'Anil',age:'40'},
      {name:'Sam',age:'40'},
      {name:'Philip',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'}
   
   
  ]
  startPage : number;
  paginationLimit:number; 
  constructor(private movieApi: MovieServiceService){
    this.title = "Angular: Show more/show less pagination";
  
    this.startPage = 4;
    this.paginationLimit = 8 ;
   }
   showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 4;        
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 4;
   }

  ngOnInit(): void {
  }

}
