import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { List, Pagination } from 'antd';
import styles from './index.less';
import { GetQueryObj } from '@/utils/utils';

const menuItems = [
    { title: '领导活动', key: 'leadership' },
    { title: '政务要闻', key: 'government' },
    { title: '重要转载', key: 'important' },
    { title: '本地动态', key: 'local' },
    { title: '媒体聚焦', key: 'media' },
    { title: '图片新闻', key: 'photos' },
    { title: '公示公告', key: 'notice' },
    { title: '专题专栏', key: 'special' }
];

const Detial: React.FC = () => {
    const params: any = !!location.search
        ? GetQueryObj(location.search)
        : !!location.href
            ? GetQueryObj(location.href)
            : {};
    const newsType = params?.newsType;
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<string>(params.type || menuItems[0].key);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15; // 每页显示15条数据

    // 根据点击的类型，获取相应数据
    useEffect(() => {
        console.log(newsType);
    }, [newsType]);

    // 模拟更多的新闻数据
    const newsDataMap = {
        leadership: Array(45).fill(null).map((_, index) => ({
            id: `/${index + 1}`,
            title: `市人大常委会机关举行第${index + 1}次秘书学习会`,
            date: '2025-03-20',
            url: `/${index + 1}`
        })),
        government: Array(30).fill(null).map((_, index) => ({
            id: `/gov/${index + 1}`,
            title: `我市召开2025年第${index + 1}次重点项目建设推进会`,
            date: '2025-03-20',
            url: `/gov/${index + 1}`
        })),
        // ... 其他类型的新闻数据
    };

    // 获取当前选中菜单的标题
    const currentMenuTitle = useMemo(() => {
        return menuItems.find(item => item.key === activeMenu)?.title || '';
    }, [activeMenu]);

    // 获取当前页的新闻列表
    const currentNewsList = useMemo(() => {
        const allNews = newsDataMap[activeMenu as keyof typeof newsDataMap] || [];
        const startIndex = (currentPage - 1) * pageSize;
        return allNews.slice(startIndex, startIndex + pageSize);
    }, [activeMenu, currentPage]);

    // 获取总数据条数
    const total = useMemo(() => {
        return newsDataMap[activeMenu as keyof typeof newsDataMap]?.length || 0;
    }, [activeMenu]);

    const handleMenuClick = (key: string) => {
        setActiveMenu(key);
        setCurrentPage(1); // 切换菜单时重置页码
    };

    const handleNewsClick = (id: string) => {
        window.open(`${window.location.origin}${window.location.pathname}#/detialInfo/?newsType=${newsType}&type=${activeMenu}&id=${id}`, '_blank');
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={`commonPageStyle ${styles.detialContainer}`}>
            <div className="detialLeft">
                <div className="detialLeftTitle">
                    新闻中心
                </div>
                <ul className="menuList">
                    {menuItems.map(item => (
                        <li
                            key={item.key}
                            className={`menuItem ${activeMenu === item.key ? 'active' : ''}`}
                            onClick={() => handleMenuClick(item.key)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="detialRight">
                <div className="newsTitle">
                    <i className="titleIcon"></i>
                    {currentMenuTitle}
                </div>
                <List
                    className="newsList"
                    dataSource={currentNewsList}
                    renderItem={item => (
                        <List.Item
                            className="newsItem"
                        >
                            <div className="newsContent">
                                <span className="newsPoint">•</span>
                                <a
                                    rel="noopener noreferrer"
                                    className="newsText"
                                    onClick={() => handleNewsClick(item.id)}
                                >
                                    {item.title}
                                </a>
                            </div>
                            <span className="newsDate">{item.date}</span>
                        </List.Item>
                    )}
                />
                <div className="paginationWrapper">
                    <Pagination
                        current={currentPage}
                        total={total}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                        showQuickJumper
                        showSizeChanger={false}
                        showTotal={(total, range) => (
                            <>
                                共{Math.ceil(total / pageSize)}页
                            </>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Detial;
