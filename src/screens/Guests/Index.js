import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [childern, setChildern] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.subTitle}>Ages 13 or above</Text>
        </View>

        <View style={styles.numberWrapper}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          <Text style={styles.count}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.subTitle}>Ages 2 - 12</Text>
        </View>

        <View style={styles.numberWrapper}>
          <Pressable
            onPress={() => setChildern(Math.max(0, childern - 1))}
            style={styles.button}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          <Text style={styles.count}>{childern}</Text>
          <Pressable
            onPress={() => setChildern(childern + 1)}
            style={styles.button}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.subTitle}>Under 2</Text>
        </View>

        <View style={styles.numberWrapper}>
          <Pressable
            onPress={() => setInfant(Math.max(0, infant - 1))}
            style={styles.button}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          <Text style={styles.count}>{infant}</Text>
          <Pressable
            onPress={() => setInfant(infant + 1)}
            style={styles.button}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
