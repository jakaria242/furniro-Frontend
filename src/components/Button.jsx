import React from 'react'

const Button = ({className, btntxt}) => {
  return (
    <button className={className}>{btntxt}</button>
  )
}

export default Button