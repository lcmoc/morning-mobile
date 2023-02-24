import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Box from '../../components/Box';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderTitle}>Sbb-Student</Text>
      <View style={styles.BoxContainer}>
        <Box
          title="Verbindungen"
          color="#D2042D"
          link="Sbb"
          icon="fork"
          description="Zu den Verbindungen"
          navigation={navigation}
        />
      </View>
      <Text style={styles.AppDescription}>
        Diese App ist dafür da die Bahnverbindung für Schüler zu vereinfachen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CenterContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  HeaderContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'start'
  },
  HeaderTitle: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    fontSize: 50,
    fontFamily: 'Vanilla-Regular',
    marginTop: 40
  },
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  SafeArea: {
    marginTop: 30,
    paddingTop: StatusBar.currentHeight
  },
  BoxContainer: {
    height: 200,
    marginTop: 20
  },
  AppDescription: {
    marginTop: 20,
    fontSize: 20,
    padding: 27
  }
});

export default DetailsScreen;
