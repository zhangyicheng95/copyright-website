import React, { useState } from 'react';
import { Carousel, Row, Col, Card, List, Tabs } from 'antd';
import styles from './index.less';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [headerData, setHeaderData] = useState({
        title: '习近平在贵州考察时强调：坚持以高质量发展统揽全局 在中国式现代化进程中展现贵州新风采',
        url: 'https://www.xinhuanet.com/',
        content: [
            {
                title: '党中央',
                url: 'https://www.xinhuanet.com/',
                content: [
                    {
                        title: '习近平在贵州黔东南州考察调研',
                        url: 'https://www.xinhuanet.com/'
                    },
                    {
                        title: '习近平：民族的特色，很古朴也很时尚',
                        url: 'https://www.xinhuanet.com/'
                    }
                ]
            },
            {
                title: '国务院',
                url: 'https://www.xinhuanet.com/',
                content: [
                    {
                        title: '国务院关于涉外知识产权纠纷处理的规定（全文）',
                        url: 'https://www.xinhuanet.com/'
                    },
                    {
                        title: '中办国办关于进一步强化食品安全全链条监管的意见',
                        url: 'https://www.xinhuanet.com/'
                    }
                ]
            },
            {
                title: '省政府',
                url: 'https://www.xinhuanet.com/',
                content: [
                    {
                        title: '加强陕浙全方位交流合作 合力塑造发展新动能新优势',
                        url: 'https://www.xinhuanet.com/'
                    },
                    {
                        title: '学习先进经验深化陕苏合作 携手谱写共赢发展的新篇章',
                        url: 'https://www.xinhuanet.com/'
                    }
                ]
            }
        ]
    });
    const [hotTipData, setHotTipData] = useState({
        title: '汪华东在濉溪县调研并宣讲全国两会精神时强调 扎实抓好"三农"工作',
        url: 'https://www.xinhuanet.com/'
    });
    const [firstCarouselData, setFirstCarouselData] = useState([
        {
            id: 1,
            title: '蒋曦会见上海安徽商会会长洪清华一行',
            image: 'https://www.huaibei.gov.cn/group1/M00/10/C1/CqET9GfauWSAGFZzAAaib4S804I839.jpg',
            url: 'https://www.xinhuanet.com/',
            description: '3月15日上午，市委书记汪华东前往濉溪县百善镇，宣讲全国两会精神，并调研乡村振兴工作。'
        },
        {
            id: 2,
            title: '汪华东在濉溪县调研并宣讲全国两会精神',
            image: 'https://www.huaibei.gov.cn/group1/M00/0F/EB/CqET9GfS7F6AdNyzAAWp2S1mNHo552.jpg',
            url: 'https://www.xinhuanet.com/',
            description: '3月15日上午，市委书记汪华东前往濉溪县百善镇，宣讲全国两会精神，并调研乡村振兴工作。'
        },
    ]);

    return (
        <div className={`commonPageStyle ${styles.homeContainer}`}>
            {/* 添加顶部大标题新闻 */}
            <div className="top-news">
                <h1 className="main-title" onClick={() => window.open(headerData.url, '_blank')}>
                    {headerData.title}
                </h1>
                <div className="news-categories">
                    {headerData.content.map((item: any, index: number) => (
                        <div className="category-item party" key={index}>
                            <div
                                className="category-title"
                                onClick={() => window.open(item.url, '_blank')}
                            >{item.title}</div>
                            <div className="category-content">
                                {item.content.map((item: any, index: number) => (
                                    <a href={item.url} target='_blank' key={index}>{item.title}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="main-content">
                <Row gutter={24}>
                    <Col span={14}>
                        <div className="carousel-section">
                            {/* 添加头条标签 */}
                            <div className="headline-tag">
                                <div className="tag-icon">头条</div>
                                <div className="headline-title" onClick={() => window.open(hotTipData.url, '_blank')}>
                                    {hotTipData.title}
                                </div>
                            </div>

                            {/* 轮播图部分 */}
                            <Carousel autoplay effect="fade" arrows>
                                {firstCarouselData.map(item => (
                                    <div className="carousel-item" key={item.id}>
                                        <div className="carousel-content">
                                            <img src={item.image} alt={item.title} />
                                            <div className="carousel-text">
                                                <h3 onClick={() => window.open(item.url, '_blank')}>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        {/* 政务动态区域 */}
                        <div className="gov-news">
                            <Tabs
                                defaultActiveKey="1"
                                items={[
                                    { key: '1', label: '政务要闻', children: <NewsList type="govNews" /> },
                                    { key: '2', label: '公示公告', children: <NewsList type="notice" /> },
                                    { key: '3', label: '本地动态', children: <NewsList type="local" /> },
                                    { key: '4', label: '媒体聚焦', children: <NewsList type="media" /> }
                                ]}
                            />
                        </div>

                        {/* 在政务动态区域下方添加 */}
                        <div className="image-carousel">
                            <Carousel autoplay effect="fade" arrows>
                                {
                                    [
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/0F/E5/CqET9GfRPmKASvFaAACgy8yjPv4592.png',
                                            title: 'banner1'
                                        },
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/13/2A/CqET9GSQICCAKnd7AADz7VSDY3g736.png',
                                            title: 'banner2'
                                        },
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/04/15/CqET9GWTxqiAPEnoAACG0z-yxKQ829.png',
                                            title: 'banner3'
                                        },
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/06/39/CqET9GYLZoSAJ1vkAAEXW6ctid0981.png',
                                            title: 'banner4'
                                        },
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/13/2A/CqET9GSQH96AKRjeAAD4DVBiuO0104.png',
                                            title: 'banner5'
                                        },
                                        {
                                            image: 'https://www.huaibei.gov.cn/group1/M00/13/2A/CqET9GSQILeAICifAAERbXI6FJY940.png',
                                            title: 'banner6'
                                        }
                                    ].map((item: any, index: number) => (
                                        <div key={index}>
                                            <div className="carousel-banner">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Carousel>
                            {/* 在图片轮播图下方添加政府信息公开模块 */}
                            <div className="gov-info-section">
                                <div className="section-header">
                                    <h3 className="title">
                                        <span className="text-blue">关陕</span>
                                        <span className="text-red">看</span>
                                    </h3>
                                </div>

                                <div className="info-category">
                                    <h4 className="category-title">政府信息公开</h4>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <i className="icon compass" />
                                            <span>政府信息公开指南</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-text" />
                                            <span>政府信息公开制度</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-done" />
                                            <span>法定主动公开内容</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon calendar" />
                                            <span>政府信息公开年报</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon form" />
                                            <span>依申请公开</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon folder" />
                                            <span>政策文件库</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 政府文件 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '政府文件', children: <NewsFileList type="govNews" /> },
                                        { key: '2', label: '政府会议', children: <NewsFileList type="notice" /> },
                                        { key: '3', label: '政策解读', children: <NewsFileList type="local" /> },
                                        { key: '4', label: '简明问答', children: <NewsFileList type="media" /> }
                                    ]}
                                />
                            </div>
                        </div>
                    </Col>

                    <Col span={10}>
                        {/* 右侧列内容 Col span={8} 部分 */}
                        <div className="right-section">
                            {/* 关陕办标题 */}
                            <div className="section-header">
                                <h3 className="title">
                                    <span className="text-blue">关陕</span>
                                    <span className="text-red">办</span>
                                </h3>
                            </div>

                            {/* 办事分类导航 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '个人办事', children: <ServiceList type="govNews" /> },
                                        { key: '2', label: '法人办事', children: <ServiceList type="notice" /> },
                                        { key: '3', label: '部门办事', children: <ServiceList type="local" /> },
                                        { key: '4', label: '热点服务', children: <ServiceList type="media" /> }
                                    ]}
                                />
                            </div>

                            {/* 陕事通办平台 */}
                            <div className="flex-box platform-section">
                                <div className="platform-banner">
                                    <img src="https://www.huaibei.gov.cn/_res/images-new/wst-ico.png" alt="陕事通办" />
                                    <div className="platform-info">
                                        <h4>全国一体化在线政务服务平台</h4>
                                        <h3>陕事通办 | 陕西市</h3>
                                    </div>
                                </div>
                                <div className="stats-info">
                                    <div className="stats-item">
                                        <span>办件统计</span>
                                    </div>
                                </div>
                            </div>
                            {/* 民生领域服务 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '民生领域服务', children: <MinServiceList type="govNews" /> },
                                        { key: '2', label: '集成服务', children: <MinServiceList type="notice" /> },
                                        { key: '3', label: '阳关政务', children: <MinServiceList type="local" /> },
                                        { key: '4', label: '营商服务', children: <MinServiceList type="media" /> }
                                    ]}
                                />
                            </div>
                            {/* 关怀看 */}
                            <div className="gov-info-section">
                                <div className="section-header">
                                    <h3 className="title">
                                        <span className="text-blue">关陕</span>
                                        <span className="text-red">问</span>
                                    </h3>
                                </div>

                                <div className="info-category">
                                    <div className='flex-box info-category-right'>
                                        <img src="https://www.huaibei.gov.cn/group1/M00/13/A0/rBIoG2PwM1WAeSj9AAASiapfltU874.png" alt="" />
                                        <div className='flex-box-center info-category-right-text'>
                                            <div className='info-category-right-text-title'>陕西市12345政务服务便民热线</div>
                                            <div className='flex-box info-category-right-text-content'>
                                                <span>统一受理</span>
                                                <span>统一督办</span>
                                                <span>全流程监督</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <i className="icon compass" />
                                            <span>市长信箱</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-text" />
                                            <span>回应关切</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-done" />
                                            <span>在线访谈</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 市长信箱 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '市长信箱', children: <NewsMailList type="govNews" /> },
                                        { key: '2', label: '12345热线', children: <NewsMailList type="notice" /> },
                                        { key: '3', label: '政务新媒体', children: <NewsMailList type="local" /> },
                                    ]}
                                />
                            </div>
                            {/* 征集调查 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '征集调查', children: <NewsSearchList type="govNews" /> },
                                    ]}
                                />
                            </div>
                            {/* 公益广告 */}
                            <div className="gonyi-box">
                                <Carousel autoplay effect="fade" arrows>
                                    {
                                        [
                                            {
                                                image: 'gongyi/gongyi1.jpg',
                                                title: 'banner1'
                                            },
                                            {
                                                image: 'gongyi/gongyi2.jpg',
                                                title: 'banner2'
                                            },
                                            {
                                                image: 'gongyi/gongyi3.jpg',
                                                title: 'banner3'
                                            },
                                            {
                                                image: 'gongyi/gongyi4.jpg',
                                                title: 'banner4'
                                            },
                                            {
                                                image: 'gongyi/gongyi5.jpg',
                                                title: 'banner5'
                                            },
                                            {
                                                image: 'gongyi/gongyi6.jpg',
                                                title: 'banner6'
                                            },
                                            {
                                                image: 'gongyi/gongyi7.jpg',
                                                title: 'banner7'
                                            },
                                            {
                                                image: 'gongyi/gongyi8.jpg',
                                                title: 'banner8'
                                            },
                                            {
                                                image: 'gongyi/gongyi9.jpg',
                                                title: 'banner9'
                                            },
                                            {
                                                image: 'gongyi/gongyi10.jpg',
                                                title: 'banner10'
                                            }
                                        ].map((item: any, index: number) => (
                                            <div key={index}>
                                                <div className="carousel-banner">
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

// 新闻列表组件
const NewsList: React.FC<{ type: string }> = ({ type }) => {
    const navigate = useNavigate();
    return (
        <List
            className="news-list"
            size="small"
            dataSource={[
                {
                    id: 1,
                    title: '多地推动金融加力支持民营企业发展',
                    time: '2025-03-19'
                },
                {
                    id: 2,
                    title: '保持发展定力 增强发展信心（促进民营经济高质量发展）',
                    time: '2025-03-19'
                },
                {
                    id: 3,
                    title: '“我国消费市场蕴含巨大发展机遇”',
                    time: '2025-03-19'
                }
            ]}
            renderItem={item => (
                <List.Item className='flex-box-justify-between' onClick={() => navigate(`/detial/?newsType=${type}`)}>
                    <a>· {item.title}</a>
                    <a>{item.time}</a>
                </List.Item>
            )}
        />
    );
};
// 政府文件
const NewsFileList: React.FC<{ type: string }> = ({ type }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={[
                {
                    title: '多地推动金融加力支持民营企业发展',
                    time: '2025-03-19'
                },
                {
                    title: '保持发展定力 增强发展信心（促进民营经济高质量发展）',
                    time: '2025-03-19'
                },
                {
                    title: '“我国消费市场蕴含巨大发展机遇”',
                    time: '2025-03-19'
                }
            ]}
            renderItem={item => (
                <List.Item className='flex-box-justify-between'>
                    <a href="#">· {item.title}</a>
                    <a href="#">{item.time}</a>
                </List.Item>
            )}
        />
    );
};
// 办事分类导航
const ServiceList: React.FC<{ type: string }> = ({ type }) => {
    return <div className="service-grid">
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-1.png" alt="就业创业" />
            </div>
            <span>就业创业</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-2.png" alt="抵押质押" />
            </div>
            <span>抵押质押</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-3.png" alt="职业资格" />
            </div>
            <span>职业资格</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-4.png" alt="优待抚恤" />
            </div>
            <span>优待抚恤</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-5.png" alt="规划建设" />
            </div>
            <span>规划建设</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-6.png" alt="证件办理" />
            </div>
            <span>证件办理</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-7.png" alt="交通出行" />
            </div>
            <span>交通出行</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-8.png" alt="旅游观光" />
            </div>
            <span>旅游观光</span>
        </div>
    </div>;
};
// 民生领域服务
const MinServiceList: React.FC<{ type: string }> = ({ type }) => {
    return <div className="min-service-grid">
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-1.png" alt="教育服务" />
            </div>
            <span>教育服务</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-2.png" alt="住房服务" />
            </div>
            <span>住房服务</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-3.png" alt="医疗服务" />
            </div>
            <span>医疗服务</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-4.png" alt="社保服务" />
            </div>
            <span>社保服务</span>
        </div>
    </div>;
};
// 市长信箱
const NewsMailList: React.FC<{ type: string }> = ({ type }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={[
                {
                    title: '多地推动金融加力支持民营企业发展',
                    time: '2025-03-19'
                },
                {
                    title: '保持发展定力 增强发展信心（促进民营经济高质量发展）',
                    time: '2025-03-19'
                },
                {
                    title: '“我国消费市场蕴含巨大发展机遇”',
                    time: '2025-03-19'
                }
            ]}
            renderItem={item => (
                <List.Item className='flex-box-justify-between'>
                    <a href="#">· {item.title}</a>
                    <a href="#">{item.time}</a>
                </List.Item>
            )}
        />
    );
};
// 征集调查
const NewsSearchList: React.FC<{ type: string }> = ({ type }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={[
                {
                    title: '多地推动金融加力支持民营企业发展',
                    time: '2025-03-19'
                },
                {
                    title: '保持发展定力 增强发展信心（促进民营经济高质量发展）',
                    time: '2025-03-19'
                },
                {
                    title: '“我国消费市场蕴含巨大发展机遇”',
                    time: '2025-03-19'
                }
            ]}
            renderItem={item => (
                <List.Item className='flex-box-justify-between'>
                    <a href="#">· {item.title}</a>
                    <a href="#">{item.time}</a>
                </List.Item>
            )}
        />
    );
};

export default Home;
