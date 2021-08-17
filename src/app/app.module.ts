import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { StatsComponent } from './pages/stats/stats.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    StatsComponent,
    ContactEditComponent,
    SignUpComponent,
    TransferFundComponent,
    MoveListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
