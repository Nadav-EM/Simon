import React, {useEffect} from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type ColorCardProps = {
  color: string;
  onClick: () => void;
  flash: boolean;
};

const ColorCard = ({ color, onClick, flash }: ColorCardProps) => {
  useEffect(() => {

  }, [color, flash])
  const colorRGBA = {
    red: 'rgba(255,0,0,0.5)',
    green: 'rgba(0,255,0,0.5)',
    blue: 'rgba(0,0,255,0.5)',
    yellow: 'rgba(255,150,0,0.5)'
  }
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.colorCard,
        { backgroundColor: flash ? colorRGBA[color]: color,  },
      ]}
      activeOpacity={1}
    ></TouchableOpacity>
  );
};

export default ColorCard;

const styles = StyleSheet.create({
  colorCard: {
    height: 100,
    width: 100,
    borderWidth:10,
    borderColor:"black",
    borderRadius:100/10
  },
});
