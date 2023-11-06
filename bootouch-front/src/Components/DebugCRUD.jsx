import React, { Component } from 'react';

class CRUDComponent extends Component {
  render() {
    return (
      <div>
        <h3>Functions</h3>
        <ul>
          <li><a href="/create_memo">create</a></li>
          <li><a href="/update_memo">update</a></li>
          <li><input type="button" value="delete"></input></li>
        </ul>
      </div>
    );
  }
}

export default CRUDComponent;