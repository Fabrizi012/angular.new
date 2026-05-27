import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <h1 class="navbar-title">Sistema de Asistencia</h1>
        <ul class="nav-links">
          <li>
            <a routerLink="/asistencia/grupo/laboratorio" routerLinkActive="active">
              Laboratorio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {}