import React from "react";

import { View } from "react-native";
import { connect } from "react-redux";
import Ingredient from "../Ingredient";
const IngredientList = ({ recipie }) => (
  <View>
    {recipie.ingredients &&
      recipie.ingredients.map(item => <Ingredient item={item} />)}
  </View>
);

const mapStateToProps = state => ({
  recipie: state.recipies.selected
});

export default connect(mapStateToProps)(IngredientList);
