import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export class RandomBackground extends Component {
  render() {
    const { children, imageUrl } = this.props;
    return (
      <ImageBackground
        blurRadius={1}
        style={styles.image}
        source={{ uri: imageUrl }}
      >
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
});
