import styled from "styled-components";
import colors from "../../constans/colors";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
  width: 1000px;
  border: 4px solid ${colors.GREY};
  border-radius: 20px;
`;

export const ListItem = styled.li`
  width: calc((100% - 60px) / 4);
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.MEDIUM_GREY};
`;

export const ItemTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 30px;
  color: ${colors.WHITE};
`;

export const ItemText = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: ${colors.LIGHT_GREY};
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 180px;
  margin-bottom: 5px;
  border-radius: 10px;
`
