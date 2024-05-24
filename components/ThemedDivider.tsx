import { ViewProps, View } from "react-native";
import { ThemedViewProps } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";


export type ThemedDividerProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
  };

export default function ThemedDivider ({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const dividerColor = useThemeColor({ light: lightColor, dark: darkColor }, 'dividerColor');

    return (
        <View style={[{ 
            borderBottomColor: dividerColor, 
            borderBottomWidth: 2 }
            , style]} {...otherProps} />
    )
}