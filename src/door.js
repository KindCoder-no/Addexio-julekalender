import React from "react";
import { StyledDoor } from "./doorStyles";

const Door = ({ doorData: { id, nr, text, img, youtubeId, open }, handleClick }) => (
  <StyledDoor background={youtubeId} onClick={() => handleClick(id, nr)}>
    <div className={open ? "front open" : "front"}>
      <p>{nr}</p>
    </div>
    <div className={open ? "back open" : "back"}>
      <p>{nr}</p>
    </div>
  </StyledDoor>
);

export default Door;