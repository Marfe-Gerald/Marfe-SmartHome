import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const DEVICES = [
  { id: '1', name: 'Light', room: 'Living Room', value: 'ON' },
  { id: '2', name: 'Air Conditioner', room: 'Living Room', value: '24°C' },
];

export default function DevicesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.pageTitle}>My Devices</Text>

        {DEVICES.map((device) => (
          <View key={device.id} style={styles.deviceRow}>
            <View>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceRoom}>{device.room}</Text>
            </View>
            <Text style={styles.deviceValue}>{device.value}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111111',
    marginBottom: 20,
  },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#111111',
    borderRadius: 14,
    backgroundColor: '#f2f2f2',
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111111',
  },
  deviceRoom: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444444',
    marginTop: 2,
  },
  deviceValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',
  },
});