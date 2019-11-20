import React, {Component} from 'react'
import styles from '../styles'
import request from 'superagent'

const style = styles.workBox
const titleList = ['MITALENT', 'PSU', 'PPE']

export default class WorkBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgNum: 1, list: []
    }
  }
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
  mouseOver(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'block'
  }
  mouseOut(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'none'
  }
  mouseClick(e){
    const view = e.currentTarget.parentNode.querySelector('.view')
    view.style.display = "block"
  }
  closeClick(e){
    const view = e.currentTarget.parentNode
    const img = view.querySelector('.viewImage')
    view.style.display = "none"
    img.style.content = 'url("/resource/screenshot/' + this.state.list[1] +'")'
    this.setState({imgNum: 1})
  }
  back(e){
    if(this.state.imgNum <= 1)  return
    const img = e.currentTarget.parentNode.querySelector('.viewImage')
    const num = this.state.imgNum
    img.style.content = 'url("/resource/screenshot/' + this.state.list[num-1] +'")'
    this.setState({imgNum: num - 1})
  }
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
            <p>PSU</p>
            <p>hello this is my first app</p>
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