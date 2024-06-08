import React from "react";
import { View, StyleSheet } from "react-native";

const CustomLayout = ({
  height,
  width,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  borderColor,
  borderWidth,
  elevation,
  borderRadius,
  children,
  alignItems,
  justifyContent,
  paddingHorizental
}) => {
  const outerStyle = {
    height: height + 10, 
    width: width + 10, 
    justifyContent:justifyContent || 'center',
    alignItems: alignItems || 'center',
    shadowColor: shadowColor || "",
    shadowOffset: shadowOffset || { width: 0, height: 2 },
    shadowOpacity: shadowOpacity || 0.25,
    shadowRadius: shadowRadius || 3.84,
    elevation: elevation || 0,
    borderRadius: borderRadius || 0, 
    paddingHorizental: paddingHorizental || 0,
  };

  const innerStyle = StyleSheet.create({
    container: {
      height: height,
      width: width,
      borderColor: borderColor || "",
      borderWidth: borderWidth || 0,
      borderRadius: borderRadius || 0,
      overflow: 'hidden',
      backgroundColor: 'white',
    },
  });

  return (
    <View style={outerStyle}>
      <View style={innerStyle.container}>
        {children}
      </View>
    </View>
  );
};

export default CustomLayout;
