import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import AudioBox from './component/audioBox'
import WorkBox from './component/workBox'
import Footer from './component/footer'
import styles from './styles'

const style = styles.work

export default class Work extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
    this.jumpCallback = this.jumpCallback.bind(this)
  }
  jumpCallback = (jumpData) => {
    if(jumpData !== '/work'){ // 현재 페이지로 redirect 할 때 렌더링이 안되는 현상 방지
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
          <MainHeader color="#265E62" jump={this.jumpCallback} path={'work'}/>
          <SideArrow jump={this.jumpCallback} path={'work'} />
          <BottomArrow />
          <AudioBox color="#265E62"/>
          <h1 style={style.title}>what <br /><p style={style.text}>what did you do?</p></h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          <article style = {style.article}>
            <h1 style={style.articleTitle}>Publishing</h1>
            <hr />
            <WorkBox title={0}/>
          </article>
          <article style = {style.article}>
            <h1 style={style.articleTitle}>JS</h1>
            <hr />
            <WorkBox title={1}/>
            <WorkBox title={2}/>
            <WorkBox title={3}/>
          </article>
        </section>
        <hr />
        <Footer jump={this.jumpCallback}/>
      </div>
    )
  }
}