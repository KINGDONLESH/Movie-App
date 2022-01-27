
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
// import { getSyntheticLeadingComments } from 'typescript';
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
    //this.getComments();
  
  }

  toggleItems(){
    const half = Math.ceil(this.allComments.length / 2);    
    const firstHalf = this.allComments.slice(0, half);

    // Update list to display
    if(this.displayAllComments){
      // console.log('Display all: 1'  + this.allComments);
      // console.log('Display all: 2'  + JSON.stringify(this.allComments));

      // console.log(`Display all: 3: ${this.allComments}`);
      // console.log(`Display all: 4: ${JSON.stringify(this.allComments)}`);

      this.testArr = this.allComments;
    }else{
      this.testArr = firstHalf;
      //console.log('Display half: ' + JSON.stringify(firstHalf));
    }

    this.displayAllComments = !this.displayAllComments;

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
