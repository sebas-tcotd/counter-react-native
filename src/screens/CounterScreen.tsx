import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FAB} from '../components/FAB';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>

      <FAB
        title="-1"
        position="bottomLeft"
        onPress={() => setCounter(counter - 2)}
      />

      <FAB
        title="+1"
        position="bottomRight"
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {textAlign: 'center', fontSize: 40},
});
