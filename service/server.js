import express from 'express';
import cors from 'cors';
import db from './db/database.js';
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

// API路由
app.get('/api/:type', async (req, res) => {
    try {
        const type = req.params.type;
        let data = {};

        switch (type) {
            case 'copyright':
                const items = await db.getAllCopyrights();
                data = {
                    title: '版权登记查询',
                    description: '根据《中华人民共和国著作权法》规定，作品自创作完成之日起，作者即依法享有著作权。版权登记是对著作权的一种行政确认。',
                    items: items
                };
                break;

            case 'services':
                const services = await db.getAllServices();
                data = {
                    title: '我们的服务',
                    description: '我们提供全方位的版权保护服务',
                    services: services
                };
                break;

            case 'contact':
                const locations = await db.getAllContacts();
                data = {
                    title: '联系方式',
                    description: '我们随时为您服务',
                    locations: locations,
                    socialMedia: {
                        weixin: 'copyright_official',
                        weibo: '@版权保护中心'
                    }
                };
                break;

            default:
                return res.status(404).json({ error: '未找到请求的数据' });
        }

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: '服务器内部错误', message: err.message });
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

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// 优雅退出
process.on('SIGINT', async () => {
    try {
        await db.close();
        console.log('数据库连接已关闭');
        process.exit(0);
    } catch (err) {
        console.error('关闭数据库时出错:', err);
        process.exit(1);
    }
}); 