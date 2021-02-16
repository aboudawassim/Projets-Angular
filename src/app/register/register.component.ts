import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { ImageService } from './../services/image.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedFiles: FileList;
  //currentFile: File;
  //progress = 0;
  message;
  fileInfos: Observable<any>;
  choix;
  register: FormGroup;
  submitted = false;
  fileUpload: File = null;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userservice: UserService,
    private imageService: ImageService
  ) {}
  gotologin() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.fileInfos = this.imageService.getFiles();
    this.register = this.formbuilder.group(
      {
        nom: ['', [Validators.required]],
        prenom: ['', Validators.required],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        SpaceName: ['', [Validators.required]],
        ArtistName: ['', [Validators.required]],
        tel: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        photo: [''],
      },

      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.register.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value, null, 4));

    this.router.navigate(['/']);
  }

  onReset() {
    this.submitted = false;
    this.register.reset();
  }
  registerClient() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }

    // display form values on success
    this.userservice
      .registerClient(this.register.value)
      .subscribe((res: any) => {
        console.log(res);
      });

    this.router.navigate(['/']);
  }
  registerGerantSpace() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('nom', this.register.value.nom);
    formData.append('prenom', this.register.value.prenom);
    formData.append('email', this.register.value.email);
    formData.append('password', this.register.value.password);
    formData.append('username', this.register.value.username);
    formData.append('tel', this.register.value.tel);
    formData.append('file', this.fileUpload);

    this.userservice.registerGerantSpace(1, formData).subscribe((res) => {
      console.log(res);
      // display form values on success
      /*  this.userservice
      .registerGerantSpace(this.register.value)
      .subscribe((result: any) => {
        console.log(result); */
    });

    this.router.navigate(['/']);
  }
  registerGerantArtiste() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }


    const formData = new FormData();
Object.keys(this.register.value).forEach((key)=>{formData.append(key,this.register.value[key])});


    // display form values on success
    this.userservice
      .registerGerantArtiste(3,formData)
      .subscribe((resulta: any) => {
        console.log(resulta);
      });

    this.router.navigate(['/']);
  }

  registre() {
    this.choix = '';
  }

  choixClient() {
    this.choix = 'Client';
  }

  choixGerantArtiste() {
    this.choix = 'GerantArtiste';
  }
  choixGerantSpace() {
    this.choix = 'GerantSpace';
  }

  selectfile(event) {
    this.fileUpload = event.target.files[0];
    console.log(this.fileUpload);
  }

 /* upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.imageService.pushFileToStorage(this.currentFile).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          // this.message = event.body.message;
          this.fileInfos = this.imageService.getFiles();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  } */
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
