import React from 'react';

export default function DrinkTypes(props) {
  let types = props.types;
  let typeImgs = [];
  for(let i = 0; i < types.length; i++){
    typeImgs.push(<img src={`/media/${types[i]}.png`}/>)
  }
  console.log(typeImgs);
  return typeImgs;
}
