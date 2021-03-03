import { Component, OnInit } from "@angular/core";
import { HelperService } from "../helper.service";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})
export class PricingComponent implements OnInit {
  constructor(private helper: HelperService) {

  }

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }
  //? PAUSE PLAYER
  pausePlayer() {
    console.log("click");
    this.helper.play.emit();
  }
}
