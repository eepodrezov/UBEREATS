import React from 'react'
import style from './Search.module.css'

import { SearchOutlined } from '@ant-design/icons';
import { Typography, Input } from 'antd';

const { Text, Link } = Typography;


export default function Search () {
    
    return (
        <div className={style.container}>
            <SearchOutlined style={{ fontSize: '14px' }}/>
            <Input placeholder="Search for restaurant or cuisine" bordered={false} />
        </div>
    );
}