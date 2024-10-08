import { Component } from '@angular/core';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Therapy Session',
      category: 'Services',
      description: 'A calm and welcoming environment for individual therapy sessions.'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Support Group',
      category: 'Community',
      description: 'Our weekly support group meetings foster connection and healing.'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Online Counseling',
      category: 'Services',
      description: 'Secure and convenient online counseling sessions from the comfort of your home.'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Mindfulness Workshop',
      category: 'Events',
      description: 'Interactive workshops teaching mindfulness techniques for stress reduction.'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Our Team',
      category: 'Team',
      description: 'Meet our dedicated team of mental health professionals.'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Facility Tour',
      category: 'Facilities',
      description: 'Take a virtual tour of our state-of-the-art mental health facility.'
    }
  ];

  categories: string[] = ['All', 'Services', 'Community', 'Events', 'Team', 'Facilities'];
  selectedCategory: string = 'All';
  
  selectedImage: GalleryImage | null = null;

  filterImages(category: string): void {
    this.selectedCategory = category;
  }

  get filteredImages(): GalleryImage[] {
    return this.selectedCategory === 'All' 
      ? this.galleryImages 
      : this.galleryImages.filter(img => img.category === this.selectedCategory);
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = ''; // Restore scrolling
  }

  getIcon(category: string): string {
    switch (category) {
      case 'All': return 'fa-th';
      case 'Services': return 'fa-user-md';
      case 'Community': return 'fa-users';
      case 'Events': return 'fa-calendar-alt';
      case 'Team': return 'fa-user-friends';
      case 'Facilities': return 'fa-building';
      default: return 'fa-image';
    }
  }
}