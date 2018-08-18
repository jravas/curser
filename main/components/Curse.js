import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Font } from "expo";

export class Curse extends Component {
  state = { fontsLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      hipster: require("../assets/fonts/hipster.otf")
    });
    this.setState({ fontsLoaded: true });
  }
  render() {
    const { fontsLoaded } = this.state;
    const { curse } = this.props;
    return fontsLoaded && <Text style={styles.text}>{curse}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "hipster",
    fontSize: 48,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.3)"
  }
});
