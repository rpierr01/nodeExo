import React from 'react';

const NumberOfCharacters = ({ characters }) => {
  return (
    <p>
      {characters.length === 0
        ? 'There is no character'
        : `There is ${characters.length} characters`}
    </p>
  );
};

export default NumberOfCharacters;
