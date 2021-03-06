import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing'
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule} from '@angular/http';
import {AgGridModule} from 'ag-grid-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ForumsComponent } from './components/forums/forums.component';
import { DonationComponent } from './components/donation/donation.component';
import { RssfeedComponent } from './components/rssfeed/rssfeed.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './components/pipe/strip-html-tags.pipe';
import { NewsService } from './services/news.service';
import {ServiceModule} from './services/service.module'
import {HttpClientModule} from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { MatrimonalComponent } from './components/matrimonal/matrimonal.component';
import { RegisterComponent } from './components/register/register.component';
import { MembersComponent } from './components/members/members.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { EducationComponent } from './components/education/education.component';
import { FinancialComponent } from './components/financial/financial.component';
import { SpecialComponent } from './components/special/special.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MagazineComponent } from './components/magazine/magazine.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    ForumsComponent,
    DonationComponent,
    RssfeedComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    MatrimonalComponent,
    RegisterComponent,
    MembersComponent,
    EmploymentComponent,
    EducationComponent,
    FinancialComponent,
    SpecialComponent,
    MagazineComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    ROUTING,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDokqdPtN0qfxs63GlfF-vSMUXIkSmCTK0'
    })
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' }, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
