import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

const root = 'http://crip.github.io/test';

export default {
  siteRoot: root,
  basePath: 'test',
  getSiteData: () => ({
    title: '🦄',
    name: '~/🦄 $',
  }),
  getRoutes: async () => {
    const { posts, about } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          })
        }))
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          about
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
