import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title , description , imageUrl, newUrl} = this.props
    return (

      <div className="container my-3">
              <div className="card"  style={{ width: "18rem"}}>
      <img src={imageUrl} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}....</h5>
        <p className="card-text">{description}....</p>
        <a  rel="noreferrer" href={newUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
    </div>

    )
  }
}
