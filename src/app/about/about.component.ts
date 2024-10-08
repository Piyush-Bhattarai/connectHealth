import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    { name: 'Dr. Emily Smith', role: 'Lead Counselor', image: 'https://via.placeholder.com/150' },
    { name: 'John Doe', role: 'Therapist', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe', role: 'Wellness Coach', image: 'https://via.placeholder.com/150' }
  ];

  coreValues = [
    'Compassion: We care deeply about the well-being of our clients.',
    'Confidentiality: We provide a safe and private space for healing.',
    'Inclusivity: We welcome individuals from all backgrounds.',
    'Empowerment: We believe in helping people take charge of their mental health.'
  ];

  milestones = [
    { year: 2020, event: 'Founded Mental Health Support Network' },
    { year: 2021, event: 'Launched online counseling platform' },
    { year: 2022, event: 'Expanded to 5 new cities' },
    { year: 2023, event: 'Reached 10,000 people through our programs' }
  ];

  impactStats = [
    { value: '10,000+', label: 'People Helped' },
    { value: '500+', label: 'Workshops Conducted' },
    { value: '50+', label: 'Mental Health Resources Created' }
  ];

  founderMessage = "Our journey began with a simple idea: everyone deserves access to quality mental health support. Today, we're proud to see how far we've come, but we know there's still so much more to do. Together, we can create a world where mental health is prioritized and stigma is a thing of the past.";

  awards = [
    { name: 'Community Impact Award', year: '2022', image: 'https://via.placeholder.com/100' },
    { name: 'Innovation in Mental Health', year: '2023', image: 'https://via.placeholder.com/100' }
  ];

  partners = [
    { name: 'Partner 1', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner 2', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner 3', logo: 'https://via.placeholder.com/150' }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Client',
      image: 'https://via.placeholder.com/60',
      quote: 'The support I received here has been life-changing. I feel more confident and equipped to handle life\'s challenges.'
    },
    {
      name: 'Mike Thompson',
      title: 'Community Partner',
      image: 'https://via.placeholder.com/60',
      quote: 'Their dedication to mental health awareness and support in our community is truly commendable.'
    }
  ];

  faqItems = [
    { 
      question: 'How can I access your services?', 
      answer: 'You can access our services through our online platform or by visiting one of our physical locations.' 
    },
    { 
      question: 'Are your services confidential?', 
      answer: 'Yes, all our services are completely confidential. We adhere to strict privacy policies to protect our clients.' 
    }
  ];
}