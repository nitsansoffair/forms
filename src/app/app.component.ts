import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.forbiddenProjectName]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null)
    });
  }

  onSubmit() {}

  forbiddenProjectName(control: FormControl): {[name: string]: boolean} {
    if (control.value === 'Test') {
      return {
        forbiddenProjectName: true
      };
    }

    return null;
  }
}
