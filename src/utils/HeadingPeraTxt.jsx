import React from 'react'

function HeadingPeraTxt({ level, text, className}) {
    const Tag = `${level}`;

    return <Tag className={className}>{text}</Tag>;
  
}

export default HeadingPeraTxt