import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const AScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AScreen</Text>
      <Button title="Go to B" onPress={() => navigation.navigate("B")} />
    </View>
  );
};

export default AScreen;

const styles = StyleSheet.create({});
