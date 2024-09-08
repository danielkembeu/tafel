import { StyleSheet, Dimensions } from "react-native";


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export const globalStyles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        paddingTop: screenWidth * .15
    }
});