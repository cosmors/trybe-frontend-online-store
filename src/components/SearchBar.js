/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.atualizarTexto = this.atualizarTexto.bind(this);
    this.state = {
      texto: '',
    };
  }

  atualizarTexto(event) {
    this.setState({
      texto: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { texto } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={texto}
          onChange={this.atualizarTexto}
        />
        <input
          data-testid="query-button"
<<<<<<< HEAD:src/components/SearchBar.jsx
          type="button" value="pesquisar"
=======
          type="button"
          value="pesquisar"
>>>>>>> main-group-38-backup:src/components/SearchBar.js
          onClick={() => onClick(texto)}
        />
      </div>
    );
  }
}

export default SearchBar;