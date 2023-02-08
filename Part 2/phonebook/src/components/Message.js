import React from 'react';

const Message = (props) => {
  const message = {
    backgroundColor: '#90EE90',
    color: 'black',
    fontSize: 16,
    borderRadius: 8,
    border: 'solid',
    borderColor: '#008F39',
    padding: 10,
  };

  if (props.children == null) return null;
  return <p style={message}>{props.children}</p>;
};

export default Message;
