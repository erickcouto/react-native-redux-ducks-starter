import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { select } from "~/store/ducks/recipies";

const Recipe = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ marginRight: 20 }}>
      <TouchableOpacity onPress={() => dispatch(select(item.id))}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />
        <Text>
          {item.title} ({item.ingredients.length})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recipe;
