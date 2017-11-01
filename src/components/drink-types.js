import React from 'react';

export default function DrinkTypes(props) {
  let types = props.types;
  let typeImgs = [];
  for(let i = 0; i < types.length; i++){
    typeImgs.push(
      <img key={i} className="drink-type" alt="drink type" src={`/media/${types[i]}.png`}/>
    );
  }

  return (
    <div>
      {typeImgs}
    </div>
  );
}
