import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId?: string };
  MealDetails: { mealId: string };
};

export type CategoriesScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;

export type MealDetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetails"
>;
