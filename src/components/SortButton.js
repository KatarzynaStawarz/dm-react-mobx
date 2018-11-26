import React from 'react';

const SortButton = ({sortBy, onClick, asc}) => (
  <button onClick={() => onClick(sortBy)}>
    Sort by {sortBy}
    <img
      src={asc ? "../assets/icons/up-icon.png" : "../assets/icons/down-icon.png"}
      style={{width: "15px", height: "15px"}}
    />
  </button>
)

export default SortButton;
