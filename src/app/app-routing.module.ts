import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { TermsPolicyComponent } from "./terms-policy/terms-policy.component";
import { DownloadComponent } from "./download/download.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { FaqComponent } from "./faq/faq.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { AgreementComponent } from "./agreement/agreement.component";
import { WriteUsComponent } from "./write-us/write-us.component";
import { HomeRecuitersComponent } from "./home-recuiters/home-recuiters.component";
import { ProductComponent } from "./product/product.component";
import { IntegrationsComponent } from "./integrations/integrations.component";
import { SupportComponent } from "./support/support.component";
import { SmsQuestionScreenComponent } from "./sms-question-screen/sms-question-screen.component";
import {CallSchedulingComponent} from "./call-scheduling/call-scheduling.component";
import {CallingComponent} from "./calling/calling.component";
import {SmsScreeningComponent} from "./sms-screening/sms-screening.component";
import {NotesComponent} from "./notes/notes.component";

const routes: Routes = [
  {
    path: "",
    component: HomeRecuitersComponent,
    pathMatch: "full",
    data: {
      page: "Home",
      title: "Automate your interview process with AI | FreJunHR",
      description:
        "Shortlist the best candidates with automated interview scheduling & calling, personalized messages, & smart interview notes with AI interview insights.",
      keywords:
        "interview process, AI insights, automated interview scheduling",
    },
  },
  {
    path: "calling",
    component: CallingComponent,
    pathMatch: "full",
    
  },

  {
    path: "call-scheduling",
    component: CallSchedulingComponent,
    pathMatch: "full",
    
  },

  {
    path: "sms-screening",
    component: SmsScreeningComponent,
    pathMatch: "full",
    
  },

  {
    path: "notes&AI",
    component: NotesComponent,
    pathMatch: "full",
    
  },

  // {
  //   path: "home",
  //   component: LandingPageComponent,
  //   pathMatch: "full",
  //   data: {
  //     title: "FreJun: Meeting Minutes Recording & Transcription Software",
  //     description:
  //       "FreJun, your AI-powered assistant records & transcripts the minutes and action plan from your meetings, conference call and other important voice conversations."
  //   }
  // },
  // {
  //   path: "download",
  //   loadChildren: "./download/download.module#DownloadModule",
  //   component: DownloadComponent,
  //   pathMatch: "full",
  //   data: {
  //     title: "Download FreJun: AI Assistant for automating your meeting notes",
  //     description:
  //       "Download FreJun: AI Assistant for automating your meeting notes"
  //   }
  // },
  {
    path: "product",
    component: ProductComponent,
    //loadChildren: "./product/product.module#ProductComponent",
    pathMatch: "full",
    data: {
      page: "Product",
      title:
        "Streamline your interview process with AI | FreJunHR for Recruiters",
      description:
        "With AI interview insights, automated interview scheduling & calling, personalized messages, and smart interview notes, FreJunHR helps you shortlist the best candidates faster.",
    },
  },
  {
    path: "support",
    component: SupportComponent,
    //loadChildren: "./product/product.module#ProductComponent",
    pathMatch: "full",
    data: {
      page: "Support",
      title: "Contact FreJunHR Support | Support, FAQ, & Help Center",
      description:
        "Get information on how to get started with FreJunHR, product-related queries, and billing details. Contact us for support and assistance at hello@frejun.com",
      keywords: "FreJunHR support, Contact FreJunHR",
    },
  },
  {
    path: "integrations",
    component: IntegrationsComponent,
    //loadChildren: "./product/product.module#ProductComponent",
    pathMatch: "full",
    data: {
      page: "Integrations",
      title: "Integrations - FreJun",
      description:
        "This page has three components, Users Terms of Service, Privacy Policy and End users License Agreement. Each page explaining different components of the legal aspects of the product usage. ",
    },
  },
  {
    path: "terms",
    // component: TermsPolicyComponent,
    loadChildren: "./terms-policy/terms-policy.module#TermsPolicyModule",
    pathMatch: "full",
    data: {
      page: "Terms & policy",
      title: "Terms and Conditions | FreJunHR",
      description:
        "By using FreJunHR, you agree to the T&C listed here. Please go through them. Any changes in T&C will be notified to users via email.",
    },
  },
  {
    path: "agree",
    // component: AgreementComponent,
    loadChildren: "./agreement/agreement.module#AgreementModule",
    pathMatch: "full",
    data: {
      page: "Agreement",
      title: "End User License Agreement | FreJunHR",
      description:
        "The EULA is the legal statement between the user of FreJunHR and FreJunHR.",
    },
  },
  {
    path: "privacy",
    // component: PrivacyComponent,
    loadChildren: "./privacy/privacy.module#PrivacyModule",
    pathMatch: "full",
    data: {
      page: "Privacy",
      title: "Privacy Policy | FreJunHR",
      description:
        "Our Privacy Policy explains how we collect and use your personal information. The statement why we collect your personal information and our responsibilities towards it.",
    },

    // component: TermsPolicyComponent,
    // pathMatch: "full"
  },
  {
    path: "pricing",
    loadChildren: "./pricing/pricing.module#PricingModule",
    // component: PricingComponent,
    // pathMatch: "full",
    data: {
      page: "Pricing",
      title: "Pricing plans for remote recruitment teams | FreJunHR",
      description:
        "Increase candidate show ups, improve candidate engagement, and get the perfect fit with custom plans tailored for your needs.",
      keywords: "remote recruitment teams, FreJunHR pricing",
    },
  },
  {
    path: "features",
    loadChildren: "./features/features.module#FeaturesModule",
    // component: FeaturesComponent,
    // pathMatch: "full",
    data: {
      page: "Features",
      title: "Know more | FreJun",
      description:
        "Learn more about FreJun's features, the AI platform to save time and improve accountability after your meetings and business conversations.",
    },
  },

  {
    path: "write-for-us",
    loadChildren: "./write-us/write-us.module#WriteUsModule",
    // component: WriteUsComponent,
    // pathMatch: "full",
    data: {
      page: "Write-for-us",
      title:
        "Platform to bring fresh perspective through guest blogging - FreJun",
      description:
        "Be FreJun's guest writer - an opportunity to share your insights and present fresh perspectives to the readers.",
    },
  },
  {
    path: "faq",
    loadChildren: "./faq/faq.module#FaqModule",
    // component: FaqComponent,
    // pathMatch: "full",
    data: {
      page: "FAQ",
      title: "FAQs & Help center I FreJun's customer support",
      description:
        "Got questions about FreJun’s products or pricing? Here are some quick answers. If your questions are not available here, contact us at hello@frejun.com.",
    },
  },
  {
    path: ":id",
    component: SmsQuestionScreenComponent,
  },
  // {
  //   path: "home",
  //   redirectTo: "/"
  // },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
