import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../types";
import { CATEGORIES, MEALS } from "../data/data";
import MealsList from "../components/mealsList/MealsList";

export default function MealsOverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const catId = (route.params as RootStackParamList["MealsOverview"])
    .categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
