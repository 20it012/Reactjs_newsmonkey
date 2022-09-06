import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        this is my news content.
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>

      </div>
    )
  }
}

export default News
