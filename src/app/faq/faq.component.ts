import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"]
})
export class FaqComponent implements OnInit {
  constructor(private anal_service: AnalyticsService) {
    //!send event to segment.io through analytics service
    this.anal_service.page("FAQ");
  }

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      };
    }
  }
}
