import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { select } from "~/store/ducks/recipies";

const Recipe = ({ item, select }) => (
  <View style={{ marginRight: 20 }}>
    <TouchableOpacity onPress={() => select(item.id)}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>
        {item.title} ({item.ingredients.length})
      </Text>
    </TouchableOpacity>
  </View>
);

const mapDispatchToProps = dispatch => bindActionCreators({ select }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Recipe);
