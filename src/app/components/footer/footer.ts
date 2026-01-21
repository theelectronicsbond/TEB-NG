import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { APP_INFO } from '../../core/constants/app-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule], // Add to imports array
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  appInfo = APP_INFO;
}
