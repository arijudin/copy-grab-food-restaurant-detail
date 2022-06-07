import React from 'react'

const Icon = (props) => {
  return <i className={`icomoon ${props.icon} ${props.className ?? ''}`} />;
}

export default Icon
 