import React from 'react'

export default function UserCard(props) {
  const { avatar_url, login, bio } = props.userData;

  return (
    <div>
      <img src={ avatar_url } alt=""/>
      <h4><input type="text" value={ login } /></h4>
      <p>{ bio }</p>
    </div>
  )
}