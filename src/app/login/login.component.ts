import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private loginservice: UserService
  ) {}

  ngOnInit() {
    this.login = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  /*  gotohome(){
  this.router.navigate(['/home']) ;
} */
  // convenience getter for easy access to form fields
  get f() {
    return this.login.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value, null, 4));

    this.router.navigate(['/home']);
  }

  onReset() {
    this.submitted = false;
    this.login.reset();
  }
  gotoregister() {
    this.router.navigate(['/reg']);
  }

  onlogin() {
    this.submitted = true;
    if (this.login.invalid) {
      return;
    }
    let params = new HttpParams();
    params = params.append('email', this.login.value.email);
    params = params.append('password', this.login.value.password);
    this.loginservice.login(params).subscribe(
      (res: any) => {


        localStorage.setItem("state","1")
        console.log(res.body);
        // const jwt = res.headers.get('Authorization');
        // this.loginservice.saveToken(jwt);
     ///  this.router.navigate(['/home']);

        if (res.body!=null) {

          this.router.navigate(['/home']);
          Swal.fire(
            'Good job!',
            'You are connected!',
            'success'
          )
        } else {
          Swal.fire({
            icon: 'error',
            title: 'oops...',
            text: 'nom utilisateur ou mot de passe incorrect ',
          });
        }
      },

      (a) => {
        Swal.fire({
          icon: 'error',
          title: 'oops...',
          text: 'nom utilisateur ou mot de passe incorrect ',
        });
      }
    );
  }
  logout(){
    localStorage.setItem('state','0')
    this.router.navigate([''])

  }
}
