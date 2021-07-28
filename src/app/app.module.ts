import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from'./app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { InformationPageComponent } from './components/information-page/information-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    RegisterPageComponent,
    LoginPageComponent,
    InformationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
