import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";
import { CategoriesScreenProps } from "../types";

type Props = { navigation: CategoriesScreenProps };

export default function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
}
