import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser = {}
  userList = [{userName: 'teszt', password: 'jelszo'}]
  constructor(private router: Router) { }

  login(userName: string | null, password: string | null){
    const foundUser = this.userList.filter(user => user.userName == userName && user.password == password)
    if(!foundUser){
      //insert new user and save to current user
      if(userName != null && password != null ){
        this.userList.push({userName , password})
      }
    }
    else {
      this.currentUser = {userName , password}
    }
    console.log('na csá')
    this.router.navigate(['crypto']).then()
  }

  loadUserData(){

  }
}
