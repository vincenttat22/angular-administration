import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule, routingComponents} from './app-rounting.module';
import {FooterComponent} from './components/footer.component';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
