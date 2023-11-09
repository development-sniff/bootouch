import React, { Component } from 'react';

class MainDisplay extends Component {
  render() {
    var memos = this.props.memos;
    var list = [];
    for(var i = 0; i < memos.length; i++){
      list.push(
        <li key={memos[i].id}>
          <a href={"/memo/" + memos[i].id}
            data-id={memos[i].id}
            onClick={function(e){
            e.preventDefault();
            this.props.onClickMemo(e.target.dataset.id);
          }.bind(this)}>
            {memos[i].content}
          </a>
        </li>
      );
    }
    //console.log(list);
    
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default MainDisplay;