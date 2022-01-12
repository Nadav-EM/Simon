import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ResultScreen = ({ route, navigation }: any) => {
  const { results } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={styles.Title}>Best Results</Text>
        {results.map((res, index) => (
          <Text style={styles.listStyle} key={index}>
            {res.Name} {":  "}
            {res.Score}
            {" Points"}
          </Text>
        ))}
      </View>
      <View
        style={{flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Button title="Home" onPress={() => navigation.push("Home",{
          results: results || []
        })} />
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  Title: {
    color: "red",
    fontSize: 24,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "white",
    marginTop: 25,
  },
  listStyle: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
  },
});
