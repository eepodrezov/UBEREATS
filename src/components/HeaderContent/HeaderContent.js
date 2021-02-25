import React from 'react'
import style from './HeaderContent.module.css'

import Icon from '@ant-design/icons';
import {ReactComponent as Logo} from '../../img/logo.svg';

export default function HeaderContent() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Icon component={Logo} />
            </div>
            <div className={style.adress}>Adress</div>
            <div className={style.buttons}>Buttons</div>
        </div>

    );
}



