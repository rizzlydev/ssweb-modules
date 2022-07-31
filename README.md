# ssweb-api
`Package ssweb API with puppeteer and google chrome`

# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/rizzydev81/ssweb-api/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/rizzydev81/ssweb-api/issues/new)


# Installation

## Latest
`npm i github:rizzydev81/ssweb-api`

## Npm 
`npm i ssweb-api`


# Require
```js
const api = require("ssweb-api")
```


# Docs

## Ssweb Desktop
```js
(async () => {
var result = await api.desktop({ url: 'https://downloader.rizfurr.ml' })
console.log(result)
})()
```

### Result 
<img src="https://file.rizfurr.ml/file/zokljyltIsozlonCRLHi.png"></img>

### Result JSON
```js
{
  status: 200,
  creator: 'RizFurr',
  result: 'https://file.rizfurr.ml/file/zokljyltIsozlonCRLHi.png'
}
```

## Ssweb Desktop (Full Page)
```js
(async () => {
var result = await api.desktop({ url: 'https://downloader.rizfurr.ml', fullpage: true })
console.log(result)
})()
```

### Result 
<img src="https://file.rizfurr.ml/file/ghpwNCzDoxIJEtUXocWw.png"></img>

### Result JSON
```js
{
  status: 200,
  creator: 'RizFurr',
  result: 'https://file.rizfurr.ml/file/ghpwNCzDoxIJEtUXocWw.png'
}
```

## Ssweb Handphone 
```js
(async () => {
var result = await api.handphone({ url: 'https://google.co.id' })
console.log(result)
})()
```

### Result 
<img src="https://telegra.ph/file/517b8219ca53433c73b40.png"></img>

### Result JSON
```js
{
  status: 200,
  creator: 'Caliph',
  result: 'https://uploader.caliph.my.id/file/scd2djBxkG.png'
}
```

## Ssweb Handphone (Full Page)
```js
(async () => {
var result = await api.handphone({ url: 'https://google.co.id/search?q=Caliph%20Rest%20Api', fullpage: true })
console.log(result)
})()
```

### Result 
<img src="https://uploader.caliph.my.id/file/GSXWUwB3nJ.png"></img>

### Result JSON
```js
{
  status: 200,
  creator: 'Caliph',
  result: 'https://uploader.caliph.my.id/file/wxP42avOdq.png'
}
```


