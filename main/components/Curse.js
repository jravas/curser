import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Font } from "expo";

export class Curse extends Component {
  state = { curse: null, fontsLoaded: false };

  async componentDidMount() {
    this.getCurse();
    await Font.loadAsync({
      hipster: require("../assets/fonts/hipster.otf")
    });
    this.setState({ fontsLoaded: true });
  }
  getCurse = () => {
    const url = "https://insult.mattbas.org/api/insult.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ curse: data.insult }));
  };
  render() {
    const { curse, fontsLoaded } = this.state;
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
