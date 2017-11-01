import React from 'react';

export default function DrinkTypes(props) {
  let types = props.types;

  let typeImgs = types.map((type, i) =>
    <img key={i} className="drink-type" alt="drink type" src={`/media/${type}.png`}/>
  );

  return (
    <div>
      {typeImgs}
    </div>
  );
}
