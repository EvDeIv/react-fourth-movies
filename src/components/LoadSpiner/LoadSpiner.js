import Loader from "react-loader-spinner";

import styled from "styled-components";

const Spiner = styled(Loader)`
  grid-column: 1/-1;
  grid-row: 1/-1;
  justify-self: center;
  align-self: center;
  transform: translateX(-50%) translateY(-50%);
`;

function LoadSpiner() {
  return <Spiner type="Circles" color="#00BFFF" height={80} width={80} />;
}

export default LoadSpiner;
