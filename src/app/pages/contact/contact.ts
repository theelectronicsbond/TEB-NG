import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_INFO } from '../../core/constants/app-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  appInfo = APP_INFO;
}
