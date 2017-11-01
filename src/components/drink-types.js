import React from 'react';

export default function DrinkTypes(props) {
  let types = props.types;
  let typeImgs = [];
  for(let i = 0; i < types.length; i++){
    typeImgs.push(
      <img className="drink-type" src={`/media/${types[i]}.png`}/>
    );
  }

  return (
    <div>
      {typeImgs}
    </div>
  );
}
