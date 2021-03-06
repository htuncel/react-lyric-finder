import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results",
      };

    default:
      return state;
  }
}

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track_list: [],
      heading: "Top 10 Tracks",
      dispatch: (action) => this.setState((state) => reducer(state, action)),
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://evening-refuge-58060.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((result) => {
        this.setState({ track_list: result.data.message.body.track_list });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
