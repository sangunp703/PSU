// 메인 4페이지의 상단 네비게이션 바
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.mainHeader

export default class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: props.color
    }
  }
  componentDidMount(){
    document.querySelector('.nav').style.backgroundColor = this.state.color
    document.querySelector('.' + this.props.path).style.borderBottom = '2px dashed black'
    document.querySelector('.' + this.props.path).style.color = "white"
  }
  mouseOver(e){
    e.target.style.color="white"
  }
  mouseOut(e){
    if(e.target.className !== this.props.path){
      e.target.style.color="black"
    }
  }
  render(){
    return (
      <nav>
        <ul class="nav" style={style.nav}>
          <li class="introduction" style={style.items}
            onClick={() => this.props.jump('/introduction')}
            onMouseOver={e => this.mouseOver(e)}
            onMouseOut={e => this.mouseOut(e)}>Introduction</li>
          <li class="history" style={style.items}
            onClick={() => this.props.jump('/history')}
            onMouseOver={e => this.mouseOver(e)}
            onMouseOut={e => this.mouseOut(e)}>History</li>
          <li class="work" style={style.items}
            onClick={() => this.props.jump('/work')}
            onMouseOver={e => this.mouseOver(e)}
            onMouseOut={e => this.mouseOut(e)}>Work</li>
          <li class="contact" style={style.items}
            onClick={() => this.props.jump('/contact')}
            onMouseOver={e => this.mouseOver(e)}
            onMouseOut={e => this.mouseOut(e)}>Contact</li>
        </ul>
      </nav>
    )
  }
}