import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { IoniconsName } from "./types";

interface IconButtonProps<T extends IoniconsName> {
  icon: T;
  color: string;
  onPress: () => void;
}

export default function IconButton<T extends IoniconsName>({
  icon,
  color,
  onPress,
}: IconButtonProps<T>) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
