import { Injectable, Inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class SEOServiceService {
  constructor(
    @Inject(DOCUMENT) private doc,
    private title: Title,
    private meta: Meta
  ) {}
  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: "description", content: desc });
  }

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "canonical");
    this.doc.head.appendChild(link);
    link.setAttribute("href", this.doc.URL);
  }
}
