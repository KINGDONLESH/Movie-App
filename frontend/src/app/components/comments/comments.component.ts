
import { Component, OnInit } from '@angular/core';
// import { getSyntheticLeadingComments } from 'typescript';
import {CommentService} from '../../services/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  // commentsArr: any = [];
  // results: any = [];
  // title: any;
  // numberOfComments: number = 10;
  // commentsTobeDisplayed: any;


  username: any = "Shiba username";
  comment: any = "Koenaite comment";
  getComments: any;
  constructor(private CommentApi: CommentService) { 
    // this.commentsArr = []



   }

  ngOnInit(): void {
    this.getComments();
  
  }
}

// getComments(): void{
//   this.commentApi: Comment()
//   .subscribe((res:any)) =>
//   this.commentsArr = res.resuls.splice(0, this.numberOFComments)




  
// }




// function getComments() {
//   throw new Error('Function not implemented.');
// }
