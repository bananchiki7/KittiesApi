import { Component } from "react";
import { List, ListItem, ItemImage, ItemTitle, ItemText } from "./CatsList.styled";

class CatsList extends Component {
  render() {
    const { catsList } = this.props;

    return (
      <List>
        {catsList.map((item) => {
          const name = item.breeds[0].name;
          const origin = item.breeds[0].origin;
          const temperament = item.breeds[0].temperament;
          
          return (
            <ListItem key={item.id}>
              <ItemImage src={item.url}></ItemImage>
              <ItemTitle>{name}</ItemTitle>
              <ItemText>Origin: {origin}</ItemText>
              <ItemText>Temperament: {temperament}</ItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default CatsList;
