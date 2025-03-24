import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col, Card, List, Tabs } from 'antd';
import styles from './index.less';
import { useNavigate } from 'react-router-dom';
import zhengfulogo from '@/assets/images/red.png'
import { getGovNews } from '@/services/api';

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
                        url: 'https://news.cyol.com/gb/articles/2025-03/18/content_qb6p2XIpdL.html'
                    },
                    {
                        title: '习近平：民族的特色，很古朴也很时尚',
                        url: 'https://news.cnr.cn/native/gd/sz/20250318/t20250318_527104771.shtml'
                    }
                ]
            },
            {
                title: '国务院',
                url: 'https://www.xinhuanet.com/',
                content: [
                    {
                        title: '国务院关于涉外知识产权纠纷处理的规定（全文）',
                        url: 'https://news.qq.com/rain/a/20250319A07GPY00'
                    },
                    {
                        title: '中办国办关于进一步强化食品安全全链条监管的意见',
                        url: 'https://news.ifeng.com/c/8hr3Mvu2bu2'
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
        title: '习近平在贵州考察时强调，坚持以高质量发展统揽全局，在中国式现代化进程中展现贵州新风采。',
        url: 'https://www.news.cn/politics/leaders/20250322/1c9953ab30b044a4a91ab5f2a5aa07b6/c.html'
    });
    const [firstCarouselData, setFirstCarouselData] = useState([
        {
            id: 1,
            title: '习近平在贵州考察',
            image: 'https://www.nppa.gov.cn/xxfb/tpxw/202503/W020250319360580460711.jpg',
            url: 'https://www.news.cn/politics/leaders/20250322/1c9953ab30b044a4a91ab5f2a5aa07b6/c.html',
            description: '习近平在贵州考察时强调，坚持以高质量发展统揽全局，在中国式现代化进程中展现贵州新风采。'
        },
        {
            id: 2,
            title: '十四届全国人大三次会议在京闭幕',
            image: 'https://www.ncac.gov.cn/xxfb/tpxw/202503/W020250312568565871259.jpg',
            url: 'https://www.xinhuanet.com/politics/20250311/de2139ee251541b786dd3a9dfb16e399/c.html',
            description: '十四届全国人大三次会议在京闭幕，批准政府工作报告、全国人大常委会工作报告等，通过关于修改代表法的决定　习近平签署主席令予以公布，习近平李强王沪宁蔡奇丁薛祥李希韩正等在主席台就座。'
        },
        {
            id: 2,
            title: '全国政协十四届三次会议在北京闭幕',
            image: 'https://www.ncac.gov.cn/xxfb/tpxw/202503/W020250311397879799822.jpg',
            url: 'https://www.news.cn/politics/20250310/212740fa626a4f2d8aa2c9e602117d24/c.html',
            description: '3月10日上午，中国人民政治协商会议第十四届全国委员会第三次会议在北京人民大会堂闭幕。这是习近平、李强、蔡奇、丁薛祥、李希、韩正在主席台就座。'
        },
    ]);
    const [govActiveKey, setGovActiveKey] = useState('1');
    const [govNewsData, setGovNewsData] = useState();
    const getGovNewsData = (key: string) => {
        getGovNews({ type: key }).then((res: any) => {
            setGovNewsData(res.data?.slice(0, 6));
            setGovActiveKey(key);
        })
    };
    useEffect(() => {
        getGovNewsData(govActiveKey);
    }, []);
    const onGovChange = (key: string) => {
        getGovNewsData(key);
    }

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
                                activeKey={govActiveKey}
                                onChange={(key) => {
                                    onGovChange(key);
                                }}
                                items={[
                                    { key: '1', label: '政务要闻', children: <NewsList data={govNewsData} /> },
                                    { key: '2', label: '公示公告', children: <NewsList data={govNewsData} /> },
                                    { key: '3', label: '本地动态', children: <NewsList data={govNewsData} /> },
                                    { key: '4', label: '媒体聚焦', children: <NewsList data={govNewsData} /> }
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
                                        // {
                                        //     image: 'https://www.huaibei.gov.cn/group1/M00/06/39/CqET9GYLZoSAJ1vkAAEXW6ctid0981.png',
                                        //     title: 'banner4'
                                        // },
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
                                        <span className="text-blue">版权</span>
                                        <span className="text-red">看</span>
                                    </h3>
                                </div>

                                <div className="info-category">
                                    <h4 className="category-title">政府信息公开</h4>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <i className="icon compass" style={{ width: 32, marginRight: 8 }} />
                                            <span>版权纠纷调解</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-text" />
                                            <span>专家鉴定委员会</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-done" />
                                            <span>陕西省版权公共服务平台</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon calendar" />
                                            <span>知识产权保护智能工具系列介绍</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon form" />
                                            <span>互联网知识产权电子证据存证平台</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon folder" />
                                            <span>文创产业原创版权备案平台</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 政府文件 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '政府文件', children: <NewsFileList data={govNewsData} /> },
                                        { key: '2', label: '政府会议', children: <NewsFileList data={govNewsData} /> },
                                        { key: '3', label: '政策解读', children: <NewsFileList data={govNewsData} /> },
                                        { key: '4', label: '简明问答', children: <NewsFileList data={govNewsData} /> }
                                    ]}
                                />
                            </div>
                            <div className="image-carousel">
                                <div className="gov-info-section">
                                    <div className="section-header">
                                        <h3 className="title">
                                            <span className="text-blue">友情链接</span>
                                        </h3>
                                    </div>
                                    <div className="info-category">
                                        <div className="info-grid">
                                            <div className="info-item" onClick={() => window.open('http://www.nrta.gov.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>国家广播电视总局</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.ncac.gov.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>国家版权局</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.ccopyright.com.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国版权保护中心</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.csccn.org.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国版权协会</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.mcsc.com.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国音乐著作权协会</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.icsc1839.org.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国摄影著作权协会</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.cfca-c.org/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国电影著作权协会</span>
                                            </div>
                                            <div className="info-item" onClick={() => window.open('http://www.prccopyright.org.cn/', '_blank')}>
                                                <i className="icon file-text" />
                                                <span>中国文字著作权协会</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col span={10}>
                        {/* 右侧列内容 Col span={8} 部分 */}
                        <div className="right-section">
                            {/* 版权办标题 */}
                            <div className="section-header">
                                <h3 className="title">
                                    <span className="text-blue">版权</span>
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
                                        // { key: '3', label: '部门办事', children: <ServiceList type="local" /> },
                                        { key: '4', label: '热点服务', children: <ServiceList type="media" /> }
                                    ]}
                                />
                            </div>

                            {/* 陕事通办平台 */}
                            <div className="flex-box platform-section">
                                <div className="platform-banner">
                                    <img src={zhengfulogo} alt="陕事通办" />
                                    <div className="platform-info">
                                        <h4>全国一体化在线政务服务平台</h4>
                                        <h3>陕事通办 | 陕西省</h3>
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
                                        // { key: '3', label: '阳关政务', children: <MinServiceList type="local" /> },
                                        { key: '4', label: '营商服务', children: <MinServiceList type="media" /> }
                                    ]}
                                />
                            </div>
                            {/* 关怀看 */}
                            <div className="gov-info-section">
                                <div className="section-header">
                                    <h3 className="title">
                                        <span className="text-blue">版权</span>
                                        <span className="text-red">问</span>
                                    </h3>
                                </div>

                                <div className="info-category">
                                    <div className='flex-box info-category-right'>
                                        <img src={zhengfulogo} alt="" />
                                        <div className='flex-box-center info-category-right-text'>
                                            <div className='info-category-right-text-title'>陕西省版权公共服务平台</div>
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
                                            <span>版权纠纷调解</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-text" />
                                            <span>专家鉴定委员会</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="icon file-done" />
                                            <span>知识产权保护智能工具</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 市长信箱 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '市长信箱', children: <NewsMailList data={govNewsData} /> },
                                        { key: '2', label: '12345热线', children: <NewsMailList data={govNewsData} /> },
                                        { key: '3', label: '政务新媒体', children: <NewsMailList data={govNewsData} /> },
                                    ]}
                                />
                            </div>
                            {/* 征集调查 */}
                            <div className="gov-news">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        { key: '1', label: '征集调查', children: <NewsSearchList data={govNewsData} /> },
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
const NewsList: React.FC<{ data: any }> = ({ data }) => {
    const navigate = useNavigate();
    return (
        <List
            className="news-list"
            size="small"
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item className='flex-box-justify-between' onClick={() => navigate(`/detial/?newsType=${item.id}`)}>
                    <a>· {item.title}</a>
                    <a>{item.time}</a>
                </List.Item>
            )}
        />
    );
};
// 政府文件
const NewsFileList: React.FC<{ data: any }> = ({ data }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={data}
            renderItem={(item: any) => (
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
                <img src="icons/service-1.png" alt="入会须知" />
            </div>
            <span>入会须知</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-2.png" alt="版权登记" />
            </div>
            <span>版权登记</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-3.png" alt="版权维权" />
            </div>
            <span>版权维权</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-4.png" alt="版权评估" />
            </div>
            <span>版权评估</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-5.png" alt="版权交易" />
            </div>
            <span>版权交易</span>
        </div>
        <div className="service-item">
            <div className="icon-wrapper">
                <img src="icons/service-6.png" alt="版权质押" />
            </div>
            <span>版权质押</span>
        </div>
    </div>;
};
// 民生领域服务
const MinServiceList: React.FC<{ type: string }> = ({ type }) => {
    return <div className="min-service-grid">
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-1.png" alt="版权申请" />
            </div>
            <span>版权申请</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-2.png" alt="版权登记" />
            </div>
            <span>版权登记</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-3.png" alt="版权服务" />
            </div>
            <span>版权服务</span>
        </div>
        <div className="min-service-item">
            <div className="icon-wrapper">
                <img src="icons/min-4.png" alt="版权服务" />
            </div>
            <span>版权服务</span>
        </div>
    </div>;
};
// 市长信箱
const NewsMailList: React.FC<{ data: any }> = ({ data }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item className='flex-box-justify-between'>
                    <a href="#">· {item.title}</a>
                    <a href="#">{item.time}</a>
                </List.Item>
            )}
        />
    );
};
// 征集调查
const NewsSearchList: React.FC<{ data: any }> = ({ data }) => {
    return (
        <List
            className="news-list"
            size="small"
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item className='flex-box-justify-between'>
                    <a href="#">· {item.title}</a>
                    <a href="#">{item.time}</a>
                </List.Item>
            )}
        />
    );
};

export default Home;
