import React from 'react'
import style from './FooterContent.module.css'

import Icon from '@ant-design/icons';
import {ReactComponent as Logo} from '../../img/white-logo.svg';

export default function FooterContent () {
    return (
        <div>
            <Icon component={Logo} style={{ fontSize: '350px', textAlign: "left" }}/>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </div>
    );
}