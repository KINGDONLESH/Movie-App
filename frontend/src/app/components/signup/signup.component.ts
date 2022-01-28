import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  myForm!: FormGroup;
  haveData: boolean = false;
  message: any = '';
  passwordMessage: any = '';
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
  fieldsWithData(): boolean{
    if(this.myForm.value.fullName && this.myForm.value.email && this.myForm.value.password &&  this.myForm.value.confirmPassword !== ""){
      this.haveData = true;
    this.passwordMatch();
    }
    else{
      this.haveData = false;
    }
    return this.haveData;
    
  }

  passwordMatch(): void {
    if(this.myForm.value.confirmPassword === this.myForm.value.password){
      this.passwordMessage == "Passwords match!";
    }
    else{
      this.passwordMessage == "Passwords do not match!";
    }
  }

  messages(): void{

    if(!this.fieldsWithData()){
      this.message = "Fields can't be empty";
    }
    else{
      this.message = "";
    }
  }

  submit(): void{
    console.log("Successfully registered!!");
    window.alert("Successfully registered!!");
  }
}
