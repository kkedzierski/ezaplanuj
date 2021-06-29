import React from "react";
import { Tile }  from '../tile/Tile'

export const TileList = (props) => {
  return (
    <div>
          {props.array.length < 0 ? null : (
            props.array.map((element, index) => 
              <Tile key={index} element={element}/>
            )
          )}
    </div>
  );
};
