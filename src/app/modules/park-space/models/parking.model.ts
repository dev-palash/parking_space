export interface Parking{
  id: string;
  name: string;
  imageUrl: string;
  position: {
    lat: number;
    lng: number;
  };
  draggable: boolean;
}
