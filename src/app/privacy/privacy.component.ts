import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.scss"]
})
export class PrivacyComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Privacy");
  }

  ngOnInit() {}
}
