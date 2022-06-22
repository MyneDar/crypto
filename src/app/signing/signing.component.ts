import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(13)]),
  });


  login(): void {
    this.authService.login(this.profileForm.controls.userName.value, this.profileForm.controls.password.value)
  }

}
