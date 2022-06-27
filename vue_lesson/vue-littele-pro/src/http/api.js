// 统一管理接口
import http from './http'

// 获取文章列表
export const getTopics = ({ params }) => http({
  method: 'get',
  params,
  url: '/topics'
})

// 获取文章详情
export const getTopic = (params) => http({
  url: '/topic/'+ params.id,
  method: 'get',
  params
})

// 验证 accesstoken 其实就是登陆
export const login = (data) => http({
  url: '/accesstoken',
  method: 'post',
  data
})

// 收藏主题
export const collectTopic = (data) => http({
  url: '/topic_collect/collect',
  method: 'post',
  data
})

// 取消收藏主题
export const deCollectTopic = (data) => http({
  url: '/topic_collect/de_collect',
  method: 'post',
  data
})
