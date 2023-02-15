import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const Box = ({ title, color, navigation, description, icon }) => {
  const styles = StyleSheet.create({
    Box: {
      height: 160,
      width: 140,
      backgroundColor: color,
      flex: 1,
      borderWidth: 2,
      borderColor: color,
      borderRadius: 10,
      margin: 10
    },
    BoxText: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10
    },
    Wrapper: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'start',
      padding: 15
    },
    Description: {
        color: '#ffffff'
    }
  });

  return (
    <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Details')}>
      <View style={styles.Wrapper}>
        <MaterialCommunityIcons name={icon} size={32} color="white" />
        <Text style={styles.BoxText}>{title}</Text>
        <Text style={styles.Description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Box;