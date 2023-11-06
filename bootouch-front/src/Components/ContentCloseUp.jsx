import React, { Component } from 'react';

class ContentCloseUp extends Component {
  render() {
    var _content = this.props.memo.content;
    var _when = this.props.memo.when;
    return (
      <article>
        <p>{_content}</p>
        <i>{_when}</i>
      </article>
    )
  }
}

export default ContentCloseUp;