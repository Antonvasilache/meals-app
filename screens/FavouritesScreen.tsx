import { useContext } from "react";
import { MEALS } from "../data/data";
import MealsList from "../components/mealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { StyleSheet, Text, View } from "react-native";

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );

  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
