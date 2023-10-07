import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface FabProps {
  title: string;
  position?: 'bottomRight' | 'bottomLeft';
  onPress: () => void;
}

export const FAB = ({title, onPress, position = 'bottomRight'}: FabProps) => {
  const ios = () => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.fabLocation,
        position === 'bottomRight' ? styles.right : styles.left,
      ]}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.fabLocation,
        position === 'bottomRight' ? styles.right : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#288425B', false, 32)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 24,
  },
  right: {right: 24},
  left: {left: 24},
  fab: {
    backgroundColor: '#5856D6',
    width: 64,
    height: 64,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  fabText: {fontSize: 24, fontWeight: 'bold', alignSelf: 'center'},
});
