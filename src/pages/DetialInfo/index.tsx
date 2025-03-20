import React from 'react';
import styles from './index.less';

const DetialInfo: React.FC = () => {
    // 模拟新闻详情数据
    const newsDetail = {
        title: '市人大常委会机关举行秘书学习会',
        metadata: {
            views: 14,
            authors: ['记者', '王陈陈', '通讯员', '张纯一'],
            source: '陕西新闻网',
            publishTime: '2025-03-20 08:16'
        },
        content: [
            '3月19日，市人大常委会机关举行2025年度第一次秘书学习会。市人大常委会党组书记、主任方宗泽出席会议并讲话，市人大常委会副主任金文、赵德志、徐涛，党组成员宋伟参加会议。市人大常委会秘书长赵德荣主持会议。',
            '会上，中国移动陕西分公司项目经理介绍了DeepSeek的具体应用，本次"推荐官"金文分享了阅读《曾国藩家书》的体会和感受，市人大常委会法工委负责同志就"立法技术规范"作了详细讲解。',
            '方宗泽指出，秘书学习会不仅是开展学习、展示能力的平台，更是交流互鉴、凝聚合力的重要抓手。要以主人翁的姿态，积极开动脑筋，想出更多的好办法，让秘书学习平台更加务实管用、富有成效。大家都示于参与、积极参与，真正将秘书学习会办成锻炼作风、提升本领的"练兵场"，努力打造过硬干部队伍，为推进陕西高质量转型发展贡献更多人大智慧和力量。',
            '方宗泽强调，要弄清"为什么学"。通过不断学习实践，持续增强本领、提升素养，做到"开口能讲、提笔能写、问策能对、遇事能办"，更好地适应时代发展和人大工作需要。要弄清"学什么"。突出学习重点，优化知识结构，认真补齐短板，努力增强人大工作的生机与活力。要弄清"怎样学"。进一步强化统筹协调，丰富内容形式，树立鲜明导向，营造浓厚的学习氛围，激发大家的学习兴趣和参与热情，推动大家理论知识水平和工作业务水平双提升。',
            '市人大常委会副秘书长，机关各委室处主任、副主任，机关科级及以下干部参加会议。'
        ]
    };

    return (
        <div className={`commonPageStyle ${styles.detialInfoContainer}`}>
            <div className="newsContent">
                <h1 className="newsTitle">{newsDetail.title}</h1>
                
                <div className="newsMeta">
                    <span>浏览次数：{newsDetail.metadata.views}</span>
                    <span className="metaItem">
                        作者：
                        {newsDetail.metadata.authors.join(' ')}
                    </span>
                    <span className="metaItem">
                        信息来源：{newsDetail.metadata.source}
                    </span>
                    <span className="metaItem">
                        发布时间：{newsDetail.metadata.publishTime}
                    </span>
                </div>
                
                <div className="newsBody">
                    {newsDetail.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetialInfo;
