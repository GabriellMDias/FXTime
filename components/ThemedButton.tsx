import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

export type ThemedViewProps = TouchableOpacityProps & {
    lightColor?: string;
    darkColor?: string;
  };

export default function ThemedButton({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBorderColor');

    return <TouchableOpacity style={[{ backgroundColor }, {borderColor, borderWidth: 1, alignItems: 'center', borderRadius: 50}, style]} {...otherProps} />
}