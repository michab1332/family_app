import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomStatusBar = ({
    backgroundColor,
    barStyle = "dark-content"
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top - 40, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
}

export default CustomStatusBar;