import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userName: string = null;
  constructor(private UserService: UserService, private router: Router) {}
  signUp() {
    this.UserService.signUp(this.userName);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {}
}
