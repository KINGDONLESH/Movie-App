import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  myForm!: FormGroup;
  haveData: boolean = false;
  message: any = '';
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    });
    this.messages();
  }

  messages(): void{

    if(!this.fieldsWithData()){
      this.message = "Fields can't be empty";
    }
    else{
      this.message = "";
    }
  }
  fieldsWithData(): boolean{
    if(this.myForm.value.email && this.myForm.value.password !== ""){
      this.haveData = true;
      this.message = "Fields can't be empty";
    }
    else{
      this.haveData = false;
    }
    return this.haveData;
    
  }

  submit(): void{
    console.log("Successfully logged in!!");
    // window.alert("Successfully registered!!");
  }
}
