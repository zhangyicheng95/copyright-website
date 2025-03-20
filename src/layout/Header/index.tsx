import options from '@/constants/commonOptions';
import React, { useEffect, useRef } from 'react';
import styles from './index.less';
import guohui from '@/assets/images/guohui.png';
import title from '@/assets/images/title.png';
import { Input } from 'antd';
import { routes } from '../routes';
import { SearchOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from '@umijs/max';

interface Props {

}

const Header: React.FC<Props> = (props: any) => {
    const location = useLocation();
    const { pathname = '/home' } = location;
    const navigate = useNavigate();


    return <div className={`flex-box ${styles.header}`}>
        <div className="flex-box-center header-left">
            <img src={guohui} alt="guohui" className='header-left-guohui' />
            <img src={title} alt="title" className='header-left-title' />
            {/* <div className="header-left-title">版权协会</div> */}
        </div>
        <div className="flex-box-column header-right">
            <div className="flex-box header-right-search">
                <Input type='search' placeholder="搜索您想要了解的政策、服务、资讯" />
                <div className="flex-box-center header-right-search-icon">
                    <SearchOutlined />
                </div>
            </div>
            <div className="flex-box header-right-tab">
                {routes.map((item: any) => {
                    console.log(item.path, pathname);

                    return <div
                        className="header-right-tab-item"
                        key={item.path}
                        style={item.path === pathname ? {
                            borderBottomColor: '#fff'
                        } : {}}
                        onClick={() => {
                            navigate(item.path);
                        }}
                    >
                        {/* <div className="header-right-tab-item-icon">{item.icon}</div> */}
                        <div className="header-right-tab-item-name">{item.name}</div>
                    </div>
                })}
            </div>
        </div>
    </div >;
}

export default Header;
