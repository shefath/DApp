import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { ValueComponent } from "./value/value.component";

import { AuthService } from "./_services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AppComponent, ValueComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
