import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    button: {
      marginTop: 60,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 5,
    },
    appHeader: {
      width: 200,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-evenly",
      color: "white",
    },
    cardWrapper: {
      width: 200,
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    lost: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    startButton: {
      zIndex: 2,
      position: "absolute",
      width: 50,
      height: 50,
      top: 75,
      left: 75,
      backgroundColor: "rgba(250,250,250,0.97)",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100 / 20,
    },
    startButtonText: {
      fontWeight: "bold",
      fontSize: 16,
    },
    startButtonTextName: {
      color: "#4682B4",
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 50,
      flex: 0.1,
    },
    score: {
      zIndex: 3,
      position: "absolute",
      width: 50,
      height: 50,
      top: 75,
      left: 75,
      color: "white",
      backgroundColor: "black",
      borderRadius: 100 / 2,
      fontSize: 30,
      textAlign: "center",
      paddingTop: 5,
    },
    resultsBTN: {
      backgroundColor: "#4682B4",
      color: "white",
      marginTop: 60,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderWidth: 3,
      borderColor: "#4682B4",
      borderRadius: 5,
    },
    CloseBTN: {
      backgroundColor: "#4682B4",
      color: "white",
      marginTop: 5,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderWidth: 3,
      borderColor: "#4682B4",
      borderRadius: 5,
      opacity: 0.5
    },
    resultsBTNText: {
      textAlign: "center",
      color: "white",
     
    },
    resultsBTNText2: {
      textAlign: "center",
      color: "black",
      fontWeight: "bold"
  
    },
    finalScoreText: {
      marginTop: 5,
    },
  });
  