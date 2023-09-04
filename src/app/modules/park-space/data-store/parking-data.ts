import { Parking } from "../models/parking.model";
import { v4 as uuidv4 } from 'uuid';
export const parkingData: Parking[] = [
  {
    id: uuidv4(),
    name: 'Raddisson Hotel JFK Airport',
    imageUrl: 'assets/images/radisson.PNG',
    position: { lat: 28.625485, lng: 79.821091 },
    draggable: true
  },
  {
    id: uuidv4(),
    name: 'TWA Hotel',
    imageUrl: 'assets/images/twa.PNG',
    position: { lat: 28.625293, lng: 79.817926 },
    draggable: false
  },
  {
    id: uuidv4(),
    name: 'Jamaica Center- no Shuttle',
    imageUrl: 'assets/images/jamaica.PNG',
    position: { lat: 28.625182, lng: 79.81464 },
    draggable: true
  }
]
