import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { getSbbTime } from '../../../components/Helpers';

const SbbJourney = ({ route, navigation }) => {
  const { passList, arrivalTime } = route.params;

  const Times = () => {
    return passList?.map((pass) => {
      const time = getSbbTime(pass?.departure || '');
      return (
        <Text key={`sbb-journey-pass-${pass?.departure}`} style={JourneyListStyles.TimeText}>
          {time ? time : arrivalTime}
        </Text>
      );
    });
  };

  const Stations = () => {
    return passList?.map((pass) => {
      const station = pass?.station?.name || '';
      return (
        <Text key={`sbb-journey-pass-${station}`} style={JourneyListStyles.TimeText}>
          {station}
        </Text>
      );
    });
  };

  return (
    <View style={styles.Page}>
      <ScrollView>
        <View style={JourneyListStyles.TableContainer}>
          <View style={JourneyListStyles.ColoredContainer}>
            <View style={JourneyListStyles.TimeContainer}>
              <Times />
            </View>
            <View style={JourneyListStyles.InformationContainer}>
              <Stations />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const JourneyListStyles = StyleSheet.create({
  TableContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ColoredContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#161616',
    borderColor: '#161616',
    width: 400,
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 20
  },
  TimeText: {
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18
  },
  InformationText: {
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18
  },
  TimeContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 15,
    borderColor: '#ffffff',
    borderRightWidth: 1
  },
  InformationContainer: {}
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

export default SbbJourney;
