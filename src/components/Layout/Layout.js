import * as styles from "./Layout.styled";

const { Container } = styles;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
