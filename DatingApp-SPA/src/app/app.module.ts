import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { RegisterComponent } from "./components/register/register.component";
import { AlertifyService } from "./_services/alertify.service";
import { AuthService } from "./_services/auth.service";
import { ErrorInterceptorProvider } from "./_services/error-interceptor";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [AuthService, ErrorInterceptorProvider, AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
