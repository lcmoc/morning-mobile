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
import React, { useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import TouchBarItem from '../../components/TouchBarItem';
import TouchBarItems from './TouchBarItems.json';
import { getSbbTime } from '../../components/Helpers';

const Sbb = ({ navigation }) => {
  const [apiData, setApiData] = useState(null);
  const [journeyStartPoint, setJourneyStartPoint] = useState('Egg');
  const [journeyEndPoint, setJourneyEndPoint] = useState();
  const [send, setSend] = useState(false);
  const [customDestination, setCustomDestination] = useState(false);
  const [activeTouchItem, setActiveTouchItem] = useState('Winterthur');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  async function getDataFromAPI() {
    try {
      const response = await fetch(
        `https://transport.opendata.ch/v1/connections?from=${journeyStartPoint}&to=${journeyEndPoint}&limit=10`
      );

      return await response.json();
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    getDataFromAPI()
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error(error); //eslint-disable-line
      });
  }, [send]);

  if (apiData === null) {
    return <LoadingSpinner loading={apiData === null} />;
  }

  const connections = apiData?.connections;

  const handlePress = (destination, isCustomDestination) => {
    setActiveTouchItem(destination ? destination : 'custom');

    if (!isCustomDestination) {
      setJourneyEndPoint(destination && destination);
      setCustomDestination(false);
    }

    if (isCustomDestination) {
      setCustomDestination(true);
      setJourneyEndPoint('');
    }
  };

  const TouchBar = () => (
    <View style={TouchBarStyles.DestinationContainer}>
      <View style={TouchBarStyles.ColorBorder}>
        {TouchBarItems.map((item) => (
          <TouchBarItem
            name={item.name}
            isCustom={item.isCustom}
            text={item.text}
            activeTouchItem={activeTouchItem}
            handlePress={handlePress}
            key={`touch-bar-item-${item.name}`}
          />
        ))}
      </View>
    </View>
  );

  const StatusView = () => (
    <View style={styles.Container}>
      <View style={StatusViewStyles.StatusContainer}>
        <Text style={StatusViewStyles.StatusItem}>Von: {journeyStartPoint}</Text>
        <Text style={StatusViewStyles.StatusItem}>Nach: {journeyEndPoint}</Text>
      </View>
    </View>
  );

  const JourneyList = () => {
    return (
      <SafeAreaView style={styles.SafeArea}>
        <View style={JourneyListStyles.TableContainer}>
          <FlatList
            data={connections}
            numColumns={1}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={JourneyListStyles.TableBox}
                onPress={() => navigation.push('Details')}>
                <Text style={JourneyListStyles.Text}>S18 Richtung Forch</Text>
                <Text style={JourneyListStyles.Text}>
                  19:03 -------------------------------------- 19:21
                </Text>
                <Text style={JourneyListStyles.Text}>10 min</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => `Box-${index}`}
          />
        </View>
      </SafeAreaView>
    );
  };

  const handleSubmit = () => {
    setSend(journeyStartPoint && journeyEndPoint ? true : false);
  };

  return (
    <View style={styles.Page}>
      <TouchBar />
      <View style={DestinationFormStyles.Container}>
        <View style={DestinationFormStyles.ColoredContainer}>
          <TextInput
            style={DestinationFormStyles.LocalPositionInput}
            placeholder="Von"
            placeholderTextColor="#848884"
            onChangeText={(inputText) => setJourneyStartPoint(inputText)}
            value={journeyStartPoint}
            onSubmitEditing={handleSubmit}
          />
          {customDestination && (
            <TextInput
              style={DestinationFormStyles.DestinationInput}
              placeholder="Nach"
              placeholderTextColor="#848884"
              onChangeText={(inputText) => setJourneyEndPoint(inputText)}
              value={journeyEndPoint}
              onSubmitEditing={handleSubmit}
            />
          )}
        </View>
      </View>
      <StatusView />
      <JourneyList />
      {/* <Text>{text}</Text> */}
      {/* <SafeAreaView style={styles.SafeArea}>
        <FlatList
          data={connections}
          numColumns={1}
          renderItem={({ connection }) => <Text>{connection?.from?.departure}</Text>}
          keyExtractor={(item, index) => `Connection-${index}`}
        />
      </SafeAreaView> */}
    </View>
  );
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

export default Sbb;
