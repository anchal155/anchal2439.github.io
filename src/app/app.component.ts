import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
import { SEOServiceService } from "./seoservice.service";
import { from } from "rxjs";
import { AnalyticsService } from "./analytics.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "FreJun";
  constructor(
    private router: Router,
    private _seoService: SEOServiceService,
    private route: ActivatedRoute,
    private anal_service: AnalyticsService
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === "primary"),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this._seoService.updateTitle(event["title"]);
        //Updating Description tag dynamically with title
        this._seoService.updateDescription(event["description"]);
        this._seoService.createLinkForCanonicalURL(); // add canonical link in angular dynamically
      });
  }
}
