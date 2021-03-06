// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'
import HistoryBox from './historyBox'

const style = styles.historyTree

export default class HistoryTree extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
  }
  // 아이콘 클릭시 트리 요소 토글
  treeDraw(e){
    const tree = document.querySelector('.tree')
    if(this.state.toggle){
      tree.style.display="none"
      this.setState({toggle: false})
    } else{
      tree.style.display="block"
      this.setState({toggle: true})
    }
  }
  imgOver(e){
    e.currentTarget.style.boxShadow = '0px 0px 10px 10px gray'
  }
  imgOut(e){
    e.currentTarget.style.boxShadow = '0px 0px 0px 0px gray'
  }
  render(){
    return (
      <div>
        <div style={style.imageFrame}
            onClick={e => this.treeDraw(e)}
            onMouseOver={e => this.imgOver(e)}
            onMouseOut={e => this.imgOut(e)}>
          <img src="/resource/sprout.png" style={style.startIcon} />
        </div>
        <div class="tree" style={{display:'none'}}>
          <div style={style.verticalLine}></div>
          <div style={style.grid}>
            <div style={style.gridx}><HistoryBox boxNum={0} LR="L"/></div>
            <div style={style.gridItem}><HistoryBox boxNum={1} LR="R"/></div>
            <div style={style.gridx}><HistoryBox boxNum={2} LR="L"/></div>
            <div style={style.gridx}><HistoryBox boxNum={3} LR="R"/></div>
            <div style={style.gridx}><HistoryBox boxNum={4} LR="L"/></div>
            <div style={style.gridx}><HistoryBox boxNum={5} LR="R"/></div>
            <div style={style.gridx}><HistoryBox boxNum={6} LR="L"/></div>
          </div>
          <div><img style={style.tree} src="/resource/tree.png" /></div>
        </div>
      </div>
    )
  }
}