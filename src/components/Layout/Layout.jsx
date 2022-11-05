import { Header, Container } from 'components/Layout/Layout.styled';
import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';
import { Suspense } from "react";

const Link = styled(NavLink)`
  font-weght: normal;
  font-size: 20px;
  margin-left: 25px;
  text-decoration: none;
  padding: 3px 10px 3px 10px;
  border-radius: 10%;
  color: black;
  &.active {
    color: white;
    background-color: orange;
  }
`;

export const Layout =() => {
    return (<div>
      <Header>
        <Container>
          <nav>
          <Link to='/' end>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>);
};
