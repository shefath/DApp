import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ListsComponent } from "./components/lists/lists.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent },
      { path: "messages", component: MessagesComponent },
      { path: "list", component: ListsComponent },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
