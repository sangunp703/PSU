import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import AudioBox from './component/audioBox'
import styles from './styles'
import HistoryTree from './component/historyTree'
import Footer from './component/footer'

const style = styles.history

export default class History extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.jumpCallback = this.jumpCallback.bind(this)
  }
  jumpCallback = (jumpData) => {
    if(jumpData !== '/history'){  // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
      this.setState({
        jump: jumpData
      })
    }
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div>
        <header style={style.header}>
          <MainHeader color="#DB7A65" jump={this.jumpCallback} path={'history'}/>
          <SideArrow jump={this.jumpCallback} path={'history'} />
          <BottomArrow />
          <AudioBox color="#DB7A65"/>
          <h1 style={style.title}>why<br /><p style={style.text}>why did you become a developer?</p></h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          <HistoryTree />
        </section>
        <hr />
        <Footer jump={this.jumpCallback}/>
      </div>
    )
  }
}