export const Types = {
  SELECT: "recipe/SELECT",
  ADD_INGREDIENT: "recipe/ADD_INGREDIENT"
};

const INITIAL_STATE = {
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
      ],
      selected: true
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
export function addIngredient(id) {
  return {
    type: Types.ADD_INGREDIENT,
    payload: {
      id
    }
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SELECT:
      let selectedItem = state.items.map(recipe => {
        if (recipe.id == action.payload.id) {
          return {
            ...recipe,
            selected: true
          };
        } else {
          return {
            ...recipe,
            selected: false
          };
        }
      });
      return { ...state, items: selectedItem };

    case Types.ADD_INGREDIENT:
      let updatedItems = state.items.map(recipe => {
        if (recipe.id == action.payload.id) {
          return {
            ...recipe,
            ingredients: [...recipe.ingredients, "New Ingredient"]
          };
        }
        return recipe;
      });
      return { ...state, items: updatedItems };

    default:
      return state;
  }
}
