import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

export default withRouteData(({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.slug} className={`post-${post.slug}`}>
        <h2>
          <Link to={`/${post.slug}/`}>{post.title}</Link>
        </h2>
        {convert(post.contents)}
      </div>
    ))}
  </div>
))
