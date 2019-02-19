
const socialNumbers = require('./index');

async function start () {
  const twitter = await socialNumbers.twitter('BBCNews')
  console.log('twitter', twitter.followers)

  const instagram = await socialNumbers.instagram('bbcnews')
  console.log('instagram', instagram.followers)

  const vk = await socialNumbers.vk('bbc', {
    fetch: {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3516.0 Safari/537.36'
      }
    }
  })
  console.log('vk', vk.followers)

  const facebook = await socialNumbers.facebook('bbcnews')
  console.log('facebook', facebook.followers)
}

start()

