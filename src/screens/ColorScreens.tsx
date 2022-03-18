import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const ColorScreens = () => {
  const [colors, setColors] = useState(['']);
  const [textValue, setTextValue] = useState('gnfgngf');
  return (
    <View>
      <TouchableOpacity onPress={() => setColors([randColor(), ...colors])}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Color</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={newValue => setTextValue(newValue)}
        style={styles.inputTextStyle}
        value={textValue}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{textValue}</Text>
      </View>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => (
          <View style={{width: '100%', height: 100, backgroundColor: item}}>
            <Text style={styles.textStyle}>{textValue}</Text>
          </View>
        )}
      />
    </View>
  );
};

const randColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#ffc400',
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputTextStyle: {
    borderColor: '#4b0000',
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    textAlign: 'center',
  },
  item: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    borderColor: '#e99e9e',
    backgroundColor: '#f0dddd',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default ColorScreens;
