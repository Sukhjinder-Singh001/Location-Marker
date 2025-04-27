import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal } from 'react-native-paper';
import MapViewComponent from '../components/MapViewComponent';
import MarkerModal from '../components/MarkerModal';
import { useMarkers } from '../hooks/useMarkers';
import { Marker } from '../types/Marker';
import SearchBarComponent from '../components/SearchBar';
import DeleteMarkerModal from '../components/DeleteMarkerModal';

const MapScreen = () => {
  const { markers, addMarker, deleteMarker } = useMarkers();
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [newCoordinate, setNewCoordinate] = useState<Marker['coordinate'] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [interactionDisabled, setInteractionDisabled] = useState(false);

  const handleMapPress = (coordinate: Marker['coordinate']) => {
    if (!interactionDisabled) {
      setNewCoordinate(coordinate);
      setModalVisible(true);
    }
  };

  const handleMarkerPress = (marker: Marker) => {
    if (!interactionDisabled) {
      setSelectedMarker(marker);
      setDeleteModalVisible(true);
      setInteractionDisabled(true); // Disable MapPress Functionality when delete modal is shown
    }
  };

  const handleSaveMarker = async (label: string) => {
    if (newCoordinate) {
      await addMarker({
        coordinate: newCoordinate,
        label,
      });
    }
    setModalVisible(false);
  };

  const handleDeleteMarker = async () => {
    if (selectedMarker) {
      await deleteMarker(selectedMarker.id!);
    }
    setDeleteModalVisible(false);
    setSelectedMarker(null);
    setInteractionDisabled(false); // Re-enable MapPress Functionality after deletion
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
    setSelectedMarker(null);
    setInteractionDisabled(false); // Re-enable MapPress Functionality if deletion is cancelled
  };

  const filteredMarkers = markers.filter(marker =>
    marker.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    marker.coordinate.latitude.toString().includes(searchQuery) ||
    marker.coordinate.longitude.toString().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MapViewComponent
        markers={filteredMarkers}
        onMapPress={handleMapPress}
        onMarkerPress={handleMarkerPress}
        interactionDisabled={interactionDisabled}
      />
      <Portal>
        <MarkerModal
          visible={modalVisible && !interactionDisabled} // Check label modal visibility
          onDismiss={() => setModalVisible(false)}
          onSave={handleSaveMarker}
        />
      </Portal>
      <Portal>
        <DeleteMarkerModal
          visible={deleteModalVisible}
          onDismiss={handleCancelDelete}
          onDelete={handleDeleteMarker}
          markerLabel={selectedMarker?.label || ''}
        />
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;