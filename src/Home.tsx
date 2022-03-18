import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ColorScreen')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to the Colors</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#ffc40030',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default Home;
