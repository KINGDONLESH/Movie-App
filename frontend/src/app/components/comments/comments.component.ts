
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import {CommentService} from '../../services/comment.service'

const list = [
    {
      name: 'Shiba',
      date: '8 days ago',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit error voluptatibus veniam exercitationem veritatis nisi dolores eos earum itaque illum quae sapiente, iste unde quo ab assumenda. Totam, harum.'
    },
    {
      name: 'lesho',
      date: '5 days ago',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit error voluptatibus veniam exercitationem veritatis nisi dolores eos earum itaque illum quae sapiente, iste unde quo ab assumenda. Totam, harum.'
    },
    {
      name: 'Zizipho',
      date: '3 days ago',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit error voluptatibus veniam exercitationem veritatis nisi dolores eos earum itaque illum quae sapiente, iste unde quo ab assumenda. Totam, harum.'
    },
    {
      name: 'Mash',
      date: '1days ago',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit error voluptatibus veniam exercitationem veritatis nisi dolores eos earum itaque illum quae sapiente, iste unde quo ab assumenda. Totam, harum.'
    },
    {
      name: 'Simphiwe',
      date: '3 days ago',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit error voluptatibus veniam exercitationem veritatis nisi dolores eos earum itaque illum quae sapiente, iste unde quo ab assumenda. Totam, harum.'
    }
]; 

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  displayAllComments = false;
  username: any = "Shiba username";
  comment: any = "Koenaite comment";
  getComments: any;
  testArr: any = list
  allComments: any = list

  constructor(private CommentApi: CommentService) { 
  
  }

  ngOnInit(): void {
  
  }

  toggleItems(){
    const half = Math.ceil(this.allComments.length / 2);    
    const firstHalf = this.allComments.slice(0, half);

    
    if(this.displayAllComments){
     

      this.testArr = this.allComments;
    }else{
      this.testArr = firstHalf;
      
    }

    this.displayAllComments = !this.displayAllComments;

  }
}


