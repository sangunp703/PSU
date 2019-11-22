// 오른쪽 왼쪽 이동
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.sideArrow
const screen = ['/introduction', '/history', '/work', '/contact'] // 이동할수 있는 페이지 목록

export default class SideArrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      jump: '', path: ''
    }
  }
  // 첫 페이지면 back화살표를 안보이게, 마지막 페이지면 next화살표를 안보이게
  componentDidMount(){
    if(screen.indexOf('/' + this.props.path) === 3){
      document.querySelector('.next').style.display = "none"
    } else {
      document.querySelector('.next').style.display = "block"
    }
    if(screen.indexOf('/' + this.props.path) === 0){
      document.querySelector('.back').style.display = "none"
    } else {
      document.querySelector('.back').style.display = "block"
    }
  }
  // 다음 페이지의 경로를 부모로부터 받은 props에 전달
  next(e){
    const path = screen.indexOf('/' + this.props.path)
    if(path !== 3){
      this.props.jump(screen[path + 1])
    }
  }
  // 이전 페이지의 경로를 부모로부터 받은 props에 전달
  back(e){
    const path = screen.indexOf('/' + this.props.path)
    if(path !== 0){
      this.props.jump(screen[path - 1])
    }
  }
  // 마우스가 화면의 왼쪽 오른쪽에 갔을 때만 화살표가 표시되도록
  backOver(){
    document.querySelector('.back').style.opacity = '1'
  }
  backOut(){
    document.querySelector('.back').style.opacity = '0'
  }
  nextOver(){
    document.querySelector('.next').style.opacity = '1'
  }
  nextOut(){
    document.querySelector('.next').style.opacity = '0'
  }
  render(){
    return (
      <div style={style.arrowBox}>
        <div style={style.backArea}
          onMouseOver={e => this.backOver()}
          onMouseOut={e => this.backOut()}>
          <img class="back" style={style.back} onClick={e => this.back(e)}/>
        </div>
        <div style={style.nextArea}
          onMouseOver={e => this.nextOver()}
          onMouseOut={e => this.nextOut()}>
         <img class="next" style={style.next} onClick={e => this.next(e)}/>
        </div>
      </div>
    )
  }
}