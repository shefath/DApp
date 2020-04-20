import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"],
})
export class ValueComponent implements OnInit, OnDestroy {
  values: any;
  subscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getValues() {
    this.subscription = this.http
      .get("http://localhost:5000/api/Values")
      .subscribe(
        (response) => {
          this.values = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
