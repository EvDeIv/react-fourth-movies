import React from "react";
import styled from "styled-components";

import LoadSpiner from "./../LoadSpiner/LoadSpiner";

import { fetchCastById } from "../../services/apiServices";

const List = styled.ul`
  grid-column: 1/-1;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const ListItem = styled.li`
  position: relative;
  max-width: 100px;
  padding: 20px 10px;
  list-style: none;
  display: inline-block;
`;

const ActorImage = styled.img`
  max-width: 100%;
  height: 150px;
`;

const NameSpan = styled.span`
  top: 0px;
  right: 50%;
  padding: 5px 0;
`;

class Cast extends React.Component {
  state = {
    isLoading: false,
    cast: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchCastById(this.props.id).then((response) => {
      this.setState({ cast: response.cast, isLoading: false });
    });
  }
  render() {
    const { cast, isLoading } = this.state;
    return (
      <>
        {isLoading && <LoadSpiner />}
        <List>
          {cast.length > 0 &&
            cast.map((actor) =>
              actor.profile_path ? (
                <ListItem key={actor.cast_id}>
                  <ActorImage
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <NameSpan>{actor.name}</NameSpan>
                </ListItem>
              ) : (
                false
              )
            )}
        </List>
      </>
    );
  }
}

export default Cast;
