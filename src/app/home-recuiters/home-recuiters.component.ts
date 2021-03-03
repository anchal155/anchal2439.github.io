import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home-recuiters',
  templateUrl: './home-recuiters.component.html',
  styleUrls: ['./home-recuiters.component.scss']
})
export class HomeRecuitersComponent implements OnInit {

  constructor(
    private helper: HelperService
  ) { }

  ngOnInit() {
  }
  //? PAUSE PLAYER
  pausePlayer() {
    console.log("click");
    this.helper.play.emit();
  }

}
