import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  //private router: Router;
  //constructor(router: Router){
  //  this.router = router
  //}

  constructor(private router: Router) {}

  onLogin(): void{
    this.router.navigate(['/chat']);
  }
}
