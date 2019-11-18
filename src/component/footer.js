// 메인 4페이지의 상단 네비게이션 바
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.footer

export default class Footer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <footer>
        <div style={style.container}>
          <div style={style.title} onClick={e => this.props.jump('/opening')}>PSU</div>
          <div><p>designed by sangunpark</p><br /><p>created by sangunpark</p></div>
          <div>Copylight 2019. sangunpark. All rights reserved</div>
        </div>
      </footer>
    )
  }
}