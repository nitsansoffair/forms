import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectName: new FormControl(null),
      email: new FormControl(null),
      projectStatus: new FormControl(null)
    });
  }

  onSubmit() {}

  requiredProjectName(control: FormControl): [{name: string, boolean}] {
    if (!control.value) {
      return {
        required: true;
      };
    }

    return null;
  }
}
