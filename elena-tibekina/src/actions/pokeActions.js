import axios from "axios";
import {
  GET_POKEMONS,
  SET_LOADING,
  HAS_ERROR,
  SET_CAUGHT,
  GET_CAUGHT,
  ADD_PAGE
} from "./types";

// get pokemons from server
export const getPokemons = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get("http://localhost:5001/pokemons");
    const data = await res.data;

    dispatch({
      type: GET_POKEMONS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: HAS_ERROR
      // payload: err.response.data
    });
  }
};

export const addPage = (num = 1) => ({
  type: ADD_PAGE,
  page: num
});

export const gotCaught = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get("http://localhost:5001/pokemons?isCaught=true");
    const data = await res.data;

    dispatch({
      type: GET_CAUGHT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: HAS_ERROR
      // payload: err.response.data
    });
  }
};

export const hasError = data => {
  return {
    type: HAS_ERROR,
    payload: data
  };
};

export const sotCaught = data => {
  return {
    type: SET_CAUGHT,
    payload: data
  };
};

//Set pokemon caught
export const setCaught = id => dispatch => {
  return axios
    .patch(`http://localhost:5001/pokemons/${id}`, {
      isCaught: true,
      date: new Date().toLocaleDateString()
    })
    .then(response => dispatch(sotCaught(response.data)))
    .catch(error => dispatch(hasError(error)));
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
