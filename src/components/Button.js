// import React from 'react'

// const Button = ({name}) => {
//   return (
//     <div className='px-4 py-2 m-2 bg-gray-200 cursor-pointer rounded-xl'>{name}</div>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ name, onClick, isActive }) => {
  return (
    <button className={`px-4 py-2 m-2 rounded-md  ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`} 
    onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
