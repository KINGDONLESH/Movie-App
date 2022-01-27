import { Component, OnInit } from '@angular/core';

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
]; 

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  username: any = "Shiba username";
  comment: any = "Koenaite comment";
  testArr: any = list;
  constructor() { }

  ngOnInit(): void {
    console.log(list)
  }

}
