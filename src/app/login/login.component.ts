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
  chatTitle: string = 'Juanito';
  isLoading: boolean = true;

  
  constructor(private router: Router) {}

  onLogin(): void{
  this.router.navigate(['/chat']);
  }
}
