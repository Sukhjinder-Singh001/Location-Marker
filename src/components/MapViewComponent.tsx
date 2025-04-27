import React, { useRef, useEffect, useState } from 'react';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker as MapMarker, Region, MapPressEvent } from 'react-native-maps';
import { getCurrentLocation } from '../utils/locationHelper';
import { Marker } from '../types/Marker';

const DEFAULT_REGION: Region = {
  latitude: 31.3260,
  longitude: 75.5762,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

interface MapViewComponentProps {
  markers: Marker[];
  onMapPress: (coordinate: { latitude: number; longitude: number }) => void;
  onMarkerPress: (marker: Marker) => void;
  focusedCoordinate?: Marker['coordinate'] | null;
  interactionDisabled?: boolean;
}

const MapViewComponent = ({
  markers,
  onMapPress,
  onMarkerPress,
  focusedCoordinate,
  interactionDisabled = false,
}: MapViewComponentProps) => {
  const [region, setRegion] = useState<Region>(DEFAULT_REGION);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getCurrentLocation();
      if (location) {
        const updatedRegion = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        setRegion(updatedRegion);
        mapRef.current?.animateToRegion(updatedRegion, 1000);
      } else {
        Alert.alert('Location Error', 'Unable to fetch current location');
      }
    };

    fetchLocation(); // Fetch current location on component mount
  }, []);

  useEffect(() => {
    if (focusedCoordinate && mapRef.current) {
      const targetRegion = {
        latitude: focusedCoordinate.latitude,
        longitude: focusedCoordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
      mapRef.current.animateToRegion(targetRegion, 1000);
    }
  }, [focusedCoordinate]);

  const handleMapPress = (e: MapPressEvent) => {
    if (!interactionDisabled) {
      onMapPress(e.nativeEvent.coordinate);
    }
  };

  const handleMarkerPress = (marker: Marker) => {
    if (!interactionDisabled) {
      onMarkerPress(marker);
    }
  };

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={region}
      onPress={handleMapPress}
      scrollEnabled={!interactionDisabled}
      zoomEnabled={!interactionDisabled}
      rotateEnabled={!interactionDisabled}
      pitchEnabled={!interactionDisabled}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
    >
      {markers.map(marker => (
        <MapMarker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.label}
          onPress={() => handleMarkerPress(marker)}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapViewComponent;
