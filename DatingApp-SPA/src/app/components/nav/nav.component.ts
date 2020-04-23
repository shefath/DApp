import { AlertifyService } from "./../../_services/alertify.service";
import { AuthService } from "./../../_services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private aleritfy: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.aleritfy.success("Logged in Successfully");
        this.model = {};
      },
      (error) => {
        this.aleritfy.error(error);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem("token");
    // return !!token;
  }

  logout() {
    localStorage.removeItem("token");
    this.aleritfy.message("Loggged Out");
  }
}
