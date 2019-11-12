import React, {Component} from 'react'
import styles from '../styles'

const style = styles.workBox

export default class WorkBox extends Component {
  constructor(props){
    super(props)
  }
  mouseOver(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'block'
  }
  mouseOut(e){
    const explain = e.currentTarget.querySelector('.explain')
    explain.style.display = 'none'
  }
  render(){
    return (
      <div style={style.frame}
        onMouseOver={e => this.mouseOver(e)}
        onMouseOut={e => this.mouseOut(e)}>
        <img style={style.image} src="/resource/screenshot/PSU_1.png" />
        <div class="explain" style={style.explain}>
          <p>PSU</p>
          <p>hello this is my first app</p>
        </div>
      </div>
    )
  }
}