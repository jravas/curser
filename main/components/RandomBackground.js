import React, { Component } from "react";
import Unsplash from "unsplash-js/native";
import { ImageBackground, StyleSheet } from "react-native";

export class RandomBackground extends Component {
  state = { imageLoaded: false, imageUrl: null };

  async componentDidMount() {
    // load random image
    await unsplash.photos
      .getRandomPhoto()
      .then(response => response.json())
      .then(data => this.setState({ imageUrl: data.urls.regular }));
    // remove loading state
    this.setState({ imageLoaded: true });
  }
  render() {
    const { imageLoaded, imageUrl } = this.state;
    const { children } = this.props;
    return (
      imageLoaded && (
        <ImageBackground
          blurRadius={1}
          style={styles.image}
          source={{ uri: imageUrl }}
        >
          {children}
        </ImageBackground>
      )
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

const unsplash = new Unsplash({
  applicationId:
    "f87154a4cc3f2a8b7a8d7d2fae54d8947080677c1ccde300acd995549f54d016",
  secret: "03b354f206bdad0322d1f9ac015a85909989b3933d61423388348c9059b5fce8"
});
