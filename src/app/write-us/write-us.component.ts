import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-write-us",
  templateUrl: "./write-us.component.html",
  styleUrls: ["./write-us.component.scss"]
})
export class WriteUsComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("Write-for-us");
  }

  ngOnInit() {}
}
