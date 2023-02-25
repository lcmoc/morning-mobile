import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { getSbbTime } from '../../../components/Helpers';

const SbbDetails = ({ route, navigation }) => {
  const { connection } = route.params;

  const Stations = ({
    departureTime,
    arrivalTime,
    departureStation,
    arrivalStation,
    train,
    departurePlatform,
    arrivalPlatform,
    passList
  }) => {
    return (
      <TouchableOpacity
        style={JourneyListStyles.TableContainer}
        onPress={() =>
          passList &&
          navigation.navigate('SbbJourney', {
            passList: passList,
            arrivalTime: arrivalTime
          })
        }>
        <View style={JourneyListStyles.TableBox}>
          <View style={JourneyListStyles.TimeContainer}>
            <Text style={JourneyListStyles.TimeText}>{departureTime}</Text>
            <Text style={JourneyListStyles.TimeText}>{arrivalTime}</Text>
          </View>
          <View style={JourneyListStyles.InformationContainer}>
            <Text style={JourneyListStyles.InformationText}>{departureStation}</Text>
            <Text style={JourneyListStyles.InformationText}>{train}</Text>
            <Text style={JourneyListStyles.InformationText}>{arrivalStation}</Text>
          </View>
          <View style={JourneyListStyles.PlatformContainer}>
            <Text style={JourneyListStyles.TimeText}>{departurePlatform}</Text>
            <Text style={JourneyListStyles.TimeText}>{arrivalPlatform}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Page}>
      <View style={styles.PageMargin}>
        <ScrollView>
          {connection?.sections.map((section, index) => {
            const departureTime = getSbbTime(section?.departure?.departure || '');
            const arrivalTime = getSbbTime(section?.arrival?.arrival || '');

            const departureStation = section?.departure?.station?.name || '';
            const arrivalStation = section?.arrival?.station?.name || '';

            const departurePlatform = section?.departure?.platform || '';
            const arrivalPlatform = section?.arrival?.platform || '';

            const train =
              (section?.journey && `${section?.journey?.category} ${section?.journey?.number}`) ||
              'Laufen';

            return (
              <Stations
                key={`connection-${index}`}
                departureTime={departureTime}
                arrivalTime={arrivalTime}
                departureStation={departureStation}
                arrivalStation={arrivalStation}
                departurePlatform={departurePlatform}
                arrivalPlatform={arrivalPlatform}
                train={train}
                passList={section?.journey?.passList}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const JourneyListStyles = StyleSheet.create({
  TableContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TableBox: {
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#161616',
    borderColor: '#161616',
    width: 380,
    height: 140,
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
  TimeText: {
    color: '#ffffff',
    marginBottom: 57
  },
  InformationText: {
    color: '#ffffff',
    marginBottom: 20
  },
  TimeContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 15,
    borderColor: '#ffffff',
    borderRightWidth: 1,
    height: 90
  },
  InformationContainer: {
    height: 90
  },
  PlatformContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 15,
    height: 90
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
  },
  PageMargin: {
    marginTop: 40
  }
});

export default SbbDetails;
