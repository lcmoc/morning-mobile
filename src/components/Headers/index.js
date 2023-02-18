import { StyleSheet, Text, View } from 'react-native';

export const HeaderHome = () => {
  <View style={styles.HeaderContainer}>
    <Text style={styles.HeaderTitle}>Home</Text>
  </View>;
};

const styles = StyleSheet.create({
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
  }
});
