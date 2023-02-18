import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

const TouchBarItem = ({ name, isCustom, text, handlePress, activeTouchItem }) => {
  return (
    <TouchableOpacity
      style={activeTouchItem === name ? styles.ActiveTouchItem : styles.DestinationItem}
      onPress={() => handlePress(name, isCustom)}>
      <Text style={styles.DestinationItemText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchBarItem;

const styles = StyleSheet.create({
  DestinationItem: {
    padding: 4,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#8B0000',
    width: 60,
    textAlign: 'center',
    backgroundColor: '#8B0000'
  },
  DestinationItemText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  ActiveTouchItem: {
    padding: 4,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#D2042D',
    width: 60,
    textAlign: 'center',
    backgroundColor: '#D2042D'
  }
});
