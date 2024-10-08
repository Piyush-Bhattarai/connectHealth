import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = [
    { name: 'Home', RouterLink: '/home', icon: 'fas fa-home' },
    { name: 'About Us', RouterLink: '/about', icon: 'fas fa-info-circle' },
    { name: 'Our Services', RouterLink: '/services', icon: 'fas fa-cogs' },
    { name: 'Gallery', RouterLink: '/gallery', icon: 'fas fa-images' },
    { name: 'Contact', RouterLink: '/contact', icon: 'fas fa-envelope' }
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('#main-header') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }
}