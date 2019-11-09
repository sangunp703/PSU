import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import styles from './styles'

const style = styles.contact

export default class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.headerCallback = this.headerCallback.bind(this)
  }
  headerCallback = (jumpData) => {
    if(jumpData !== '/contact'){  // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
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
          <MainHeader color="#685357" jump={this.headerCallback} path={'contact'}/>
          <SideArrow jump={this.headerCallback} path={'contact'} />
          <BottomArrow />
          <h1 style={style.title}>How<br /><p style={style.text}>how can i reach you?</p></h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          hello
        </section>
      </div>
    )
  }
}