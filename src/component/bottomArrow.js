// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.bottomArrow

export default class BottomArrow extends Component {
  constructor(props){
    super(props)
  }
  // 마우스 호버시 화살표가 아래로 내려갔다 올라오도록 표현
  arrowOver(e){
    const arrow = document.querySelectorAll('.arrow')
    for(let i = 0; i<3; i++){
      arrow[i].style.top = "50%"
    }
  }
  arrowOut(e){
    const arrow = document.querySelectorAll('.arrow')
    for(let i = 0; i<3; i++){
      arrow[i].style.top = "0"
    }
  }
  render(){
    return (
      <div style={style.arrowBox}
        onMouseOver={e => this.arrowOver(e)}
        onMouseOut={e => this.arrowOut(e)}>
        <div style={style.item}><img class="arrow" style={style.arrow}/></div>
        <div style={style.item}><img class="arrow" style={style.arrow}/></div>
        <div style={style.item}><img class="arrow" style={style.arrow}/></div>
      </div>
    )
  }
}