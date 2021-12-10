import Loader from "react-loader-spinner";

import styled from "styled-components";

const Spiner = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(216, 230, 244, 0.8);
`;

function LoadSpiner() {
  return (
    <Background>
      <Spiner type="Circles" color="#00BFFF" height={80} width={80} />
    </Background>
  );
}

export default LoadSpiner;
