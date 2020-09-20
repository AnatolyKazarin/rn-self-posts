import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const BookedScreen = () => {
  return (
    <View style={styles.center}>
      <Text>BookedScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
