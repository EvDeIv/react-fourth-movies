import React from "react";
import styled from "styled-components";

import LoadSpiner from "./../LoadSpiner/LoadSpiner";

import { fetchReviewsById } from "../../services/apiServices";

const List = styled.ul`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 20px 0;
  border: 1px solid gray;
  border-radius: 20px;
  position: relative;
  list-style: none;
  display: inline-block;
`;

const NameSpan = styled.span`
  display: block;
  padding: 5px 0;
`;

const Avatar = styled.img`
  max-width: 100%;
  height: 150px;
`;

class Reviews extends React.Component {
  state = {
    isLoading: false,
    reviews: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchReviewsById(this.props.id).then((response) => {
      this.setState({ reviews: response.results, isLoading: false });
    });
  }

  render() {
    const { reviews, isLoading } = this.state;
    return (
      <>
        {isLoading && <LoadSpiner />}

        <List>
          {reviews.length > 0 &&
            reviews.map((review) => (
              <ListItem key={review.id}>
                <Avatar
                  src={review.author_details.avatar_path}
                  alt={review.author}
                />
                <NameSpan>{review.author}</NameSpan>
                <p>{review.content}</p>
              </ListItem>
            ))}
          {reviews.length === 0 && (
            <NameSpan>There are not reviews yet</NameSpan>
          )}
        </List>
      </>
    );
  }
}

export default Reviews;
