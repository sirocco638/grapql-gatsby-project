import React from "react"
import {Link} from "gatsby"
import "./post.css"

export default ({title, author, date, description, path}) => (
  <div className="post">
    <h3 className="post-title">{ title }</h3>
    <p className="post-description">{ description }</p>
    <p className="post-written-by">
      Written by { author } on { date }
    </p>
    <Link to={ path }>Read more</Link>
  </div>
)