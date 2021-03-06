// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'
import request from 'superagent'

const style = styles.historyBox

export default class HistoryBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false, historyBox: {}
    }
  }
  // 서버에 json파일 요청 후 결과 값을 기록
  componentWillMount(){
    request
      .get('/api/history')
      .query({
        index: this.props.boxNum
      })
      .end((err, res) => {
        if(err) return
        this.setState({historyBox: res.body.historyBox})
      })
  }
  // 이미지 클릭시 상자 토글
  boxClick(e){
    const story = e.currentTarget.parentNode.querySelector('.story')
    if(this.state.toggle){
      story.style.display = "none"
      this.setState({toggle: false})
    } else{
      story.style.display = "flex"
      this.setState({toggle: true})
    }
  }
  // 오른쪽에 배치된 요소만 이미지의 위치와 콘텐츠 변경
  loadImg(e){
    if(this.props.LR === 'R'){
      e.currentTarget.querySelector(".historyImgFrame").style.left = "0%"
      e.currentTarget.querySelector(".img").style.content="url(../resource/next.png)"
    }
  }
  render(){
    return (
      <div class="historyFrame" style={style.frame}
        onLoad={e => this.loadImg(e)}>
        <div class="historyImgFrame" style={style.imageFrame}
          onClick={e => this.boxClick(e)}><img class="img" src="../resource/back.png" style={style.icon}/></div>
        <div class="story" style={style.story}>
          <p style={style.title}>{this.state.historyBox.title}</p>
          <pre style={style.content}>{this.state.historyBox.content}</pre>
        </div>
      </div>
    )
  }
}