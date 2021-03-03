import { Injectable } from "@angular/core";
declare let analytics: any;
@Injectable({
  providedIn: "root"
})
export class AnalyticsService {
  constructor() {}
  identify(id, data) {
    /*
    analytics.identify("97980cfea0067", {
      name: "Peter Gibbons",
      email: "peter@example.com",
      plan: "premium",
      logins: 5
    });
    */
    analytics.identify(id, data);
  }

  page(name) {
    analytics.page(name);
  }

  group(id, data) {
    /*
    analytics.group("0e8c78ea9d97a7b8185e8632", {
      name: "Initech",
      industry: "Technology",
      employees: 329,
      plan: "enterprise",
      "total billed": 830
    });
    */
    analytics.group(id, data);
  }

  track(event, data) {
    /*
      analytics.track("User Registered", {
        plan: "Pro Annual",
        accountType: "Facebook"
      });
      */
    analytics.track(event, data);
  }
}
