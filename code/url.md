# NodeJS - url

解析URL、生成URL，以及拼接URL。

* **url.parse(url)** :将URL字符串转换为URL对象

```
> url.parse('http://gytlinux.com:80/test/u/a?query=string#hash')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'gytlinux.com:80',
  port: '80',
  hostname: 'gytlinux.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/test/u/a',
  path: '/test/u/a?query=string',
  href: 'http://gytlinux.com:80/test/u/a?query=string#hash' }


```

* **url.format(url-object)** :将一个URL对象转换为URL字符串

* **url.resolve()** :拼接URL


