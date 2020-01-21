import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators,AbstractControl}from '@angular/forms';
import { AajService } from '../aaj.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  emails:AbstractControl;
  pwds:AbstractControl;

  constructor(
    //private  spinner:NgxSpinnerService;
    //private router:Router,
    private formbuilder:FormBuilder,
    private userService:AajService
  ) {
    this.loginform = formbuilder.group({
      emails: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pwds: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.emails = this.loginform.controls['emails'];
    this.pwds = this.loginform.controls['pwds'];

   }

  ngOnInit() {
  }
login(){
  console.log("Method running......");
  if(this.loginform.value.email && this.loginform.value.pwds)
  {
  let sendData={
    emails:this.loginform.value.email,
    pwds:this.loginform.value.pwds
  }
  console.log('My Data Prepatred....',sendData);
  let data=this.userService.login(sendData);
  }
  else
  {
    console.log("Empty feild!!!");
    
  }       
  }
}