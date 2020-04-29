import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ListsComponent } from "./components/lists/lists.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver },
      },
      {
        path: "members",
        component: MemberListComponent,
        resolve: { users: MemberListResolver },
      },
      { path: "messages", component: MessagesComponent },
      { path: "list", component: ListsComponent },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
