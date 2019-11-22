import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './test.css'

const audio = require('./function/audioControl')

export default class Opening extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: '', hold: false, music: true
    }
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div class="openingScreen">
        <h1 class="openingScreen__neon">
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>P</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>A</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>R</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>K</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>S</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>A</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>N</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>G</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>U</span>
          <span class="openingScreen__item" onAnimationEnd={e => e.target.classList.add('openingScreen__item--end')}>N</span>
        </h1>
      </div>
    )
  }
}