import React from 'react'
import style from './Cards.module.css'

import img1 from '../../img/card1.png'
import img2 from '../../img/card2.png'
import img3 from '../../img/card3.png'
import img4 from '../../img/card4.png'
import img5 from '../../img/card5.png'
import img6 from '../../img/card6.png'
import img7 from '../../img/card7.png'
import img8 from '../../img/card8.png'
import img9 from '../../img/card9.png'


import { Space } from 'antd';
import CardsConnent from './CardsContent'


export default function Cards () {
    return (
        <div className={style.container}>
            <Space direction="horizontal" wrap>
                <CardsConnent cardImg={img1} title="Макдоналдс — Газетный" info="₽₽ • Бургеры" time="25 - 35 Min"/> 
                <CardsConnent cardImg={img2} title="DimSum & Co — ЦДМ" info="₽ • Японская • Китайская • Азиатская" time="40 - 50 Min"/> 
                <CardsConnent cardImg={img3} title="ДвижОК — Манежная" info="₽ • Американская • Европейская" time="35 - 45 Min"/> 
                <CardsConnent cardImg={img4} title="НЯ — NHA" info="₽₽ • Вьетнамская" time="30 - 40 Min"/> 
                <CardsConnent cardImg={img5} title="Точка Дзы — Цветной" info="₽₽ • Вьетнамская" time="40 - 50 Min"/> 
                <CardsConnent cardImg={img6} title="Cinnabon" info="₽ • Выпечка • Десерты • Капкейки" time="25 - 35 Min"/> 
                <CardsConnent cardImg={img7} title="PIZZELOVE" info="₽₽ • Пицца" time="15 - 25 Min"/> 
                <CardsConnent cardImg={img8} title="Zю кафе — Тверская" info="₽₽ • Японская" time="25 - 35 Min"/> 
                <CardsConnent cardImg={img9} title="Bar BQ Cafe — Манежная" info="₽₽₽ • Европейская" time="30 - 40 Min"/> 
            </Space>
        </div>
    );
}