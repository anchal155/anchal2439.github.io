import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./terms-policy.component.html",
  styleUrls: ["./terms-policy.component.scss"]
})
export class TermsPolicyComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Terms & policy");
  }

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      };
    }
  }
}
