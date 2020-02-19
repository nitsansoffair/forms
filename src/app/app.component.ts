import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectName: new FormControl(null, Validators.required, this.forbiddenProjectName),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({
            forbiddenProjectName: true
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
