import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingSpinner = ({loading}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
  });

export default LoadingSpinner;
