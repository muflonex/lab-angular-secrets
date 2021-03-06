import { Component } from "@angular/core";
import { SessionService } from "../session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-signup",
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.css"]
})
export class AuthSignupComponent {
  username: string;
  password: string;
  name: string;
  secret: string;
  constructor(public sessionService: SessionService, private router:Router) {}

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      name: this.name,
      secret: this.secret
    };
    console.log(user)
    this.sessionService.signup(user).subscribe(() =>{
      this.username = "";
      this.password = "";
      this.name = "";
      this.secret = "";
      this.sessionService.isLoggedIn().subscribe(() => this.router.navigate(['/private']));
    })
  }
}
