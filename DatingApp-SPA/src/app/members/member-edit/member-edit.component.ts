import { AuthService } from "./../../_services/auth.service";
import { UserService } from "./../../_services/user.service";
import { User } from "src/app/_models/user";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { AlertifyService } from "src/app/_services/alertify.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"],
})
export class MemberEditComponent implements OnInit {
  @ViewChild("editForm") editForm: NgForm;
  user: User;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.user = data["user"];
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  updateUser() {
    this.userService
      .updateUser(+this.authService.decodedToken.nameid, this.user)
      .subscribe(
        (next) => {
          this.alertify.success("Profile updated successfully");
          this.editForm.reset(this.user);
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
}
