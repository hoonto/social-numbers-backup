[![view on npm](https://img.shields.io/npm/v/social-numbers.svg)](https://www.npmjs.org/package/social-numbers)
[![npm module downloads](https://img.shields.io/npm/dt/social-numbers.svg)](https://www.npmjs.org/package/social-numbers)
[![Build Status](https://travis-ci.org/75lb/social-numbers.svg?branch=master)](https://travis-ci.org/75lb/social-numbers)
[![Dependency Status](https://david-dm.org/75lb/social-numbers.svg)](https://david-dm.org/75lb/social-numbers)
[![Coverage Status](https://coveralls.io/repos/github/75lb/social-numbers/badge.svg)](https://coveralls.io/github/75lb/social-numbers)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# social-numbers

Fetch social media numbers. No special access or API key required.

## Synopsis

This script:

```js
async function start () {
  const socialNumbers = require('social-numbers')
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
```

Outputs this:

```
twitter 9447902
instagram 5653668
vk 378090
facebook 47129936
```

* * *

&copy; 2018 Lloyd Brookes <75pound@gmail.com>.
