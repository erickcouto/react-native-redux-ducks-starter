import React from "react";

import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ingredient from "../Ingredient";

import { addIngredient } from "~/store/ducks/recipies";

function IngredientList() {
  const recipe = useSelector((state) => state.recipies.items);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={recipe[0].ingredients}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <Ingredient item={item} />;
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#ff0000",
          padding: 20,
          marginTop: 10,
        }}
        onPress={() => dispatch(addIngredient(recipe[0].id))}
      >
        <Text style={{ alignSelf: "center", color: "#ffffff" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default IngredientList;
