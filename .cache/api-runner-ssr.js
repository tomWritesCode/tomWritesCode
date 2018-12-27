var plugins = [{
      plugin: require('/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#44e3dc","theme_color":"#44e3dc","display":"minimal-ui","icon":"./public/icons/favicon-256.png"},
    },{
      plugin: require('/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":false},
    },{
      plugin: require('/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/node_modules/gatsby-plugin-emotion/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-130212927-1","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"example.com"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
