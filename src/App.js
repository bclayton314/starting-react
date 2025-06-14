
import './App.css';
import PropTypes from "prop-types";
import pokemon from "./pokemon.json";
import React from 'react';

const PokemonRow = ({ pokemon }) => (
            <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
          </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
}

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div className="App" style={{
      margin: "auto",
      width: '800',
      paddingTop: "1rem",
    }}>
      <h1 className='title'>Pokemon Search</h1>
      <input
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 20).map((pokemon) => (
            <PokemonRow pokemon={pokemon} key={pokemon.id}/>
          ))} 
        </tbody>
      </table>
    </div>
  );
}

export default App;
