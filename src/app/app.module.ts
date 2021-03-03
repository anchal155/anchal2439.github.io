import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRecuitersComponent } from './home-recuiters/home-recuiters.component';
import { ProductComponent } from './product/product.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { SupportComponent } from './support/support.component';
import { SmsQuestionScreenComponent } from './sms-question-screen/sms-question-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatCheckboxModule } from '@angular/material'
import { SharedModule } from "./shared/shared.module";
import { AngularMaterialModule } from "./material.module";
import { CallingComponent } from './calling/calling.component';
import { NotesComponent } from './notes/notes.component';
import { SmsScreeningComponent } from './sms-screening/sms-screening.component';
import { CallSchedulingComponent } from './call-scheduling/call-scheduling.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeRecuitersComponent,
    ProductComponent,
    IntegrationsComponent,
    SupportComponent,
    SmsQuestionScreenComponent,
    CallingComponent,
    NotesComponent,
    SmsScreeningComponent,
    CallSchedulingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
