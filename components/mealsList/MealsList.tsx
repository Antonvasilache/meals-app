import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface MealsListProps {
  items: Meal[];
}

export default function MealsList({ items }: MealsListProps) {
  function renderMeamItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderMeamItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
