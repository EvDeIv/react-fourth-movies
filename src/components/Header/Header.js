import styled from "styled-components";

import { NavLink } from "react-router-dom";

import paths from "../../utils/paths";

const HeadBar = styled.header`
  max-width: 90vw;
  margin: 0 auto;
`;

const List = styled.li`
  list-style: none;
  display: inline-block;
`;

const NavLi = styled(NavLink)`
  padding-left: 20px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  &.active {
    color: purple;
    font-size: 24px;
  }
`;

function Header() {
  return (
    <HeadBar>
      <ul>
        <List>
          <NavLi exact to={paths.home}>
            Home
          </NavLi>
        </List>
        <List>
          <NavLi to={paths.movies}>Movies</NavLi>
        </List>
      </ul>
    </HeadBar>
  );
}

export default Header;
