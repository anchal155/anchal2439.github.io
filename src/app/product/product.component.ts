import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private helper: HelperService) { }

  ngOnInit() {
  }
  //? PAUSE PLAYER
  pausePlayer() {
    console.log("click");
    this.helper.play.emit();
  }

}
