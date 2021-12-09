import React from "react";

class MoviesPage extends React.Component {
  state = {
    input: "",
    query: "",
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    this.setState({ query: this.state.input });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Print movie name"
            onChange={this.handleInput}
          />
          <button type="submit">Find</button>
        </form>
      </div>
    );
  }
}

export default MoviesPage;
