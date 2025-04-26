import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const BScreen = ({ navigation }) => {
  return (
    <View>
      <Text>BScreen</Text>
      <Button title="Go to C" onPress={() => navigation.navigate("C")} />
    </View>
  );
};

export default BScreen;

const styles = StyleSheet.create({});
