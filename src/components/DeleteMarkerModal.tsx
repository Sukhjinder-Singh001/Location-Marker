import React from 'react';
import { Modal, Portal, Button, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface DeleteMarkerModalProps {
  visible: boolean;
  onDismiss: () => void;
  onDelete: () => void;
  markerLabel: string;
}

const DeleteMarkerModal = ({ visible, onDismiss, onDelete, markerLabel }: DeleteMarkerModalProps) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
        <Text style={styles.text}>Are you sure you want to delete the marker "{markerLabel}"?</Text>
        <Button mode="contained" onPress={onDelete} style={styles.button}>
          Yes
        </Button>
        <Button mode="text" onPress={onDismiss} style={styles.button}>
          No
        </Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  text: {
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
  },
});

export default DeleteMarkerModal;
