import React from "react";
import axios from "axios";

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sprite: "",
      weight: 0,
    };
  }

  getData = () => {
    console.log(this.props);
    axios
      .get(this.props.pokemon)
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.data.name,
          sprite: data.data.sprites.front_default,
          weight: data.data.weight,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.props !== null ? (
          <div>
            <h4>{this.state.name}</h4>
            <h5>{this.state.weight}</h5>
            <img src={this.state.sprite} alt={this.props.pokemon} />
          </div>
        ) : (
          "Failed"
        )}
      </div>
    );
  }
}
