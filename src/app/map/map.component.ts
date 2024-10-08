import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <google-map
      height="400px"
      width="100%"
      [center]="center"
      [zoom]="zoom"
    >
      <map-marker [position]="markerPosition"></map-marker>
    </google-map>
    <button (click)="getLocation()" class="mt-4 py-2 px-4 bg-blue-600 text-white rounded">Use My Location</button>
  `,
  styles: []
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // Default center
  zoom = 12;
  markerPosition: google.maps.LatLngLiteral = this.center;

  constructor() { }

  ngOnInit(): void {
    this.getLocation(); // Automatically try to get the location on init
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markerPosition = this.center; // Move marker to the user's location
        this.zoom = 15; // Zoom in on the user's location
      }, () => {
        alert('Unable to retrieve your location. Please check your settings.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
