import { Component, OnInit } from "@angular/core";
import { HelperService } from "../helper.service";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  constructor(
    private helper: HelperService,
    private anal_service: AnalyticsService
  ) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Home");
  }

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function() {
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
