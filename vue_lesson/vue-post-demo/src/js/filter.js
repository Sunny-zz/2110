import Vue from 'vue'

// 获取文章的标签文字
Vue.filter('getTopicTagText', function (topic) {
  if (!topic) return ''
  const { good, tab, top } = topic
  return top ? '置顶' :  good ? '精华' : tab === 'share' ? '分享' : tab === 'ask' ? '问答' : tab === 'job' ? '招聘' : '测试'
})
