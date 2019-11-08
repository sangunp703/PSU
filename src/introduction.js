import React, {Component} from 'react'
import MainHeader from './component/mainHeader'
import SideArrow from './component/sideArrow'
import BottomArrow from './component/bottomArrow'
import styles from './styles'

const style = styles.introduction

export default class Introduction extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
  }
  componentDidMount(){
    document.body.style.backgroundColor = "yellow"
  }
  render(){
    return (
      <div>
        <header style={style.header}>
          <MainHeader />
          <SideArrow />
          <BottomArrow />
          <h1 style={style.title}>Who is <br />this guy?</h1>
          <img style={style.silhouette}/>
        </header>
        <section style={style.section}>
          hello
        </section>
      </div>
    )
  }
}