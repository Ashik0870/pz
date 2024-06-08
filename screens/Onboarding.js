import React, { useState, useRef, useEffect } from "react";
import { FlatList, Image, Animated, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import slides from "../data/slides";
import OnBoardingItem from "../components/OnBoarding/OnBoardingItem";
import Paginator from "../components/OnBoarding/Paginator";
import CustomText from "../components/CustomText/CustomText";

const customFont = "Faustina";

export default function OnBoarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidsRef = useRef(null);
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    setIsLastSlide(currentIndex === slides.length - 1);
  }, [currentIndex]);

  // useEffect(() => {
  //   async function loadFonts() {
  //     try {
  //       await useFonts({ [customFont]: require("../assets/fonts/Faustina.ttf") });
  //       setIsFontLoaded(true);
  //     } catch (error) {
  //       console.error("Error loading font:", error);
  //     }
  //   }
  //   loadFonts();
  // }, []);

  const viewableItemsChange = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  // onPress={() => navigation.navigate("Location")
  return (
    <View style={styles.container1}>
      <CustomText onPress={() => navigation.navigate("Location")} style={styles.skip}>{isLastSlide ? "NEXT" : "SKIP"}</CustomText>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false} 
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChange}
        viewabilityConfig={viewConfig}
        ref={slidsRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container1: {
    marginTop: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  skip: {
    marginLeft: 240,
    fontWeight: "400",
    fontSize: 18,
    // fontFamily: customFont,
    color: "rgba(0, 0, 0, 1)",
  },
  
});
