import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
