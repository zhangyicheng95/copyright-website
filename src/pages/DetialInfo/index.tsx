import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { getNewsDetail } from '@/services/api';
import { GetQueryObj } from '@/utils/utils';
const DetialInfo: React.FC = () => {
    const params = GetQueryObj(location.search);
    const id = params.id;
    const type = params.type;
    const newsType = params.newsType;
    // 模拟新闻详情数据
    const [newsDetail, setNewsDetail] = useState<any>({});
    useEffect(() => {
        getNewsDetail({ id: id, type: type, newsType: newsType }).then((res: any) => {
            setNewsDetail(res.data);
        });
    }, [id, type, newsType]);

    return (
        <div className={`commonPageStyle ${styles.detialInfoContainer}`}>
            {newsDetail.title && (
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

                    <div className="newsBody" dangerouslySetInnerHTML={{ __html: newsDetail.content }}></div>
                </div>
            )}
        </div>
    );
};

export default DetialInfo;
