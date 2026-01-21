import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(
        private titleService: Title,
        private metaService: Meta,
        @Inject(DOCUMENT) private dom: Document,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    updateTitle(title: string) {
        this.titleService.setTitle(title);
    }

    updateMetaTags(metaTags: MetaDefinition[]) {
        metaTags.forEach(tag => {
            this.metaService.updateTag(tag);
        });
    }

    updateCanonicalUrl(url: string) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        let link: HTMLLinkElement = this.dom.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (link) {
            link.setAttribute('href', url);
        } else {
            link = this.dom.createElement('link');
            link.setAttribute('rel', 'canonical');
            link.setAttribute('href', url);
            this.dom.head.appendChild(link);
        }
    }

    setJsonLd(data: any) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        // Remove old script if exists
        const oldScript = this.dom.querySelector('script[type="application/ld+json"]');
        if (oldScript) {
            oldScript.remove();
        }

        const script = this.dom.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        this.dom.head.appendChild(script);
    }
}
