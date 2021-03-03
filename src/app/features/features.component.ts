import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"]
})
export class FeaturesComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Features");
  }

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      };
    }
  }
}
