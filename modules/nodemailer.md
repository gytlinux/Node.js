# nodemailer module

### Install 

```
npm install nodemailer [ -g |--save ]
```

### Use

```
const nodemailer = require('nodemailer');

// 开启一个 SMTP 连接池
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',  //163: smtp.163.com
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'xxxxxxxxx@qq.com',
        pass: 'xxx' // QQ邮箱需要使用授权码
    }
});

// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
    from: '"xxx" <xxxxxxxxx@qq.com>', // 发件人
    to: 'xx1@qq.com, xx2@qq.com', // 收件人
    subject: 'Hello ', // 主题
    text: '这是一封来自 Node.js 的测试邮件', // plain text body
    html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
 
   // 下面是发送附件，不需要就注释掉
    attachments: [{
            filename: 'test.md',
            path: './test.md'
        },
        {
            filename: 'content',
            content: '发送内容'
        }
    ]
};

例：
 attachments: [
        {   // 以字符串，做为文件正文内容 
            filename: 'text1.txt',
            content: 'hello world!'
        },
        {   // binary buffer as an attachment 
            filename: 'text2.txt',
            content: new Buffer('hello world!','utf-8')
        },
        {   // file on disk as an attachment 
            filename: 'text3.txt',
            path: '/path/to/file.txt' // stream this file 
        },
        {   // filename and content type is derived from path 
            path: '/path/to/file.txt'
        },
        {   // stream as an attachment 
            filename: 'text4.txt',
            content: fs.createReadStream('file.txt')
        },
        {   // define custom content type for the attachment 
            filename: 'text.bin',
            content: 'hello world!',
            contentType: 'text/plain'
        },
        {   // use URL as an attachment 
            filename: 'license.txt',
            path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
        },
        {   // encoded string as an attachment 
            filename: 'text1.txt',
            content: 'aGVsbG8gd29ybGQh',
            encoding: 'base64'
        },
        {   // data uri as an attachment 
            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        }
    ]

//发HTML格式内容，并嵌入图片
//Nodemailer也为我们提供了在HTML的正文中嵌入图片的功能，程序中只要配置cid，作为图片的唯一引用地址就行了。上传本地图片./img/r-book1.png，设置cid为00000001，然后在html的正文中，img标签src属性指向00000001的cid就行了。

var mailOptions = {
    from: 'bsspirit ',
    to: 'xxxxx@163.com',
    subject: 'Embedded Image',
    html: '<b>Hello world ✔</b><br/>Embedded image: <img src="cid:00000001"/>',
    attachments: [{
        filename: '01.png',
        path: './img/r-book1.png',
        cid: '00000001'
    }]
}


// 使用先前创建的传输器的 sendMail 方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(`Message: ${info.messageId}`);
    console.log(`sent: ${info.response}`);
});
```

**注意**

* 需要开启邮箱的POP3/SMTP服务

* QQ邮箱需要使用授权码，163邮箱直接使用163邮箱密码

