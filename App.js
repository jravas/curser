import React, { Component } from "react";
import Unsplash from "unsplash-js/native";
import { View, Button, StyleSheet } from "react-native";
import { Curse } from "./main/components/Curse";
import { RandomBackground } from "./main/components/RandomBackground";

export default class App extends Component {
  state = { curse: null, imageUrl: null };

  componentDidMount() {
    this.fetchItems();
  }

  // load curse text
  getCurse = () => {
    const url = "https://insult.mattbas.org/api/insult.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ curse: data.insult }));
  };

  // load random image
  getImage = () => {
    unsplash.photos
      .getRandomPhoto()
      .then(response => response.json())
      .then(data => this.setState({ imageUrl: data.urls.regular }));
  };

  // refetch data
  fetchItems = () => {
    this.getCurse();
    this.getImage();
  };

  render() {
    const { curse, imageUrl } = this.state;
    return (
      <View style={styles.container}>
        <RandomBackground imageUrl={imageUrl}>
          <Curse curse={curse} />
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

const unsplash = new Unsplash({
  applicationId:
    "f87154a4cc3f2a8b7a8d7d2fae54d8947080677c1ccde300acd995549f54d016",
  secret: "03b354f206bdad0322d1f9ac015a85909989b3933d61423388348c9059b5fce8"
});
