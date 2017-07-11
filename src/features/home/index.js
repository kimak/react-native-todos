import React, { PropTypes } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Home = props => {
  return (
    <View style={styles.root}>
      <Text>Welcome Home</Text>
      <Button
        title="GO !"
        onPress={() => {
          props.navigation.navigate("Todos", { title: "From Home" });
        }}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default Home;
