import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import AudioBox from './component/audioBox'
import styles from './styles'

const style = styles.history

export default class History extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.headerCallback = this.headerCallback.bind(this)
  }
  headerCallback = (jumpData) => {
    if(jumpData !== '/history'){  // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
      this.setState({
        jump: jumpData
      })
    }
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div>
        <header style={style.header}>
          <MainHeader color="#DB7A65" jump={this.headerCallback} path={'history'}/>
          <SideArrow jump={this.headerCallback} path={'history'} />
          <BottomArrow />
          <AudioBox color="#DB7A65"/>
          <h1 style={style.title}>why<br /><p style={style.text}>why did you become a developer?</p></h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          hello
        </section>
      </div>
    )
  }
}