import React from "react";

import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Recipe from "../Recipe";

const RecipeList = () => {
  const recipies = useSelector((state) => state.recipies.items);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        horizontal
        data={recipies}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Recipe item={item} />}
      />
    </View>
  );
};

export default RecipeList;
