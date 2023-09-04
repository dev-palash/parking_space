import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { DataService } from '../../services/data.service';
import { Parking } from '../../models/parking.model';

Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  parkingList: Parking[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 28.626137, lng: 79.821603 }
  }

  constructor(
    private dataService: DataService
  ){
    this.parkingList = [...this.dataService.getParkingList()];
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 28.625485, lng: 79.821091 },
        draggable: true
      },
      {
        position: { lat: 28.625293, lng: 79.817926 },
        draggable: false
      },
      {
        position: { lat: 28.625182, lng: 79.81464 },
        draggable: true
      }
    ];
    for (let index = 0; index < this.parkingList.length; index++) {
      const data = this.parkingList[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`
      <div>
      <div  style="display: flex; justify-content: center">
        <div style="height: 5.5rem; width: auto">
          <img style="height: 100%" src="${data.imageUrl}" />
        </div>
        <div class="details">
          <div style="font-weight: 600; font-size: 3.5rem; ">
            <p class="m-0"> ${data.name} </p>
          </div>
          <div class="rating">
            <div class="stars">
              <mat-star-rating [rating]="rating" [starCount]="starCount" [color]="starColor"
                (ratingUpdated)="onRatingChanged($event)"></mat-star-rating>
            </div>
            <div class="text">
              <p class="m-0"><span>Great </span>(958 Ratings)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn_price">
    <button id='parking_btn' mat-raised-button style="background-color: #EA2769; border: none; height: 3rem; width: 100%; color: white;">Park Here</button>
  </div>
      `,{
        maxWidth: 560,
        maxHeight: 560,
        closeButton: true
      }).on('popupopen', ()=>{
       let btn =  document.getElementById('parking_btn') as HTMLElement;
       btn.onclick = function(){
        // alert('clicked');
       }
      })
      ;
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }
ngAfterViewInit(): void {
}
}
