import { fetchGet } from '@/utils/fetch';
import * as _ from 'lodash-es';

// 获取政府新闻
export async function getGovNews(params: any) {
    return new Promise((resolve, reject) => {
        if (params.type === '1') {
            resolve({
                data: [
                    {
                        id: 1,
                        title: '蔡奇参加社会科学、新闻出版界委员联组会',
                        time: '2025-03-07',
                        url: '/news/1'
                    },
                    {
                        id: 2,
                        title: '李书磊会见日本立宪民主党代表团',
                        time: '2025-03-21',
                        url: '/news/2'
                    },
                    {
                        id: 3,
                        title: '李书磊参加江西代表团审议',
                        time: '2025-03-07',
                        url: '/news/3'
                    },
                    {
                        id: 4,
                        title: '深入开展软件正版化工作 扎实推动高质量发展',
                        time: '2025-03-20',
                        url: '/news/4'
                    },
                    {
                        id: 5,
                        title: '中宣部版权管理局调研组到海南省保亭黎族苗族自治县 调研民间文艺版权保护与促进试点工作',
                        time: '2025-01-22',
                        url: '/news/5'
                    },
                    {
                        id: 6,
                        title: '国家版权局等四部门启动院线电影版权保护专项工作',
                        time: '2025-01-17',
                        url: '/news/6'
                    },
                    {
                        id: 7,
                        title: '国家版权局等部门公布院线电影版权保护专项行动第一批典型案件',
                        time: '2025-03-02',
                        url: '/news/7'
                    },
                    {
                        id: 8,
                        title: '李书磊会见乌兹别克斯坦总统特别顾问乌马穆尔札科夫',
                        time: '2025-02-28',
                        url: '/news/8'
                    },
                    {
                        id: 9,
                        title: '2024年版权执法部门打击侵权盗版取得积极成效',
                        time: '2025-02-12',
                        url: '/news/9'
                    },
                    {
                        id: 10,
                        title: '2025年世界知识产权组织全球奖开始申请',
                        time: '2025-01-16',
                        url: '/news/10'
                    },
                    {
                        id: 11,
                        title: '纪念遵义会议90周年大会在遵义举行 李书磊出席并讲话',
                        time: '2025-01-16',
                        url: '/news/11'
                    },
                    {
                        id: 12,
                        title: '国家京剧院建院70周年座谈会在北京召开',
                        time: '2025-01-13',
                        url: '/news/12'
                    },
                    {
                        id: 13,
                        title: '全国宣传部长会议在京召开 蔡奇出席并讲话',
                        time: '2025-01-06',
                        url: '/news/13'
                    },
                    {
                        id: 14,
                        title: '《习近平文化思想学习纲要》出版座谈会在京召开',
                        time: '2025-01-06',
                        url: '/news/14'
                    },
                    {
                        id: 15,
                        title: '2023年中国版权产业增加值占GDP的7.44%',
                        time: '2024-12-31',
                        url: '/news/15'
                    }
                ]
            });
        } else if (params.type === '2') {
            resolve({
                data: [

                ]
            });
        } else {
            resolve({
                data: [

                ]
            });
        }
    });
};
// 获取新闻列表
export async function getNewsList(params: any) {
    return new Promise((resolve, reject) => {
        if (params.type === 'topinfo') {
            resolve({
                data: {
                    total: 15,
                    list: [
                        {
                            id: 1,
                            title: '习近平：解放思想改革创新奋发进取真抓实干 在中国式现代化进程中开创云南发展新局面',
                            time: '2025-03-21',
                            url: '/news/leader/1'
                        },
                        {
                            id: 2,
                            title: '习近平在贵州考察时强调 坚持以高质量发展统揽全局 在中国式现代化进程中展现贵州新风采',
                            time: '2025-03-19',
                            url: '/news/leader/2'
                        },
                        {
                            id: 3,
                            title: '十四届全国人大三次会议在京闭幕',
                            time: '2025-03-12',
                            url: '/news/leader/3'
                        },
                        {
                            id: 4,
                            title: '全国政协十四届三次会议闭幕 习近平等出席',
                            time: '2025-03-11',
                            url: '/news/leader/4'
                        },
                        {
                            id: 5,
                            title: '十四届全国人大三次会议举行第二次全体会议 习近平等出席',
                            time: '2025-03-10',
                            url: '/news/leader/5'
                        },
                        {
                            id: 6,
                            title: '习近平：强化教育对科技和人才支撑作用 形成人才辈出人尽其才尽其用生动局面',
                            time: '2025-03-07',
                            url: '/news/leader/6'
                        },
                        {
                            id: 7,
                            title: '习近平在参加江苏代表团审议时强调 经济大省要挑大梁 为全国发展大局作贡献',
                            time: '2025-03-06',
                            url: '/news/leader/7'
                        },
                        {
                            id: 8,
                            title: '十四届全国人大三次会议在京开幕 习近平等在主席台就座',
                            time: '2025-03-05',
                            url: '/news/leader/8'
                        },
                        {
                            id: 9,
                            title: '全国政协十四届三次会议在京开幕 习近平等党和国家领导人到会祝贺',
                            time: '2025-03-05',
                            url: '/news/leader/9'
                        },
                        {
                            id: 10,
                            title: '中央政治局委员 书记处书记等向党中央和习近平总书记述职',
                            time: '2025-02-28',
                            url: '/news/leader/10'
                        },
                        {
                            id: 11,
                            title: '《习近平总书记关于加强和改进民族工作的重要思想学习读本》出版发行',
                            time: '2025-02-14',
                            url: '/news/leader/11'
                        },
                        {
                            id: 12,
                            title: '第九届亚洲冬季运动会在哈尔滨隆重开幕 习近平出席开幕式并宣布本届亚冬会开幕',
                            time: '2025-02-08',
                            url: '/news/leader/12'
                        },
                        {
                            id: 13,
                            title: '《求是》杂志发表习近平总书记重要文章 《注重家庭、注重家教、注重家风》',
                            time: '2025-02-05',
                            url: '/news/leader/13'
                        },
                        {
                            id: 14,
                            title: '中央领导同志看望老同志',
                            time: '2025-01-27',
                            url: '/news/leader/14'
                        },
                        {
                            id: 15,
                            title: '习近平春节前夕赴辽宁看望慰问基层干部群众 向全国各族人民致以美好的新春祝福 祝各族人民幸福安康 祝伟大祖国繁荣昌盛',
                            time: '2025-01-26',
                            url: '/news/leader/15'
                        }
                    ]
                }
            });
        } else if (params.type === 'important') {
            resolve({
                data: {
                    total: 15,
                    list: [
                        {
                            id: 1,
                            title: '蔡奇参加社会科学、新闻出版界委员联组会',
                            time: '2025-03-07',
                            url: '/news/1'
                        },
                        {
                            id: 2,
                            title: '李书磊会见日本立宪民主党代表团',
                            time: '2025-03-21',
                            url: '/news/2'
                        },
                        {
                            id: 3,
                            title: '李书磊参加江西代表团审议',
                            time: '2025-03-07',
                            url: '/news/3'
                        },
                        {
                            id: 4,
                            title: '深入开展软件正版化工作 扎实推动高质量发展',
                            time: '2025-03-20',
                            url: '/news/4'
                        },
                        {
                            id: 5,
                            title: '中宣部版权管理局调研组到海南省保亭黎族苗族自治县 调研民间文艺版权保护与促进试点工作',
                            time: '2025-01-22',
                            url: '/news/5'
                        },
                        {
                            id: 6,
                            title: '国家版权局等四部门启动院线电影版权保护专项工作',
                            time: '2025-01-17',
                            url: '/news/6'
                        },
                        {
                            id: 7,
                            title: '国家版权局等部门公布院线电影版权保护专项行动第一批典型案件',
                            time: '2025-03-02',
                            url: '/news/7'
                        },
                        {
                            id: 8,
                            title: '李书磊会见乌兹别克斯坦总统特别顾问乌马穆尔札科夫',
                            time: '2025-02-28',
                            url: '/news/8'
                        },
                        {
                            id: 9,
                            title: '2024年版权执法部门打击侵权盗版取得积极成效',
                            time: '2025-02-12',
                            url: '/news/9'
                        },
                        {
                            id: 10,
                            title: '2025年世界知识产权组织全球奖开始申请',
                            time: '2025-01-16',
                            url: '/news/10'
                        },
                        {
                            id: 11,
                            title: '纪念遵义会议90周年大会在遵义举行 李书磊出席并讲话',
                            time: '2025-01-16',
                            url: '/news/11'
                        },
                        {
                            id: 12,
                            title: '国家京剧院建院70周年座谈会在北京召开',
                            time: '2025-01-13',
                            url: '/news/12'
                        },
                        {
                            id: 13,
                            title: '全国宣传部长会议在京召开 蔡奇出席并讲话',
                            time: '2025-01-06',
                            url: '/news/13'
                        },
                        {
                            id: 14,
                            title: '《习近平文化思想学习纲要》出版座谈会在京召开',
                            time: '2025-01-06',
                            url: '/news/14'
                        },
                        {
                            id: 15,
                            title: '2023年中国版权产业增加值占GDP的7.44%',
                            time: '2024-12-31',
                            url: '/news/15'
                        }
                    ]
                }
            });
        } else if (params.type === 'industry') {
            resolve({
                data: {
                    total: 0,
                    list: [
                        {
                            id: 1,
                            title: '四川省版权局、省文旅厅发布《哪吒2》版权保护公告',
                            date: '2025-02-19',
                            url: '/news/industry/1'
                        },
                        {
                            id: 2,
                            title: '广州市荔湾区民间文艺版权保护与促进成果展开幕 非遗传承人带领畅游岭南文化',
                            date: '2025-02-19',
                            url: '/news/industry/2'
                        },
                        {
                            id: 3,
                            title: '黑龙江省版权局"硬核"助力亚冬会',
                            date: '2025-02-19',
                            url: '/news/industry/3'
                        },
                        {
                            id: 4,
                            title: '安徽出版集团与安徽新华发行集团携手举办版权法律知识技能竞赛——以赛促用强技能 版权宣传全覆盖',
                            date: '2025-02-19',
                            url: '/news/industry/4'
                        },
                        {
                            id: 5,
                            title: '关于征集"2024年中国版权十件大事"的通知',
                            date: '2025-01-09',
                            url: '/news/industry/5'
                        },
                        {
                            id: 6,
                            title: '郑州召开版权纠纷调解培训会',
                            date: '2025-01-06',
                            url: '/news/industry/6'
                        },
                        {
                            id: 7,
                            title: '广州举办民间文艺版权经纪人训练营',
                            date: '2025-01-06',
                            url: '/news/industry/7'
                        },
                        {
                            id: 8,
                            title: '全国首单！成都版权ABN成功发行 金额1亿元',
                            date: '2024-12-24',
                            url: '/news/industry/8'
                        },
                        {
                            id: 9,
                            title: '2024年安徽省版权工作培训班在合肥举办',
                            date: '2024-12-16',
                            url: '/news/industry/9'
                        },
                        {
                            id: 10,
                            title: '安徽省首批民间文艺版权保护与促进试点工作启动',
                            date: '2024-12-16',
                            url: '/news/industry/10'
                        },
                        {
                            id: 11,
                            title: '华中版权服务大厅在长沙正式运营',
                            date: '2024-11-21',
                            url: '/news/industry/11'
                        },
                        {
                            id: 12,
                            title: '陕西民间文艺版权保护与交易平台上线',
                            date: '2024-11-21',
                            url: '/news/industry/12'
                        },
                        {
                            id: 13,
                            title: '第十四届中国国际影视动漫版权保护和贸易博览会在广东东莞举行',
                            date: '2024-11-13',
                            url: '/news/industry/13'
                        },
                        {
                            id: 14,
                            title: '中外嘉宾：民间文艺版权保护工作需要世界各国重视和支持',
                            date: '2024-11-08',
                            url: '/news/industry/14'
                        },
                        {
                            id: 15,
                            title: '2024年中国国际服务贸易交易会首都版权展区：打开传播版权保护理念第"N+1"种方式',
                            date: '2024-10-18',
                            url: '/news/industry/15'
                        }
                    ]
                }
            });
        } else if (params.type === 'photos') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else if (params.type === 'videos') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else if (params.type === 'notice') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else if (params.type === 'laws') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else if (params.type === 'special') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else if (params.type === 'public') {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        } else {
            resolve({
                data: {
                    total: 0,
                    list: []
                }
            });
        }
    });
}
// 获取新闻详情
export async function getNewsDetail(params: any) {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                title: '市人大常委会机关举行秘书学习会',
                metadata: {
                    views: 14,
                    authors: ['记者', '王陈陈', '通讯员', '张纯一'],
                    source: '陕西新闻网',
                    publishTime: '2025-03-20 08:16'
                },
                content: `
                        <p>中共中央总书记、国家主席、中央军委主席习近平近日在云南考察时强调，云南要认真落实党中央关于西部大开发和长江经济带发展的战略部署，完整准确全面贯彻新发展理念，坚持稳中求进工作总基调，着力推动高质量发展，解放思想、改革创新，奋发进取、真抓实干，在中国式现代化进程中开创云南发展新局面。</p>
                        <p>3月19日至20日，习近平在云南省委书记王宁和省长王予波陪同下，先后到丽江、昆明等地考察调研。</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623074768884.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江现代花卉产业园展厅，察看鲜切花品种展示。新华社记者 谢环驰 摄</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623075308356.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江现代花卉产业园玫瑰花种植区，同现场村民、技术人员亲切交谈。新华社记者 燕雁 摄</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623075463676.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江现代花卉产业园考察。新华社记者 燕雁 摄</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623075620218.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江现代花卉产业园考察。新华社记者 燕雁 摄</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623075801560.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江现代花卉产业园玫瑰花分级包装生产线考察。新华社记者 燕雁 摄</p>
                        <p>19日下午，习近平来到丽江现代花卉产业园。在展厅，他察看玫瑰、马蹄莲鲜切花品种展示，听取云南花卉产业发展情况介绍。在玫瑰花种植区，他了解智能温室无土栽培技术，同现场村民、技术人员亲切交谈。他还来到玫瑰花分级包装生产线，察看筛选、分级到包装、发货的全流程，对鲜切花通过物流及时外销表示肯定。习近平指出，云南花卉产业前景广阔，要着眼全产业链，从种业端、种植端、市场端不断深耕细作，让这一“美丽产业”成为造福群众的“幸福产业”。</p>
                        <img src="https://www.ncac.gov.cn/xxfb/ttxx/202503/W020250321623075960678.jpg" alt="新闻图片" />
                        <p>3月19日至20日，中共中央总书记、国家主席、中央军委主席习近平在云南考察。这是19日下午，习近平在丽江古城考察时，与居民、游客互动交流。新华社记者 燕雁 摄</p>
                        
                    `
            }
        });
    });
};