import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokemonItem = ({
  data: { id, name, isCaught, date },
  dispatches: { dispatchSetCaught }
}) => {
  return (
    <li className="card pokemon-card">
      <div className="card-body">
        <Link to={`/pokemons/${id}`}>
          <img
            className="card-img-top"
            src={`${process.env.PUBLIC_URL}/pokemons/${id}.png`}
            alt={`${name}`}
          />

          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="card-button">
          <button
            onClick={dispatchSetCaught}
            disabled={isCaught}
            className="btn btn-info"
          >
            {isCaught ? "Caught" : "Catch"}
          </button>
        </div>
      </div>
    </li>
  );
};

PokemonItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isCaught: PropTypes.bool,
    date: PropTypes.string
  }).isRequired,
  dispatches: PropTypes.shape({
    dispatchSetCaught: PropTypes.func.isRequired
  })
};

export default PokemonItem;
