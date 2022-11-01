import React from 'react';
import { Card, Meta, Avatar } from 'antd'
import { Image } from 'antd';
import { Divider, Row, Col } from 'antd';
export function CalendarInstruction(props) {
    const { Meta } = Card;
    return (
        <Card
            width={400}
        >
            <Row justify="space-around" align="middle">
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 1"
                        description="The first step is Mint"

                    />
                </Col>
                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/calendar.png`}
                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">

                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/holidays.png`}
                    />
                </Col>
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 2"
                        description="In the old version . It was there"
                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 3"
                        description="But now u should use this"

                    />
                </Col>
                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/click.png`}
                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">

                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/save.png`}
                    />
                </Col>
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 4"
                        description="It's all"

                    />
                </Col>
            </Row>
        </Card>
    );
}

export function MrpInstruction(props) {
    const { Meta } = Card;
    return (
        <Card
            width={400}
        >
            <Row justify="space-around" align="middle">
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 1"
                        description="The first step is Mint"

                    />
                </Col>
                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/mrp.png`}
                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">

                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`./photo/module.png`}
                    />
                </Col>
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 2"
                        description="In the old version . It was there"

                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 3"
                        description="But now u should use this"

                    />
                </Col>
                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/value.png`}
                    />
                </Col>
            </Row>
            <Divider />
            <Row justify="space-around" align="middle">

                <Col span={6} xs={{ span: 22 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <Image
                        src={`/photo/saveMrp.png`}
                    />
                </Col>
                <Col span={9} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />}
                        title="Point 4"
                        description="It's all"

                    />
                </Col>
            </Row>
        </Card>
    );
}

