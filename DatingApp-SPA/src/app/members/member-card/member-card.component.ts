import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/_models/user";

@Component({
  selector: "member-card",
  templateUrl: "./member-card.component.html",
  styleUrls: ["./member-card.component.css"],
})
export class MemberCardComponent implements OnInit {
  @Input("user") user: User;

  constructor() {}

  ngOnInit(): void {}
}
