import { useEffect, useReducer, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import * as _ from 'lodash-es';
import HomePage from './Home/index';
import NewsPage from './News/index';
import AboutPage from './About/index';
import ActivityPage from './Activity/index';
import GuidePage from './Guide/index';
import ServicePage from './Service/index';
import CopyrightPage from './Copyright/index';
import DetialPage from './Detial/index';
import DetialInfoPage from './DetialInfo/index';
import BasicLayout from '@/layout';
import { routes } from '@/layout/routes';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const elementMap: any = {
    '/home': <HomePage />,
    '/news': <NewsPage />,
    '/about': <AboutPage />,
    '/activity': <ActivityPage />,
    '/guide': <GuidePage />,
    '/service': <ServicePage />,
    '/copyright': <CopyrightPage />,
}
const IndexRouter = () => {

    return (
        <ConfigProvider locale={zhCN}>
            <BasicLayout>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage />
                        }
                    />
                    {
                        routes.map((item) => {
                            if (!elementMap[item.path]) return null;
                            return <Route
                                key={item.path}
                                path={item.path}
                                element={elementMap[item.path]}
                            />
                        })
                    }
                    <Route
                        path="/detial/*"
                        element={<DetialPage />}
                    />
                    <Route
                        path="/detialInfo/*"
                        element={<DetialInfoPage />}
                    />
                </Routes>
            </BasicLayout>
        </ConfigProvider>
    );
};
export default IndexRouter;

