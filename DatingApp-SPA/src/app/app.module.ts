import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ListsComponent } from "./components/lists/lists.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { NavComponent } from "./components/nav/nav.component";
import { RegisterComponent } from "./components/register/register.component";
import { appRoutes } from "./routes";

import { AlertifyService } from "./_services/alertify.service";
import { AuthService } from "./_services/auth.service";
import { ErrorInterceptorProvider } from "./_services/error-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, ErrorInterceptorProvider, AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
