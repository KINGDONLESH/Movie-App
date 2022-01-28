import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

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
  
  testArr: any = list;
  @Input() movieId: any;
  comments: any;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    //load movie comments
    this.commentService.getCommentsByMovieId('550')
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      },
      err => {
        console.log(err);
      })
  }

  postComment(): void {
    let comment = {
      userId: 2,
      movieId: '550',
      comment: 'Another comment from Zizipho'
    }
    this.commentService.addCommentToMovie(comment)
      .subscribe(data => {
        console.log(data);
      },
      err => {
        console.log(err);
      })
  }
  
}


