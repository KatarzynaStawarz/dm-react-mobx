import React from 'react';

const Tags = ({tags}) => (
  <React.Fragment>
    {tags.map(tag => (<span style={{marginLeft: '7px'}} key={tag}>{tag}</span>))}
  </React.Fragment>
);

export default Tags;
