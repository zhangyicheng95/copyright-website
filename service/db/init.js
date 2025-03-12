import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 创建数据库连接
const db = new Database(join(__dirname, 'copyright.db'), { verbose: console.log });
console.log('成功连接到数据库');

// 初始化数据库表
function initDatabase() {
    try {
        // 创建版权表
        db.exec(`
            CREATE TABLE IF NOT EXISTS copyrights (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                regNum TEXT NOT NULL UNIQUE,
                content TEXT,
                date TEXT,
                status TEXT,
                type TEXT,
                owner TEXT,
                creationYear INTEGER,
                protectionPeriod TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // 创建服务表
        db.exec(`
            CREATE TABLE IF NOT EXISTS services (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                price TEXT,
                duration TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // 创建联系方式表
        db.exec(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                city TEXT NOT NULL,
                address TEXT,
                tel TEXT,
                email TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // 插入示例数据
        insertSampleData();
    } catch (err) {
        console.error('初始化数据库失败:', err);
        process.exit(1);
    }
}

// 插入示例数据
function insertSampleData() {
    try {
        const insertCopyright = db.prepare(`
            INSERT OR IGNORE INTO copyrights (
                title, regNum, content, date, status, type, owner, creationYear, protectionPeriod
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const insertService = db.prepare(`
            INSERT OR IGNORE INTO services (name, description, price, duration)
            VALUES (?, ?, ?, ?)
        `);

        const insertContact = db.prepare(`
            INSERT OR IGNORE INTO contacts (city, address, tel, email)
            VALUES (?, ?, ?, ?)
        `);

        // 开始事务
        const transaction = db.transaction(() => {
            // 插入版权数据
            const types = ['音乐', '文学', '影视', '软件', '美术', '摄影', '建筑', '戏剧', '曲艺', '舞蹈'];
            const statuses = ['有效', '审核中', '已过期', '待续期'];
            const owners = [
                '北京文化传媒有限公司',
                '上海艺术发展集团',
                '广州创意设计工作室',
                '深圳数字科技有限公司',
                '杭州影视制作中心'
            ];

            // 生成50条版权记录
            for (let i = 1; i <= 50; i++) {
                const type = types[Math.floor(Math.random() * types.length)];
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                const owner = owners[Math.floor(Math.random() * owners.length)];
                const year = 2024 - Math.floor(Math.random() * 3);
                const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
                const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
                const regNum = `版权${year}${month}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}号`;
                const creationYear = year - Math.floor(Math.random() * 5);

                insertCopyright.run(
                    `${type}作品版权`,
                    regNum,
                    `该${type}作品版权已依法登记，受《中华人民共和国著作权法》保护。包括复制权、发行权、表演权等权利。`,
                    `${year}-${month}-${day}`,
                    status,
                    type,
                    owner,
                    creationYear,
                    `${creationYear + 50}年12月31日止`
                );
            }

            // 插入服务数据
            const services = [
                ['版权登记', '提供快速、专业的版权登记服务', '￥1000起', '5-7个工作日'],
                ['版权维权', '提供法律咨询和维权支持', '￥5000起', '具体视情况而定'],
                ['版权监测', '7*24小时在线监测侵权行为', '￥2000/月', '长期服务']
            ];

            services.forEach(service => {
                insertService.run(...service);
            });

            // 插入联系方式数据
            const contacts = [
                ['北京总部', '北京市朝阳区xxx街xxx号', '010-12345678', 'beijing@copyright.com'],
                ['上海分部', '上海市浦东新区xxx路xxx号', '021-87654321', 'shanghai@copyright.com']
            ];

            contacts.forEach(contact => {
                insertContact.run(...contact);
            });
        });

        // 执行事务
        transaction();
        console.log('示例数据插入成功');
    } catch (err) {
        console.error('插入示例数据失败:', err);
        process.exit(1);
    }
}

// 初始化数据库
initDatabase();

// 关闭数据库连接
process.on('SIGINT', () => {
    try {
        db.close();
        console.log('数据库连接已关闭');
        process.exit(0);
    } catch (err) {
        console.error('关闭数据库时出错:', err);
        process.exit(1);
    }
}); 