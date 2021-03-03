import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { DataService } from "../../data.service";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HelperService } from "../../helper.service";
// import { DataService } from '../data.service';
// import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  deviceInfo = null;
  MOBILE_WIDTH: 992;
  isMobileView: boolean = false;
  succuess: boolean = false;
  signsuccuess: boolean = false;
  mobWidth: any = "";
  model = { id: 0, password: "", email: "" };
  registermodel = {
    id: 0,
    email: "",
    firstname: "",
    lastname: "",
    password: ""
  };
  user = [];
  signuser = [];
  loginForm: FormGroup;
  checkUserdata: any = "";
  userresp: any = "";
  submitProcessed: boolean = false;
  submitSuccess: boolean = false;
  validSuccess: boolean = false;
  errorMessage: string;
  submitted: boolean = false;
  constructor(
    public httpClient: HttpClient,
    public dataService: DataService,
    private helper: HelperService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (typeof window !== "undefined") {
      this.userresp = JSON.parse(localStorage.getItem("currentUser"));
    }
    if (this.userresp != null) {
      if (
        this.userresp.slug != null &&
        this.userresp.slug != undefined &&
        this.userresp.slug != ""
      ) {
        this.succuess = true;
      }
    }
    // this.epicFunction();
  }

  ngOnInit() {
    this.helper.play.subscribe(() => {
      console.log("calling");
      this.setSRC();
    });
    //this.initializeForm();
  }
  //   $('a.play-video').click(function(){
  //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //   });

  //   $('a.stop-video').click(function(){
  //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  //   });

  //   $('a.pause-video').click(function(){
  //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  //   });
  // }
  // onClick(){
  //   console.log("inside");
  //   $('iframe').attr('src','');
  // }

  // epicFunction() {
  //   this.deviceInfo = this.deviceService.getDeviceInfo();
  //   const isMobile = this.deviceService.isMobile();
  //   const isTablet = this.deviceService.isTablet();
  //   const isDesktopDevice = this.deviceService.isDesktop();
  //   this.mobWidth = window.screen.width;
  //   if(this.deviceInfo.device != 'unknown'){
  // 		this.isMobileView = true;
  // 	}
  // 	if(this.mobWidth > this.MOBILE_WIDTH){
  // 		this.isMobileView = false;
  // 	}
  //   // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
  //   // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
  //   // console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  // }

  login() {
    this.dataService
      .login(this.model.email, this.model.password)
      .subscribe((res: any) => {
        this.user = res.slug;
        console.log(this.user);
        if (this.user != null && this.user != undefined) {
          this.router.navigate(["/home"]);
          this.succuess = true;
          this.checkUserdata = 1;
          console.log(this.succuess);
        } else {
          console.log(this.succuess);
          this.succuess = false;
        }
      });
  }
  // Logout from System
  logout() {
    this.dataService.logout();
    {
      this.checkUserdata = 0;
      this.succuess = false;
      this.router.navigate([""]);
    }
  }
  sigup() {
    this.submitted = true;
    // var obj = { email: this.registermodel.email, first_name: this.registermodel.firstname,last_name: this.registermodel.lastname, password: this.registermodel.password};
    // let payload = JSON.stringify(obj);
    this.dataService
      .sigup(
        this.registermodel.email,
        this.registermodel.firstname,
        this.registermodel.lastname,
        this.registermodel.password
      )
      .subscribe(
        data => {
          this.submitProcessed = true;
          this.submitSuccess = true;
          alert("Succufull Register Thank You");
        },
        err => {
          this.submitProcessed = true;
          this.submitSuccess = false;
          this.errorMessage = err;
          console.log(this.errorMessage);
        }
      );
  }

  //? CLEANING SRC
  cleanSRC() {
    console.log("inside");
    let player = [];
    player.push(document.getElementsByTagName("iframe")[0]);
    player[0].src = "";
  }

  //? SETTING SRC
  setSRC() {
    console.log("inside setsrc");
    let player = [];
    player.push(document.getElementsByTagName("iframe")[0]);
    player[0].src = "https://player.vimeo.com/video/417140085?autoplay=1";
  }

  // sigup() {
  //   this.dataService.sigup( this.registermodel.email, this.registermodel.firstname, this.registermodel.lastname, this.registermodel.password).subscribe((res: any) => {
  //     this.signuser = res.slug;
  //      console.log("HERE", res);
  //      console.log(this.signuser);
  //     if(this.signuser != null && this.signuser != undefined){
  //       this.signsuccuess = true;
  //     }
  //     else{
  //       this.signsuccuess = false;
  //     }
  //   });
  // }
}
