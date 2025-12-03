import styled from "styled-components";

const doorBackdrop = "https://yt3.googleusercontent.com/ytc/APkrFKZ2v4h8IGP2Eo1FW422Dc0-RB5DAu3Rc5nNSVsY=s900-c-k-c0x00ffffff-no-rj"

export const StyledDoor = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .front {
    background: center / cover url(${doorBackdrop});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      color: #fff;
      padding: 20px;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(196, 30, 58, 0.9) 0%, rgba(160, 23, 41, 0.9) 100%);
      font-weight: 700;
      font-size: 4rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    &.open {
      transform: rotateY(180deg);
    }
  }

  .back {
    position: absolute;
    background: center / cover url(https://img.youtube.com/vi/${props => props.background}/maxresdefault.jpg);
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      color: #fff;
      padding: 20px;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(22, 91, 51, 0.9) 0%, rgba(16, 71, 39, 0.9) 100%);
      font-weight: 700;
      font-size: 4rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    overflow: hidden;
  }
`;