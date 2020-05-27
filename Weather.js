import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Haze",
    subtitle: "Its good weather to go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#136a8a", "#267871"],
    title: "Thunderstorm",
    subtitle: "Its good weather to go outside",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#00bf8f", "#001510"],
    title: "Drizzle",
    subtitle: "Its good weather to go outside",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Rain",
    subtitle: "Its good weather to go outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#73C8A9", "#373B44"],
    title: "Snow",
    subtitle: "Its good weather to go outside",
  },

  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEAC5E", "#C779D0", "#4BC0C8"],
    title: "clear",
    subtitle: "Its good weather to go outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#FFA17F", "#00223E"],
    title: "wow cloudy",
    subtitle: "Its good weather to go outside",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#485563", "#29323c"],
    title: "Mist",
    subtitle: "Its good weather to go outside",
  },
  Dust: {
    iconName: "weather-sunny-alert",
    gradient: ["#1e130c", "#9a8478"],
    title: "Dust",
    subtitle: "Its good weather to go outside",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}도</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}{" "}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },

  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
