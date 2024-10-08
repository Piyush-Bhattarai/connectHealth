import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  mainServices = [
    {
      id: 1,
      title: 'Individual Therapy',
      description: 'One-on-one sessions with licensed therapists to address personal mental health concerns.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Group Therapy',
      description: 'Supportive group sessions led by professionals to share experiences and coping strategies.',
      image: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Online Counseling',
      description: 'Convenient virtual sessions with therapists from the comfort of your home.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];
}