import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../services/user.service';
// import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';

import { User } from '../user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
users: User={
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

  submitted!: false;
  

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = {
      firstName: this.users.firstName,
      lastName: this.users.lastName,
      username: this.users.username,
      email: this.users.email,
      password: this.users.password,
      confirmPassword: this.users.confirmPassword
    };
    this.userService.registerUser(this.users).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }
    
  }

 
// }
// tutorial: Tutorial = {
//   title: '',
//   description: '',
//   published: false
// };
// submitted = false;

// constructor(private tutorialService: TutorialService) {}

// saveTutorial(): void {
//   const data = {
//     title: this.tutorial.title,
//     description: this.tutorial.description
//   };

//   this.tutorialService.create(data).subscribe({
//     next: (res) => {
//       console.log(res);
//       this.submitted = true;
//     },
//     error: (e) => console.error(e)
//   });
// }

// newTutorial(): void {
//   this.submitted = false;
//   this.tutorial = {
//     title: '',
//     description: '',
//     published: false
//   };
// }