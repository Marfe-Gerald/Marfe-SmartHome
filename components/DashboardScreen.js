import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header row */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Smart Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-sharp" size={28} color="#2f8cf4" />
          </TouchableOpacity>
        </View>

        {/* Big temperature card */}
        <View style={styles.tempCard}>
          <View style={styles.tempIconRow}>
            <MaterialCommunityIcons
              name="thermometer"
              size={40}
              color="#3aa0f0"
            />
            <MaterialCommunityIcons
              name="snowflake"
              size={22}
              color="#3aa0f0"
              style={{ marginLeft: 4, marginTop: -18 }}
            />
          </View>
          <Text style={styles.tempValue}>26°C</Text>
          <Text style={styles.tempLabel}>Living Room</Text>
        </View>

        {/* 2x2 device grid */}
        <View style={styles.grid}>
          <DeviceCard
            icon={<Ionicons name="bulb" size={22} color="#fff" />}
            iconBg="#2f8cf4"
            title="Light"
            value="ON"
          />
          <DeviceCard
            icon={<MaterialCommunityIcons name="snowflake" size={22} color="#3aa0f0" />}
            title="AC"
            value="24°C"
          />
          <DeviceCard
            icon={<MaterialCommunityIcons name="lock" size={22} color="#fff" />}
            iconBg="#2f8cf4"
            title="Door"
            value="LOCKED"
          />
          <DeviceCard
            icon={<Ionicons name="camera" size={20} color="#f5a623" />}
            title="Camera"
            value="ON"
          />
        </View>

        {/* Footer link */}
        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={() => navigation.navigate('Devices')}
        >
          <Text style={styles.viewAllText}>View All Devices →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DeviceCard({ icon, iconBg, title, value }) {
  return (
    <View style={styles.deviceCard}>
      {iconBg ? (
        <View style={[styles.iconCircle, { backgroundColor: iconBg }]}>
          {icon}
        </View>
      ) : (
        <View style={styles.iconPlain}>{icon}</View>
      )}
      <Text style={styles.deviceTitle}>{title}</Text>
      <Text style={styles.deviceValue}>{value}</Text>
    </View>
  );
}

const CARD_BORDER = '#111111';

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
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111111',
  },
  tempCard: {
    borderWidth: 2,
    borderColor: CARD_BORDER,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    marginBottom: 16,
  },
  tempIconRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tempValue: {
    fontSize: 48,
    fontWeight: '900',
    color: '#111111',
  },
  tempLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginTop: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  deviceCard: {
    width: '48%',
    borderWidth: 2,
    borderColor: CARD_BORDER,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    marginBottom: 14,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconPlain: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  deviceTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111111',
  },
  deviceValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444444',
    marginTop: 4,
  },
  viewAllBtn: {
    alignItems: 'center',
    marginTop: 10,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
});