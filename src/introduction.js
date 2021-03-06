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
var count = 0 // 센터 이미지 몇번 클릭했는지 카운팅

export default class Introduction extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.jumpCallback = this.jumpCallback.bind(this)  // 함수의 this를 본 요소에 바인딩
  }
  // 자식 요소로부터 받은 값으로 점프
  jumpCallback = (jumpData) => {
    if(jumpData !== '/introduction'){ // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
      this.setState({
        jump: jumpData
      })
    }
  }
  // 다른 페이지에 갔다오면 스크롤 초기화, 카운트 리셋
  componentDidUpdate() { 
    window.scrollTo(0, 0)
    count = 0
  }
  imgClick(e){
    const box = document.querySelectorAll('.dragableFrame')
    if(count === 0){  // 첫번째 클릭 = 사진바꾸기
      e.target.style.content = 'url("./resource/me.png")'
    }
    for(let i = 0; i< 4; i++){ // dragable상자 순서대로 표시
      if(count >= i+1) box[i].style.display = 'block'
    }
    count++
  }
  // 이미지 호버시에 그림자 나타나게
  imgOver(e){
    e.currentTarget.style.boxShadow = '0px 0px 10px 10px gray'
  }
  imgOut(e){
    e.currentTarget.style.boxShadow = '0px 0px 0px 0px gray'
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
          <img style={style.centerImg} src="./resource/user.png" 
            onClick={e => this.imgClick(e)}
            onMouseOver={e => this.imgOver(e)}
            onMouseOut={e => this.imgOut(e)}/>
          <DragableBox compNum={0}/>
          <DragableBox compNum={1}/>
          <DragableBox compNum={2}/>
          <DragableBox compNum={3}/>
        </section>
        <hr />
        <Footer jump={this.jumpCallback}/>
      </div>
    )
  }
}