import styled from "styled-components";
import PropTypes from "prop-types";

const MemeCard = ({ imageArr, image, handleClickedMeme }) => {
  const addClickedMeme = () => {
    handleClickedMeme([...imageArr, image.id]);
  };

  return (
    <StyledCard>
      <img style={{ width: "100%", height: "100%" }} src={image.memeURL} />
      <LayerEffect>
        <button onClick={addClickedMeme}>Choose</button>
      </LayerEffect>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  height: 60%;
  flex-direction: column;
  border: 2px solid black;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const LayerEffect = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  button {
    display: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    > button {
      display: flex;
      padding: 15px 25px;
      border: unset;
      border-radius: 15px;
      color: #e8e8e8;
      z-index: 1;
      background: #212121;
      position: relative;
      font-weight: 1000;
      font-size: 17px;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
      box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
      transition: all 250ms;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #e8e8e8;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(255, 255, 255, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(255, 255, 255, 0.27);
        transition: all 250ms
      }

      &:hover {
        color: #212121;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;

MemeCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.object,
  imageArr: PropTypes.array,
  handleClickedMeme: PropTypes.func
};

export default MemeCard;
