import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  login = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  getuser_name(){
    if(this.login.controls['username'].hasError('required')){
      return 'Formfield cannot be empty';
    }
    return '';
  }

  getpassword(){
    if(this.login.controls['password'].hasError('required')){
      return 'Formfiled cannot be empty';
    }
    return '';
  }




  ngOnInit(): void {
  }

}
