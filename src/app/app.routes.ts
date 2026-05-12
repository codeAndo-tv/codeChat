import { Routes } from '@angular/router';
// Importamos los componentes que ya creamos en el Capítulo 2
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

// Cada ruta dice: "cuando la URL sea X, mostrá el componente Y"
export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // /login → Login
  { path: 'chat', component: ChatComponent },    // /chat → Chat
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // / → redirige a /login
  { path: '**', redirectTo: '/login' },  // Cualquier otra URL → /login
];