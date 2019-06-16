import React from "react";

import { View, Text } from "react-native";
import IngredientList from "~/components/IngredientList";
import RecipeList from "~/components/RecipeList";

export default function Home() {
  return (
    <View>
      <RecipeList />

      <IngredientList />
    </View>
  );
}
