
#req获取客户端真实IP

```
req.ip || req.connection.remoteAddress

nginx反向代理

req.headers['x-real-ip'] || req.headers['x-forwarded-for']
req.get('X-Real-IP') || req.get('X-Forwarded-For')

```
