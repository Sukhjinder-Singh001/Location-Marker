import React, { useState } from 'react';
import { Modal, Portal, Button, TextInput, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface MarkerModalProps {
  visible: boolean;
  onDismiss: () => void;
  onSave: (label: string) => void;
}

const MarkerModal = ({ visible, onDismiss, onSave }: MarkerModalProps) => {
  const [label, setLabel] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    // Validate the label input
    if (label.trim() === '') {
      setError('Please enter a label');
      return;
    }
    onSave(label);
    setLabel('');
    setError('');
  };

  const handleCancel = () => {
    setLabel('');
    setError('');
    onDismiss();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={handleCancel} contentContainerStyle={styles.modal}>
        <TextInput
          label="Marker Label"
          value={label}
          onChangeText={(text) => {
            setLabel(text);
            if (error && text.trim() !== '') {
              setError('');
            }
          }}
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={handleCancel} style={styles.button}>
            Cancel
          </Button>
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Save
          </Button>
        </View>
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
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default MarkerModal;