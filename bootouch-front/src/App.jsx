import React, { Component } from 'react';

import MainDisplay from './Components/MainDisplay.jsx';
import ContentCloseUp from './Components/ContentCloseUp.jsx';
import DebugCRUD from './Components/DebugCRUD.jsx';
import './App.css';

class App extends Component {
  constructor(args){
    super(args);
    this.state = {
      mode: "welcome",
      closeup_memo_id: 1,
      memos: [
        { id:1, content:"First Memo...", when:"5 Min ago" },
        { id:2, content:"Second Memo...", when:"5 Min ago" },
        { id:3, content:"Third Memo...", when:"5 Min ago" }
      ],
      welcome_default_memo: {id:0, content:"Welcome to Bootouch!", when:"N/A" }
    }
  }

  getMemoById() {
    return this.state.memos.find(memo => memo.id === this.state.closeup_memo_id);
  }
  
  render ()
  {
    if(this.state.mode === 'welcome'){
      var _closeup_memo = this.state.welcome_default_memo;
    } else if(this.state.mode === 'closeup') {
      var _closeup_memo = this.getMemoById();
    }
    
    return (
    <div className="main">
      Basic CRUD!
      <MainDisplay memos={this.state.memos} onClickMemo={function(_memo_id){
        this.setState({
          mode: "closeup",
          closeup_memo_id: Number(_memo_id)
        });
      }.bind(this)}></MainDisplay>
      <ContentCloseUp memo={_closeup_memo}></ContentCloseUp>
      <DebugCRUD></DebugCRUD>
    </div>
    )
  }
}

export default App;