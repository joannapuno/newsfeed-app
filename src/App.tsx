import React, { Component } from 'react'
import { TopNav, BottomNav } from 'Layout'
import { QuackFeed } from 'components';

class App extends Component{
 render() {
  return (
    <div className="app">
      <TopNav />
      <QuackFeed />
      <BottomNav />
    </div>
  )
 }
}

export default App;
