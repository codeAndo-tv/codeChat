import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  title: string = 'codeChat';
  draftMessage: string = '';

  private router: Router;
  constructor(_router: Router){
    this.router = _router;
  }
  onLogout(): void{
    this.router.navigate(['/login']);
  }
}
