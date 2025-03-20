import React from 'react';
import styles from './index.less';

const Footer: React.FC = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className="footer-left">
                <img src="https://www.huaibei.gov.cn/assets/images/gov_red.png" alt="陕西市人民政府" />
            </div>
            <div className="footer-content">
                <div className="main-info">
                    <span>陕西市人民政府主办</span>
                    <span>陕西市人民政府办公室承办</span>
                    <span>运维电话：0561-3198639</span>
                </div>
                <div className="secondary-info">
                    <span>地址：陕西市人民路208号</span>
                    <span>陕ICP备05004418号-1</span>
                    <span>陕公网安备 34060002010001号</span>
                </div>
                <div className="secondary-info">
                    <span>网站标识码：3406000012</span>
                    <span>违法和不良信息举报中心</span>
                    <span>本站已支持IPV6访问</span>
                </div>
                <div className="secondary-info">
                    <span>适老化无障碍服务</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
