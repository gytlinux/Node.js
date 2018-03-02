# 使用说明

## 目录结构

monit:

 \>monit.js  #启动运行

 \>explain.md #相关说明

 \>package.json 

 \>package-lock.json

 \>sshkey.sh #ssh-key,传送ssh密钥，免密登陆脚本

 \>config:
 
 ...\>config.js #email设置

 \>modules    
 
 ...\>sys.js  #远程服务器数据获取

 ...\>req.js #网站访问测试

 ...\>email.js  #邮件发送

 \>node_modules:
  
  ...


## 启动运行

```
node monit.js
```

## config/config.js

* 统一登陆账户

```
user = '' #为保安全无需设置sudo权限
passwd = ''
```

* 监控服务器ip


```
ip = ['0.0.0.0',
      '0.0.0.0',
      '0.0.0.0',
      '0.0.0.0',
      '0.0.0.0']

```

* 测试网站

```
web = ['www.baidu.com',
       'www.github.com']
```

* email设置

```
emailconf = {
        host: 'smtp.qq.com',  #邮件服务器，163：smtp.163.com
        user: 'xxx@qq.com', #设置发送邮箱
        pass: 'xxxxxxxxxxx',   #授权码
        from: 'xxx@qq.com', #同user
          to: 'xxx@xx.com',   #设置接收邮箱
};
```

* 定时设置

同bash的corntab,(秒 分 时 日 月 周) 建议如监控服务器较多，时间间隔相应放缓，否则因使用ssh连接会大量占用被监控的服务器的cpu资源

```
crontab = '*/5 * * * * *'

```

**如当前用户不是root，请编辑sshkey.sh脚本设置用户家目录**
