import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { List, Pagination } from 'antd';
import styles from './index.less';
import { GetQueryObj } from '@/utils/utils';
import { getNewsList } from '@/services/api';

const menuItems = [
    { title: '头条信息', key: 'topinfo' },
    { title: '要闻信息', key: 'important' },
    { title: '业界动态', key: 'industry' },
    // { title: '图片新闻', key: 'photos' },
    // { title: '视频新闻', key: 'videos' },
    { title: '通知公告', key: 'notice' },
    { title: '法律法规', key: 'laws' },
    { title: '专题专栏', key: 'special' },
    { title: '信息公开', key: 'public' }
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
    const [newsDataMap, setNewsDataMap] = useState<any>([]);
    const pageSize = 15; // 每页显示15条数据

    // 根据点击的类型，获取相应数据
    // 模拟更多的新闻数据
    useEffect(() => {
        getNewsList({ type: activeMenu }).then((res: any) => {
            setNewsDataMap(res.data.list);
            window.scrollTo(0, 0);
        });
    }, []);

    // 获取当前选中菜单的标题
    const currentMenuTitle = useMemo(() => {
        return menuItems.find(item => item.key === activeMenu)?.title || '';
    }, [activeMenu]);

    // 获取当前页的新闻列表
    const currentNewsList = useMemo(() => {
        const allNews = newsDataMap || [];
        const startIndex = (currentPage - 1) * pageSize;
        return allNews.slice(startIndex, startIndex + pageSize);
    }, [newsDataMap, activeMenu, currentPage]);

    // 获取总数据条数
    const total = useMemo(() => {
        return newsDataMap[activeMenu as keyof typeof newsDataMap]?.length || 0;
    }, [newsDataMap, activeMenu]);

    const handleMenuClick = (key: string) => {
        getNewsList({ type: key }).then((res: any) => {
            setNewsDataMap(res.data.list);
            setActiveMenu(key);
            setCurrentPage(1); // 切换菜单时重置页码
        });
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
                    renderItem={(item: any) => (
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
