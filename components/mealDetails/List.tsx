import { StyleSheet, Text, View } from "react-native";
import Meal from "../../models/meal";

interface ListProps {
  data: string[];
}

export default function List({ data }: ListProps) {
  return data.map((item: string, index: number) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
