import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Marker } from '../types/marker';

const markersCollection = collection(db, 'markers');

export const addMarkerToFirestore = async (marker: Marker) => {
  return await addDoc(markersCollection, marker);
};

export const deleteMarkerFromFirestore = async (id: string) => {
  const markerDoc = doc(db, 'markers', id);
  return await deleteDoc(markerDoc);
};

export const subscribeToMarkers = (callback: (markers: Marker[]) => void) => {
  return onSnapshot(markersCollection, (snapshot) => {
    const markers: Marker[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Marker)
    }));
    callback(markers);
  });
};
