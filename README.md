# ssweb-modules
`Package ssweb API with puppeteer and google chrome`

# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/rizzydev81/ssweb-modules/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/rizzydev81/ssweb-modules/issues/new)


# Installation

## Latest
`npm i github:rizzydev81/ssweb-modules`

## Npm 
`npm i ssweb-modules`


# Require
```js
const api = require("ssweb-modules")
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
var result = await api.handphone({ url: 'https://downloader.rizfurr.ml' })
console.log(result)
})()
```

### Result 
<img src="https://file.rizfurr.ml/file/kXQPfzrhAnAdgYSqdkUZ.png"></img>

### Result JSON
```js
{
  status: 200,
  creator: 'RizFurr',
  result: 'https://file.rizfurr.ml/file/kXQPfzrhAnAdgYSqdkUZ.png'
}
```

## Ssweb Handphone (Full Page)
```js
(async () => {
var result = await api.handphone({ url: 'https://downloader.rizfurr.ml', fullpage: true })
console.log(result)
})()
```

### Result 

<img src="https://file.rizfurr.ml/file/mpcgKzMdAUtuCOQFsTMg.png"></img>



### Result JSON
```js
{
  status: 200,
  creator: 'RizFurr',
  result: 'https://file.rizfurr.ml/file/mpcgKzMdAUtuCOQFsTMg.png'
}
```


