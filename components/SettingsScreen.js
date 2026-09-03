import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [notificationsOn, setNotificationsOn] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Settings</Text>

        {/* Notifications row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Switch
            value={notificationsOn}
            onValueChange={setNotificationsOn}
            trackColor={{ false: '#e0e0e0', true: '#2f8cf4' }}
            thumbColor="#ffffff"
          />
        </View>
        <View style={styles.divider} />

        {/* Temperature Unit row -> navigates to Devices ("My Devices") */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('Devices')}
        >
          <Text style={styles.rowLabel}>Temperature Unit</Text>
          <Text style={styles.rowValue}>°C</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
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
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111111',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  rowValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#111111',
    opacity: 0.6,
  },
});