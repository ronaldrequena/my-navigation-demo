import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to A" onPress={() => navigation.navigate("A")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
