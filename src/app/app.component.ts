import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    this.submitted = true;

    this.signupForm.reset();
  }
}
