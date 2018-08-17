import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


isUserLoggedIn:any= false;
userInfo:any ={};

  constructor(public navCtrl: NavController,public gp: GooglePlus) {

  }
loginWithGP(){
  this.gp.login({}).then(res=>{
    console.log(res);
    this.userInfo=res;
    this.isUserLoggedIn=true;
  }).catch(err =>console.log(err));
}
logout(){
  this.gp.logout().then( () =>{
    this.isUserLoggedIn=false;
  })
}

}
