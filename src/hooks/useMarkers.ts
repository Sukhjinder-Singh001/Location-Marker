import {useState, useEffect} from 'react';
import {Marker} from '../types/marker';
import {
  addMarkerToFirestore,
  deleteMarkerFromFirestore,
  subscribeToMarkers,
} from '../services/markerService';

export const useMarkers = () => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToMarkers(setMarkers);
    return () => unsubscribe(); // Clean subscription on unmount
  }, []);

  const addMarker = async (marker: Marker) => {
    await addMarkerToFirestore(marker);
  };

  const deleteMarker = async (id: string) => {
    await deleteMarkerFromFirestore(id);
  };

  return {markers, addMarker, deleteMarker};
};
