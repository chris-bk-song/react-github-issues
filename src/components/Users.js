import React, { Component } from 'react'
import UserCard from './UserCard.js'

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      users: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(data => {
        const newUsers = [...this.state.users, data]
        this.setState({
          users: newUsers,
          userName: '',
        })
      })
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      userName: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter a user name" onChange={this.handleChange} value={this.state.userName} />
          <button type="submit">Search</button>
          </form>
          { this.state.users.length !== 0 && (
            <div>
              <h4>Users</h4>
              { this.state.users.map((user, index) => {
                return <UserCard key={index} userData={user} />
              }) }
            </div>
          )}
      </div>
    )
  }
}