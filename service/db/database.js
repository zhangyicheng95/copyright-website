import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

class CopyrightDB {
    constructor() {
        try {
            this.db = new Database(join(__dirname, 'copyright.db'), { verbose: console.log });
            console.log('成功连接到数据库');
        } catch (err) {
            console.error('数据库连接失败:', err);
            throw err;
        }
    }

    // 获取所有版权信息
    getAllCopyrights() {
        try {
            const stmt = this.db.prepare('SELECT * FROM copyrights ORDER BY date DESC');
            return stmt.all();
        } catch (err) {
            console.error('获取版权信息失败:', err);
            throw err;
        }
    }

    // 获取所有服务信息
    getAllServices() {
        try {
            const stmt = this.db.prepare('SELECT * FROM services');
            return stmt.all();
        } catch (err) {
            console.error('获取服务信息失败:', err);
            throw err;
        }
    }

    // 获取所有联系方式
    getAllContacts() {
        try {
            const stmt = this.db.prepare('SELECT * FROM contacts');
            return stmt.all();
        } catch (err) {
            console.error('获取联系方式失败:', err);
            throw err;
        }
    }

    // 关闭数据库连接
    close() {
        try {
            this.db.close();
            console.log('数据库连接已关闭');
        } catch (err) {
            console.error('关闭数据库失败:', err);
            throw err;
        }
    }
}

export default new CopyrightDB(); 