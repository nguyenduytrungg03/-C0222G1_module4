import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationPassword} from "./validation-password";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
 public registerForm: FormGroup;
 // country: Country[] =[];



  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
    Email: new FormControl('',[Validators.email,Validators.required]),
    Country: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.minLength(6),Validators.required]),
    Confirm: new FormControl(),
    Age: new FormControl('',[Validators.min(18)]),
    Phone: new FormControl('',[Validators.pattern('^\\+84\\d{9,10}$')])
    },[ValidationPassword.MatchValidator('Password', 'Confirm')])
  }



  checkInfor() {
    console.log(this.registerForm.value)
  }
  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch')
    );
  }
}
