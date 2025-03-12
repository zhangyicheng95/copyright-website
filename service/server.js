const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;

// CORS配置
const corsOptions = {
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'null', '*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    maxAge: 86400,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('html')); // 提供静态文件服务

// 模拟数据
const mockData = {
    copyright: {
        title: '版权保护指南',
        description: '版权是指作者对其创作的作品享有的专有权利。',
        items: [
            {
                id: 1,
                title: '音乐作品版权',
                content: '音乐作品的版权保护包括词曲创作、录音制作、现场表演等多个方面。保护期限为作者死后50年。',
                date: '2024-03-20',
                status: '有效'
            },
            {
                id: 2,
                title: '文学作品版权',
                content: '文学作品版权涵盖小说、诗歌、散文等书面创作，未经授权不得转载或改编。',
                date: '2024-03-19',
                status: '有效'
            },
            {
                id: 3,
                title: '影视作品版权',
                content: '影视作品的版权包括剧本、导演、制片等多个环节的创作权利。',
                date: '2024-03-18',
                status: '审核中'
            }
        ]
    },
    services: {
        title: '我们的服务',
        description: '我们提供全方位的版权保护服务',
        services: [
            {
                id: 1,
                name: '版权登记',
                description: '提供快速、专业的版权登记服务',
                price: '￥1000起',
                duration: '5-7个工作日'
            },
            {
                id: 2,
                name: '版权维权',
                description: '提供法律咨询和维权支持',
                price: '￥5000起',
                duration: '具体视情况而定'
            },
            {
                id: 3,
                name: '版权监测',
                description: '7*24小时在线监测侵权行为',
                price: '￥2000/月',
                duration: '长期服务'
            }
        ]
    },
    contact: {
        title: '联系方式',
        description: '我们随时为您服务',
        locations: [
            {
                city: '北京总部',
                address: '北京市朝阳区xxx街xxx号',
                tel: '010-12345678',
                email: 'beijing@copyright.com'
            },
            {
                city: '上海分部',
                address: '上海市浦东新区xxx路xxx号',
                tel: '021-87654321',
                email: 'shanghai@copyright.com'
            }
        ],
        socialMedia: {
            weixin: 'copyright_official',
            weibo: '@版权保护中心'
        }
    }
};

// API路由
app.get('/api/:type', (req, res) => {
    const type = req.params.type;
    if (mockData[type]) {
        res.json(mockData[type]);
    } else {
        res.status(404).json({ error: '未找到请求的数据' });
    }
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: '服务器内部错误',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 