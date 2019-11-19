import React, {Component} from 'react'
import styles from '../styles'
import request from 'superagent'

const style = styles.workBox
const titleList = ['PSU', 'PPE', 'MITALENT']

export default class WorkBox extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const box = document.querySelectorAll('.workBoxImage')
    const view = document.querySelectorAll('.viewImage')
    for(let i = 0; i< box.length; i++){
      this.initComp(box[i], view[i], i)
    }
  }
  initComp(box, view, index){
    request
      .get('/api/screenshot')
      .query({
        title: titleList[index]
      })
      .end((err, res) => {
        if(err) return
        box.style.content = 'url("/resource/screenshot/' + res.body.list[0] + '")'
        view.style.content = 'url("/resource/screenshot/' + res.body.list[1] + '")'
      })
  }
  mouseOver(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'block'
  }
  mouseOut(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'none'
  }
  mouseClick(e){
    const view = document.querySelector('.view')
    view.style.display = "block"
  }
  closeClick(e){
    const view = document.querySelector('.view')
    view.style.display = "none"
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
            <p>PSU</p>
            <p>hello this is my first app</p>
          </div> 
        </div>
        <div class="view" style={style.view}>
          <div style={style.layout}
            onClick={e => this.closeClick(e)}></div>
          <img class="viewImage" style={style.screenshot} />
        </div>
      </div>
    )
  }
}