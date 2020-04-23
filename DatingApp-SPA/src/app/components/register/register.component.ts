import { AlertifyService } from "./../../_services/alertify.service";
import { AuthService } from "./../../_services/auth.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success("Registration Successful");
        this.model = {};
        this.cancelRegister.emit(false);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.model = {};
  }
}
