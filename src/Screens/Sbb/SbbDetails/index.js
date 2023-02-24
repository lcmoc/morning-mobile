import * as Location from 'expo-location';

import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import React from 'react';

const SbbDetails = ({ navigation }) => {
  return <View style={styles.Page}></View>;
};

const TouchBarStyles = StyleSheet.create({
  DestinationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#D2042D',
    height: 70
  },
  ColorBorder: {
    alignItems: 'center',
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#8B0000',
    marginTop: -20,
    borderRadius: 20,
    width: 250,
    justifyContent: 'space-between'
  }
});

const DestinationFormStyles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20
  },
  ColoredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderColor: '#161616',
    width: 300,
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  DestinationInput: {
    margin: 5,
    padding: 4,
    width: 190,
    color: '#ffffff'
  },
  LocalPositionInput: {
    margin: 5,
    padding: 4,
    borderWidth: 1,
    width: 190,
    borderColor: '#848884',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: '#ffffff'
  }
});

const StatusViewStyles = StyleSheet.create({
  StatusContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 290,
    marginTop: 20
  },
  StatusItem: {
    color: '#ffffff'
  }
});

const JourneyListStyles = StyleSheet.create({
  TableContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TableBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderColor: '#161616',
    width: 380,
    height: 100,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  Text: {
    color: '#ffffff',
    marginTop: 4
  }
});

const styles = StyleSheet.create({
  SafeArea: {
    paddingTop: StatusBar.currentHeight
  },
  Page: {
    flex: 1,
    backgroundColor: '#28282B'
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SbbDetails;
