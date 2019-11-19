// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.dragableBox
const compPos = [
  {top: '15%', left: '15%'},
  {top: '15%', right: '15%'},
  {bottom: '15%', left: '15%'},
  {bottom: '15%', right: '15%'}]
const subject = ['NAME', 'AGE', 'JOB', 'HOBBY']
const content = ['Sangun Park', '26', 'Web Developer', 'Music']

export default class DragableBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: subject[parseInt(this.props.compNum, 10)], hold: false, clkX: 0, clkY: 0
    }
  }
  initComp(box, index){
    if(this.props.display >= index)  box.style.display = 'block'
    if(compPos[index].top) box.style.top = compPos[index].top
    if(compPos[index].left) box.style.left = compPos[index].left
    if(compPos[index].right) box.style.right = compPos[index].right
    if(compPos[index].bottom) box.style.bottom = compPos[index].bottom
  }
  componentDidMount(){
    const box = document.querySelectorAll('.dragableFrame')
    for(let i = 0; i< box.length; i++){
      this.initComp(box[i], i)
    }
  }
  mouseDown(e){
    e.currentTarget.style.boxShadow = '0px 0px 10px 10px gray'
    e.currentTarget.style.zIndex = '5'
    this.setState({hold: true, clkX: e.pageX, clkY: e.pageY})
  }
  mouseUp(e){
    e.currentTarget.style.boxShadow = '0px 0px 0px 0px gray'
    e.currentTarget.style.zIndex = '0'
    this.setState({hold: false})
  }
  mouseOver(e){
    e.currentTarget.style.fontSize = '2vw'
    this.setState({content: content[parseInt(this.props.compNum, 10)]})
  }
  mouseOut(e){
    e.currentTarget.style.fontSize = '4vw'
    this.setState({content: subject[parseInt(this.props.compNum, 10)]})
    if(this.state.hold){
      const parentElement = e.target.parentElement
      const parentAbsoluteX = window.pageXOffset + parentElement.getBoundingClientRect().left
      const absoluteX = window.pageXOffset + e.target.getBoundingClientRect().left
      const relativeX = absoluteX - parentAbsoluteX
      const gapX = e.pageX - this.state.clkX
      const parentAbsoluteY = window.pageYOffset + parentElement.getBoundingClientRect().top
      const absoluteY = window.pageYOffset + e.target.getBoundingClientRect().top
      const relativeY = absoluteY - parentAbsoluteY
      const gapY = e.pageY - this.state.clkY
      e.currentTarget.style.left = (relativeX + gapX) + "px"
      e.currentTarget.style.top = (relativeY + gapY) + "px"
      this.setState({clkX: e.pageX, clkY: e.pageY})
    }
  }
  mouseMove(e){
    if(this.state.hold){
      const parentElement = e.target.parentElement
      const parentAbsoluteX = window.pageXOffset + parentElement.getBoundingClientRect().left
      const absoluteX = window.pageXOffset + e.target.getBoundingClientRect().left
      const relativeX = absoluteX - parentAbsoluteX
      const gapX = e.pageX - this.state.clkX
      const parentAbsoluteY = window.pageYOffset + parentElement.getBoundingClientRect().top
      const absoluteY = window.pageYOffset + e.target.getBoundingClientRect().top
      const relativeY = absoluteY - parentAbsoluteY
      const gapY = e.pageY - this.state.clkY
      e.currentTarget.style.left = (relativeX + gapX) + "px"
      e.currentTarget.style.top = (relativeY + gapY) + "px"
      this.setState({clkX: e.pageX, clkY: e.pageY})
    }
  }
  render(){
    return (
      <div class="dragableFrame" style={style.frame}
        onMouseDown={e => this.mouseDown(e)}
        onMouseUp={e => this.mouseUp(e)}
        onMouseMove={e => this.mouseMove(e)}
        onMouseOver={e => this.mouseOver(e)}
        onMouseOut={e => this.mouseOut(e)}>
        {this.state.content}
      </div>
    )
  }
}