# 使用说明

## 目录结构

monit:

 \>monit.js  #启动运行

 \>explain.md #相关说明

 \>package.json 

 \>package-lock.json

 \>config:

  ...\>config.js #email设置

 \>modules    

 ...\>sys.js  #系统数据获取

 ...\>email.js  #邮件发送

 \>node_modules:
  
  ...


## 启动运行

```
node monit.js
```

## email设置

```
emailconf = {
        host: 'smtp.qq.com',  #邮件服务器，163：smtp.163.com
        user: 'xxx@qq.com', #设置发送邮箱
        pass: 'xxxxxxxxxx',   #授权码
        from: 'xxx@qq.com', #同user
          to: 'xxxxxx@xx.com',   #设置接收邮箱
};
```
