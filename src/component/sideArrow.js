// 오른쪽 왼쪽 이동
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.sideArrow
const screen = ['/introduction', '/history', '/work', '/contact']

export default class SideArrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      jump: '', path: ''
    }
  }
  next(e){
    const path = screen.indexOf(this.props.path)
    if(path !== 3){
      this.props.jump(screen[path + 1])
    }
  }
  back(e){
    const path = screen.indexOf(this.props.path)
    if(path !== 0){
      this.props.jump(screen[path - 1])
    }
  }
  render(){
    return (
      <div style={style.arrowBox}>
        <img style={style.back} onClick={e => this.back(e)}/>
        <img style={style.next} onClick={e => this.next(e)}/>
      </div>
    )
  }
}