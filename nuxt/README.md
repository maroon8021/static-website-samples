# Created by Nuxt

## Setup

```
npm i
```

https://ja.nuxtjs.org/guide/installation/

## Run server

Run any command on this directly( `static-website-samples/nuxt` )

## How to mix jQuery in nuxt

See `pages/jquery-sample.vue`

```javascript
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ]
    }
  },
  mounted: () => {
    $('a[href^="#"]').click(function() {
      const speed = 400
      const href = $(this).attr('href')
      const target = $(href === '#' || href === '' ? 'html' : href)
      const position = target.offset().top
      $('body,html').animate({ scrollTop: position }, speed, 'swing')
      return false
    })
  }
}
```
