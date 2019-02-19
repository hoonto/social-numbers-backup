const urlUtil = require('url')
const fetch = require('node-fetch')

/**
 * @module social-numbers
 */
exports.facebook = facebook
exports.twitter = twitter
exports.instagram = instagram
exports.vk = vk

function timer (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

async function fetchText (url, options) {
  const reqOptions = Object.assign({
    redirect: 'follow'
  }, options)
  const response = await fetch(url, reqOptions)
  const text = await response.text()
  return text
}

async function facebook (username, options) {
  const html = await fetchText(`https://www.facebook.com/${username}/`, options && options.fetch)
  const matches = html.match(/([\d,]+) people follow this/)
  return {
    html,
    followers: Number(matches[1].replace(/,/g, ''))
  }
}

async function twitter (username, options) {
  const html = await fetchText(`https://twitter.com/${username}/`, options && options.fetch)
  const matches = html.match(/<span class="u-hiddenVisually">Followers<\/span>[\s\S]*?data-count=(\d+)[\s\S]*?<\/span>/)
  return {
    html,
    followers: Number(matches[1])
  }
}

async function instagram (username, options) {
  const html = await fetchText(`https://www.instagram.com/${username}/`, options && options.fetch)
  const matches = html.match(/"edge_followed_by":{"count":(\d+)}/)
  return {
    html,
    followers: Number(matches[1])
  }
}

async function vk (username, options) {
  const html = await fetchText(`https://vk.com/${username}`, options && options.fetch)
  const matches = html.match(/<span class="header_count fl_l">([\d,]+)<\/span>/)
  return {
    html,
    followers: Number(matches[1].replace(/,/g, ''))
  }
}
