import React, {Component} from 'react'
import styles from '../styles'
import request from 'superagent'

const style = styles.workBox
const titleList = ['MITALENT', 'PSU', 'PPE']

export default class WorkBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgNum: 1, list: [], workBox: {}
    }
  }
  // 서버에 json파일 요청 후 결과 값을 기록
  componentWillMount(){
    request
      .get('/api/work')
      .query({
        index: this.props.title
      })
      .end((err, res) => {
        if(err) return 
        this.setState({workBox: res.body.workBox})
      })
  }
  // 서버에 스크린샷 리스트 요청 후 결과 값을 기록
  componentDidMount(){
    const box = document.querySelectorAll('.workBoxImage')
    const view = document.querySelectorAll('.viewImage')
    request
      .get('/api/screenshot')
      .query({
        title: titleList[this.props.title]
      })
      .end((err, res) => {
        if(err) return
        this.setState({list: res.body.list})
        console.log(this.state.list)
        box[this.props.title].style.content = 'url("/resource/screenshot/' + res.body.list[0] + '")'
        view[this.props.title].style.content = 'url("/resource/screenshot/' + res.body.list[1] + '")'
      })
  }
  // 마우스 호버시 작품 설명 보이게
  mouseOver(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'flex'
  }
  mouseOut(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'none'
  }
  // 클릭하면 전체 스크린샷을 볼 수 있도록 뷰 제공
  mouseClick(e){
    const view = e.currentTarget.parentNode.querySelector('.view')
    view.style.display = "block"
  }
  // 스크린샷과 버튼 이외의 장소를 누르면 뷰 탈출
  closeClick(e){
    const view = e.currentTarget.parentNode
    const img = view.querySelector('.viewImage')
    view.style.display = "none"
    img.style.content = 'url("/resource/screenshot/' + this.state.list[1] +'")'
    this.setState({imgNum: 1})
  }
  // back화살표를 클릭하면 이전 스크린샷
  back(e){
    if(this.state.imgNum <= 1)  return
    const img = e.currentTarget.parentNode.querySelector('.viewImage')
    const num = this.state.imgNum
    img.style.content = 'url("/resource/screenshot/' + this.state.list[num-1] +'")'
    this.setState({imgNum: num - 1})
  }
  // next화살표를 클릭하면 다음 스크린샷
  next(e){
    if(this.state.imgNum >= this.state.list.length - 1)  return
    const img = e.currentTarget.parentNode.querySelector('.viewImage')
    const num = this.state.imgNum
    img.style.content = 'url("/resource/screenshot/' + this.state.list[num+1] +'")'
    this.setState({imgNum: num + 1})
  }
  render(){
    return (
      <div>
        <h2 style={style.workTitle}>title</h2>
        <div style={style.frame}
          onMouseOver={e => this.mouseOver(e)}
          onMouseOut={e => this.mouseOut(e)}
          onClick={e => this.mouseClick(e)}>
          <img class="workBoxImage" style={style.image} />
          <div class="explain" style={style.explain}>
            <p style={style.title}>{this.state.workBox.title}</p>
            <pre style={style.content}>{this.state.workBox.content}</pre>
          </div> 
        </div>
        <div class="view" style={style.view}>
          <div style={style.layout}
            onClick={e => this.closeClick(e)}></div>
          <img class="viewImage" style={style.screenshot} />
          <img src="./resource/back.png" style={style.back}
            onClick={e => this.back(e)}/>
          <img src="./resource/next.png" style={style.next}
            onClick={e => this.next(e)}/>
        </div>
      </div>
    )
  }
}