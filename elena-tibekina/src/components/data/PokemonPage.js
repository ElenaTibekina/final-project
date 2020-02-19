import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemons } from "../../actions/pokeActions";

const PokemonPage = ({
  dispatches: { dispatchGetPokemons },
  pokemon
}) => {
  useEffect(() => {
    dispatchGetPokemons();
    // eslint-disable-next-line
  }, []);

  if (pokemon.id === undefined) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="card pokemon-page__card mt-3">
      <div className="card-body pokemon-page__content">
        <img
          className="pokemon-page__img"
          src={`${process.env.PUBLIC_URL}/pokemons/${pokemon.id}.png`}
          alt="Img"
        />
        <div className='pokemon-page__card-text'>
          <p className='text-info mt-3'>id: {pokemon.id}</p>
          <p className='text-info'>name: {pokemon.name}</p>
          <p className='text-info'>
            {pokemon.isCaught ? "you caught me" : "catch me!"} {pokemon.date}
          </p>
        </div>

      </div>
    </div>
  );
};

PokemonPage.propTypes = {
  dispatches: PropTypes.object.isRequired,

  pokemon: PropTypes.object
};

const mapStateToProps = (state, props) => ({
  pokemon: state.pokemonData.pokemons[props.match.params.pokemonId - 1] || {}
  //pokemon: state.pokemonData.pokemons.filter(item => item.id === props.match.params.pokemonId && props.match.params.pokemonId)[0]
});

const mapDispatchToProps = dispatch => ({
  dispatches: {
    dispatchGetPokemons: () => dispatch(getPokemons())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
