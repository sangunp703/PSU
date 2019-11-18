import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import AudioBox from './component/audioBox'
import Footer from './component/footer'
import styles from './styles'
import DragableBox from './component/dragableBox'

const style = styles.introduction
var count = 0

export default class Introduction extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.jumpCallback = this.jumpCallback.bind(this)
  }
  jumpCallback = (jumpData) => {
    if(jumpData !== '/introduction'){ // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
      this.setState({
        jump: jumpData
      })
    }
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  imgClick(e){
    const box = document.querySelectorAll('.dragableFrame')
    if(count === 0){
      e.target.style.content = 'url("./resource/me.jpg")'
    }
    for(let i = 0; i< 4; i++){
      if(count >= i+1) box[i].style.display = 'block'
    }
    count++
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div>
        <header style={style.header}>
          <MainHeader color="#ECB765" jump={this.jumpCallback} path={'introduction'}/>
          <SideArrow jump={this.jumpCallback} path={'introduction'}/>
          <BottomArrow />
          <AudioBox color="#ECB765"/>
          <h1 style={style.title}>Who<br /><p style={style.text}>who is this guy?</p></h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          <img style={style.centerImg} src="./resource/introduction_img.png" 
            onClick={e => this.imgClick(e)}/>
          <DragableBox/>
          <DragableBox/>
          <DragableBox/>
          <DragableBox/>
        </section>
        <hr />
        <Footer jump={this.jumpCallback}/>
      </div>
    )
  }
}