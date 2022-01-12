import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ColorCard from "../components/ColorCard";
import { Audio } from "expo-av";
import {styles} from './GameScreenStyle'
import { setBestResults, setFlashColor, setIsOn, setPlay, setSound } from "../store/actions";
import { Play } from "../store/reducer";

const GameScreen = ({ route, navigation }: any) => {
  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const {soundEffect,isOn,flashColor,play,bestResults} = useSelector((state:any) => state.mainReducer);
  const dispatch = useDispatch();

  //Sounds
  async function playSound(name: string) {
    let sounds = {
      red: require("../assets/sounds/red.mp3"),
      green: require("../assets/sounds/green.mp3"),
      blue: require("../assets/sounds/blue.mp3"),
      yellow: require("../assets/sounds/yellow.mp3"),
    };
    const { sound } = await Audio.Sound.createAsync(sounds[name]);
    dispatch(setSound(sound));
    await sound.playAsync();
  }
  React.useEffect(() => {
    return soundEffect
      ? () => {
        soundEffect.unloadAsync();
        }
      : undefined;
  }, [soundEffect]);
  const colorList = ["green", "red", "yellow", "blue"];
  const initPlay:Play = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  function startHandle() {
    dispatch(setIsOn(true));
  }
  useEffect(() => {
    dispatch(setBestResults(route.params.results || []));
  },[])
  useEffect(() => {
    if (isOn) {
      dispatch(setPlay({ ...initPlay, isDisplay: true }));
    } else {
      dispatch(setPlay(initPlay));
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor: string = colorList[Math.floor(Math.random() * 4)];

      const copyColors: string[] = [...play.colors, newColor];

      dispatch(setPlay({ ...play, colors: copyColors }));
    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  async function displayColors() {
    await timeout(700);
    for (let i = 0; i < play.colors.length; i++) {
      dispatch(setFlashColor(play.colors[i]));
      playSound(play.colors[i]);
      await timeout(700);
      dispatch(setFlashColor(""));
      await timeout(700);

      if (i === play.colors.length - 1) {
        const copyColors: string[] = [...play.colors];

        dispatch(setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        }));
      }
    }
  }

  async function cardClickHandle(color: string) {
    if (!play.isDisplay && play.userPlay) {
      playSound(color)
      const copyUserColors: string[] = [...play.userColors];
      const lastColor:string= copyUserColors.pop();
      dispatch(setFlashColor(color));

      if (color === lastColor) {
        if (copyUserColors.length) {
          dispatch(setPlay({ ...play, userColors: copyUserColors }));
        } else {
          await timeout(700);
          dispatch(setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          }));
        }
      } else {
        await timeout(700);
        dispatch(setPlay({ ...initPlay, score: play.colors.length }));
      }
      await timeout(700);
      dispatch(setFlashColor(""));
    }
  }

  function closeHandle() {
    if (bestResults.length < 10) {
      dispatch(setBestResults([
        ...bestResults,
        {
          Name: route.params.playetName,
          Score: play.score,
        },
      ]));
    } else {
      dispatch(setBestResults(
        bestResults.sort((a, b) => {
          return a.Score - b.Score;
        })
      ));
      if (play.score > bestResults[0].Score) {
        bestResults.splice(0, 1);
        dispatch(setBestResults(
          [
            ...bestResults,
            { Name: route.params.playetName, Score: play.score },
          ].sort((a, b) => a.Score - b.Score)
        ));
      }
    }
    dispatch(setIsOn(false));
  }
  return (
    <View style={styles.root}>
      <Text style={styles.startButtonTextName}>
        Hello {route.params.playetName} 😊
      </Text>
      <View style={styles.appHeader}>
        <View style={styles.cardWrapper}>
          {colorList &&
            colorList.map((v, i) => (
              <ColorCard
                key={i}
                onClick={() => {
                  cardClickHandle(v);
                }}
                flash={flashColor === v}
                color={v}
              />
            ))}
        </View>

        {!isOn && !play.score ? (
          <TouchableOpacity onPress={startHandle} style={styles.startButton}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        ) : isOn && (play.isDisplay || play.userPlay) ? (
          <>
            <Text style={styles.score}>{play.score}</Text>
          </>
        ) : (
          <>
            <View style={styles.lost}>
              <Text style={styles.finalScoreText}>
                FinalScore: {play.score}
              </Text>

              <TouchableOpacity style={styles.CloseBTN} onPress={closeHandle}>
                <Text style={styles.resultsBTNText2}>
                  Save Score and Play Again!
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={styles.resultsBTN}
          onPress={() =>
            navigation.push("Result", {
              results: bestResults,
            })
          }
        >
          <Text style={styles.resultsBTNText}>Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;

