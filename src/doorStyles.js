import styled from "styled-components";
//import doorBackdrop from "./img/door_backdrop.jpg";

const doorBackdrop = "https://yt3.googleusercontent.com/ytc/APkrFKZ2v4h8IGP2Eo1FW422Dc0-RB5DAu3Rc5nNSVsY=s900-c-k-c0x00ffffff-no-rj"
export const StyledDoor = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  .front {
    background: center / cover url(${doorBackdrop});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
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
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
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
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;