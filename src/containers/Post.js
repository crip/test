import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ post }) => (
  <div>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h1>{post.title}</h1>
    {convert(post.contents)}
  </div>
))
