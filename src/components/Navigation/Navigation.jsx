import { NavItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavItem end to="/playing-page">
        Почати Гру!
      </NavItem>
      <NavItem end to="/about">
        About
      </NavItem>
    </nav>
  );
};

export default Navigation;
