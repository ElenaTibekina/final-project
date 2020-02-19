import {
  GET_POKEMONS,
  SET_LOADING,
  HAS_ERROR,
  SET_CAUGHT,
  GET_CAUGHT,
  ADD_PAGE
} from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
  error: null,
  visible: 9
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };

    case ADD_PAGE: {
      return {
        ...state,
        visible: state.visible + 9,
        loading: false
      };
    }

    case GET_CAUGHT:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case SET_CAUGHT:
      const newPokemons = state.pokemons.map(pok => ({
        ...pok,
        isCaught:
          (pok.id === action.payload.id && action.payload.isCaught) ||
          pok.isCaught,
        date: action.payload.date
      }));

      return {
        ...state,
        pokemons: newPokemons,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case HAS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
