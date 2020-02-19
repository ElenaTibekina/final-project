import React, { useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemons } from "../../actions/pokeActions";
import { setCaught } from "../../actions/pokeActions";
import { addPage } from "../../actions/pokeActions";

const Pokemons = ({
  data: { pokemons, loading, showLoadMore  },
  dispatches: { dispatchGetPokemons, dispatchSetCaught, dispatchLoadMore }
}) => {
  useEffect(() => {
    dispatchGetPokemons();
    // eslint-disable-next-line
  }, []);

  if (loading || pokemons === null) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <div className="card-group">
        <div className="pokemons-list">
          {!loading && pokemons.length === 0 ? (
            <p>No pokemons to show</p>
          ) : (
            pokemons.map(pokemon => (
              <PokemonItem
                data={pokemon}
                dispatches={{
                  dispatchSetCaught: () => dispatchSetCaught(pokemon.id)
                }}
                key={pokemon.id}
              />
            ))
          )}
          {(showLoadMore &&
              <button className="btn btn-secondary mb-3 mt-3" onClick={dispatchLoadMore} type="button">
                Load More
              </button>
          )}
        </div>

      </div>
    </div>
  );
};

Pokemons.propTypes = {
  data: PropTypes.object.isRequired,
  dispatches: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: {
    pokemons: state.pokemonData.pokemons.slice(0, state.pokemonData.visible),
    loading: state.pokemonData.loading,
    showLoadMore: state.pokemonData.visible < state.pokemonData.pokemons.length,
  }
});

const mapDispatchToProps = dispatch => ({
  dispatches: {
    dispatchGetPokemons: () => dispatch(getPokemons()),
    dispatchSetCaught: id => dispatch(setCaught(id)),
    dispatchLoadMore: visible => dispatch(addPage(visible))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
