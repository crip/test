import React from 'react'
import { withRouteData, Head } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ about }) => (
  <div>
    <Head>
      <title>About us</title>
    </Head>
    {convert(about.contents)}
  </div>
))
