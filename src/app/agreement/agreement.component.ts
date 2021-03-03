import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-agreement",
  templateUrl: "./agreement.component.html",
  styleUrls: ["./agreement.component.scss"]
})
export class AgreementComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Agreement");
  }

  ngOnInit() {}
}
