import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  user = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirm_password: ['', [Validators.required]]
  });


  getfirst_name() {
    if (this.user.controls['first_name'].hasError('required')) {
      return 'Form Field cannot be empty';
    }
    return '';
  }

  getlast_name() {
    if (this.user.controls['last_name'].hasError('required')) {
      return 'Form Field cannot be empty';
    }
    return '';
  }

  getemail() {
    if (this.user.controls['email'].hasError('required')) {
      return 'Form Field cannot be empty';
    }

    return this.user.controls['email'].hasError('email') ? 'valid email required' : '';
  }

  getpassword() {
    if (this.user.controls['password'].hasError('required')) {
      return 'Form filed cannot be empty';
    }
    return '';
  }

  getconfirm_password() {
    if (this.user.controls['confirm_password'].hasError('required')) {
      return 'Form field cannot be empty';
    }

    return this.user.controls['confirm_password'].value == this.user.controls['password'].value ? 'not match' : '';
  }

  ngOnInit(): void {
  }

}
