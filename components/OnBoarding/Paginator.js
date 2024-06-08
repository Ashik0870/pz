import { StyleSheet, View, Animated, useWindowDimensions } from "react-native"

export default Paginator = ({data, scrollX}) => {
    const {width} = useWindowDimensions();
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i+1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10,25,10],
                    extrapolate: "clamp"
                })
                const dotColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['rgba(113, 119, 171, 1)', 'rgba(0, 0, 0, 1)', 'rgba(113, 119, 171, 1)'], // Example color range
                    extrapolate: 'clamp',
                });
                 return <Animated.View style={[styles.dot, {width: dotWidth, backgroundColor: dotColor}]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        flexDirection: "row",
        marginBottom: 100,
        // height: 64,
        justifyContent: "center",
        alignItems: "center",
    },
    dot:{
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: "rgba(113, 119, 171, 1)"
    }
})