import React, { useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { gotCaught } from "../../actions/pokeActions";
import { setCaught } from "../../actions/pokeActions";
import { addPage } from "../../actions/pokeActions";

const Caught = ({
  data: { pokemons, loading, visible },
  dispatches: { dispatchGotCaught, dispatchSetCaught, dispatchLoadMore }
}) => {
  useEffect(() => {
    dispatchGotCaught();
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
            pokemons.slice(0, visible).map(pokemon => (
              <PokemonItem
                data={pokemon}
                dispatches={{
                  dispatchSetCaught: () => dispatchSetCaught(pokemon.id)
                }}
                key={pokemon.id}
              />
            ))
          )}

          {visible < pokemons.length && (
            <button
              className="btn btn-secondary mb-3 mt-3"
              onClick={dispatchLoadMore}
              type="button"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Caught.propTypes = {
  data: PropTypes.object.isRequired,
  dispatches: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.pokemonData
});

const mapDispatchToProps = dispatch => ({
  dispatches: {
   dispatchGotCaught: () => dispatch(gotCaught()),
    dispatchSetCaught: id => dispatch(setCaught(id)),
    dispatchLoadMore: visible => dispatch(addPage(visible))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Caught);
