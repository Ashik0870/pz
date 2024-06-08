import { StyleSheet, View } from "react-native";

export default function LineSaperator({backgroundColor,marginVertical,marginHorizontal  }) {

   const  separator= {
        width: "100%",
        height: 1,
        backgroundColor: backgroundColor,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
      };

    return ( <View style={separator} />);
}