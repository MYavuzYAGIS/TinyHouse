import React from 'react';
import {Layout} from 'antd';
import Icon from "./assets/logo.svg";

const {Header} = Layout;

export const AppHeaderSkeleton = () => {
    return (
        <Header className="app-header">
            <div className="app-header__logo-search-section">
                <div className="app-header__logo">
                    <img src={Icon} className="app-logo" alt="logo" />
                </div>
            </div>
        </Header>
    );
}