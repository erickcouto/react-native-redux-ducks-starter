export const Types = {
  SELECT: "recipe/SELECT"
};

const INITIAL_STATE = {
  selected: {
    id: 1,
    title: "Yogurt Cake",
    image: "https://images.media-allrecipes.com/userphotos/560x315/337488.jpg",
    ingredients: [
      "1 cup butter, room temperature",
      "2 cups white sugar",
      "3 eggs, room temperature"
    ]
  },
  items: [
    {
      id: 1,
      title: "Yogurt Cake",
      image:
        "https://images.media-allrecipes.com/userphotos/560x315/337488.jpg",
      ingredients: [
        "1 cup butter, room temperature",
        "2 cups white sugar",
        "3 eggs, room temperature"
      ]
    },
    {
      id: 2,
      title: "Orange Cake",
      image:
        "https://images.media-allrecipes.com/userphotos/560x315/5733352.jpg",
      ingredients: [
        "1 teaspoon lemon extract",
        "1/3 cup orange juice",
        "2/3 cup white sugar",
        "1/4 cup butter",
        "4 eggs"
      ]
    }
  ]
};

export function select(id) {
  return {
    type: Types.SELECT,
    payload: {
      id
    }
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SELECT:
      state.items.map(recipe => {
        if (recipe.id === action.payload.id) {
          selectedRecipe = { ...recipe, selected: recipe };
        }
      });

      return { ...state, selected: selectedRecipe };

    default:
      return state;
  }
}
