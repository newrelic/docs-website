import React from 'react';

function Chevron(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M12.6 4.6L7.5 9.8 2.4 4.6l-.8.8 5.9 5.8 5.9-5.8z"
      />
    </svg>
  );
}

export default Chevron;
