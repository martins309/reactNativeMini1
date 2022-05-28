import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const CarImageDetails = ({ source, title, year }) => {
  return (
    <View style={styles.text}>
      <Image source={source} />
      <Text>
        {title} - {year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CarImageDetails;
