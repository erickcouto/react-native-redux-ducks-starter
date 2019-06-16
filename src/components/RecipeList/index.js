import React from "react";

import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import Recipe from "../Recipe";

const RecipeList = ({ recipies }) => (
  <View style={{ padding: 20 }}>
    <FlatList
      horizontal
      data={recipies}
      renderItem={({ item }) => <Recipe item={item} keyExtractor={item.id} />}
    />
  </View>
);

const mapStateToProps = state => ({
  recipies: state.recipies.items
});

export default connect(mapStateToProps)(RecipeList);
