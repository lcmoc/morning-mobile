import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Box from '../../components/Box';
import BoxData from './BoxData.json';

const Home = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderTitle}>Home</Text>
      <SafeAreaView style={styles.SafeArea}>
        <FlatList
          data={BoxData}
          numColumns={2}
          renderItem={({ item }) => (
            <Box
              title={item.title}
              color={item.color}
              navigation={navigation}
              icon={item.icon}
              description={item.description}
              link={item.link}
            />
          )}
          keyExtractor={(item, index) => `Box-${index}`}
        />
      </SafeAreaView>
      <View style={styles.CenterContainer}>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
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
    marginLeft: 20,
    marginTop: 40
  },
  Container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  SafeArea: {
    marginTop: 30,
    paddingTop: StatusBar.currentHeight
  }
});

export default Home;
