import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { SeoService } from './core/services/seo.service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('the-electronics-bond');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe((event) => {
      // Set Title
      if (event['title']) {
        this.seoService.updateTitle(event['title']);
      } else {
        this.seoService.updateTitle('The Electronics Bond');
      }

      // Set Meta Description
      if (event['description']) {
        this.seoService.updateMetaTags([
          { name: 'description', content: event['description'] },
          { property: 'og:description', content: event['description'] },
          { property: 'og:title', content: event['title'] || 'The Electronics Bond' }
        ]);
      }

      // Set Canonical URL
      const url = 'https://theelectronicsbond.com' + this.router.url;
      this.seoService.updateCanonicalUrl(url);

      // Update JSON-LD Schema (Basic Organization Schema for all pages for now)
      this.seoService.setJsonLd({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Electronics Bond",
        "url": "https://theelectronicsbond.com",
        "logo": "https://theelectronicsbond.com/assets/logo.png"
      });
    });
  }
}
