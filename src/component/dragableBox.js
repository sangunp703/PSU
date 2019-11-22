// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.dragableBox
const compPos = [ // dragable상자 초기 장소
  {top: '15%', left: '15%'},
  {top: '15%', right: '15%'},
  {bottom: '15%', left: '15%'},
  {bottom: '15%', right: '15%'}]
const subject = ['NAME', 'AGE', 'JOB', 'HOBBY'] // dragable상자 주제
const content = ['Sangun Park', '26', 'Web Developer', 'Music'] // dragable상자 내용

export default class DragableBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: subject[this.props.compNum], hold: false, clkX: 0, clkY: 0
    }
  }
  // 요소가 마운트 될때 각 상자 위치 초기화
  initComp(box, index){
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
  // 마우스를 누르면 현재 페이지 기준으로 마우스 좌표 저장
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
  // 마우스 호버시 내용 바뀌도록
  mouseOver(e){
    e.currentTarget.style.fontSize = '2vw'
    this.setState({content: content[this.props.compNum]})
  }
  // 마우스가 드래그 되면 부모와 요소의 상대위치를 얻고 클릭된 이전 위치와의 차이만큼 이동
  mouseMove(e){
    if(this.state.hold){
      const parentElement = e.target.parentElement
      const parentAbsoluteX = window.pageXOffset + parentElement.getBoundingClientRect().left
      const absoluteX = window.pageXOffset + e.target.getBoundingClientRect().left
      const relativeX = absoluteX - parentAbsoluteX
      const gapX = e.pageX - this.state.clkX  // 클릭시 좌표와 현재 좌표의 차
      const parentAbsoluteY = window.pageYOffset + parentElement.getBoundingClientRect().top
      const absoluteY = window.pageYOffset + e.target.getBoundingClientRect().top
      const relativeY = absoluteY - parentAbsoluteY
      const gapY = e.pageY - this.state.clkY  // 클릭시 좌표와 현재 좌표의 차
      e.currentTarget.style.left = (relativeX + gapX) + "px"
      e.currentTarget.style.top = (relativeY + gapY) + "px"
      this.setState({clkX: e.pageX, clkY: e.pageY}) // 요소 이동후 다시 현재 좌표를 저장
    }
  }
  // 마우스가 드래그중 이탈했을 때 일어나는 버그 해결을 위해 이탈시 요소가 바로 따라가도록 설정
  mouseOut(e){
    e.currentTarget.style.fontSize = '4vw'
    this.setState({content: subject[this.props.compNum]})
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