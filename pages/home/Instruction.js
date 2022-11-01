import React, { useState } from 'react';
import { Card } from 'antd';
import { CalendarInstruction, MrpInstruction } from './CardGroups';
const tabList = [
    {
        key: 'mint',
        tab: 'mint',

    },{
        key: 'stake',
        tab: 'stake',

    }
];

const contentList = {
    mint: <CalendarInstruction />,
    stake: <MrpInstruction />,
};

function Instruction(props) {

    const [activeTabKey1, setActiveTabKey1] = useState('mint')
    const [startLink, setStartLink] = useState("mint")
    const onTab1Change = key => {
        setActiveTabKey1(key);
        setStartLink(`/${key}`)
    };



    return (
        <div className="container-sm align-middle instruction" style={{color:"white!important"}}>
            <Card
                title="Инструкция"
                extra={<a href={startLink}>Начать</a>}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={key => {
                    onTab1Change(key);
                }}

            >{contentList[activeTabKey1]}</Card>
            <br />
            <br />



        </div>
    );
}

export default Instruction;