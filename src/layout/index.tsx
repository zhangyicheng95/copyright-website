import { useEffect, useMemo, useState } from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import Footer from './Footer';
import Header from './Header';


const BasicLayout = (props: any) => {
    const { children } = props;

    return (
        <div className={`flex-box-column ${styles.basicLayoutWrapper}`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default BasicLayout;
