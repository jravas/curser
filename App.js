import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Curse } from "./main/components/Curse";
import { RandomBackground } from "./main/components/RandomBackground";

export default class App extends Component {
  fetchItems = () => {
    // refetch items
  };
  render() {
    return (
      <View style={styles.container}>
        <RandomBackground>
          <Curse />
          <View style={{ margin: 20 }}>
            <Button
              onPress={this.fetchItems}
              title="Load new"
              color="#3b4045"
            />
          </View>
        </RandomBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
