export interface Marker {
  id?: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  label: string;
}
