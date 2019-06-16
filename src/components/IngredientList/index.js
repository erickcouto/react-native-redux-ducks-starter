import React from "react";

import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import Ingredient from "../Ingredient";

import { bindActionCreators } from "redux";
import { addIngredient } from "~/store/ducks/recipies";

const IngredientList = ({ recipe, addIngredient }) => (
  <View style={{ padding: 20 }}>
    <FlatList
      data={recipe.ingredients}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Ingredient item={item} />}
    />
    <TouchableOpacity
      style={{
        backgroundColor: "#ff0000",
        padding: 20,
        marginTop: 10
      }}
      onPress={() => addIngredient(recipe.id)}
    >
      <Text style={{ alignSelf: "center", color: "#ffffff" }}>Add</Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = state => {
  return {
    recipe: state.recipies.items.find(recipe => recipe.selected == true)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addIngredient }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList);
