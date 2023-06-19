import React from 'react';
import { Button, Typography, Divider, Tag, Row, Col, Card, Badge, Space, Statistic } from 'antd';
import { EditOutlined, CheckOutlined, ClockCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CompanyPracticeView = ({ data, onEdit, onPublish }) => {
    console.log("viewData",data)
    return (
        <div style={{ padding: '1rem' }}>
            <Row justify="space-between">
                <Col>
                    <Title level={2}>Информация о предприятии</Title>
                </Col>

                <Col>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="primary" icon={<CheckOutlined />} onClick={onPublish}>
                            {data.practice_status === "public" ? 'Снять с публикации' : 'Опубликовать'}
                        </Button>
                    </div>
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Основная информация" bordered={false}>
                        <Paragraph>
                            <strong>Название предприятия:</strong> {data.name}
                        </Paragraph>

                        <Paragraph>
                            <strong>Описание предприятия:</strong> {data.description}
                        </Paragraph>


                    </Card>
                </Col>

                <Col span={12}>
                    <Card title="Статус" bordered={false}>
                        <Badge
                            status={data.practice_status === 'public' ? 'success' : 'default'}
                            text={data.practice_status === 'public' ? 'Опубликовано' : 'Неопубликовано'}
                        />
                    </Card>
                </Col>
            </Row>

            <Divider />
            <Card title="Контактная информация" bordered={false}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Space direction="vertical">
                            <Paragraph>
                                <strong>Адрес предприятия:</strong> {data.address}
                            </Paragraph>

                            <Paragraph>
                                <strong>Контактное лицо:</strong> {data.contact_person}
                            </Paragraph>

                            <Paragraph>
                                <strong>Контактный номер телефона:</strong> {data.phone_number}
                            </Paragraph>

                            <Paragraph>
                                <strong>Адрес электронной почты:</strong> {data.email}
                            </Paragraph>

                            <Paragraph>
                                <strong>Веб-сайт предприятия:</strong> {data.website}
                            </Paragraph>
                        </Space>
                    </Col>
                </Row>
            </Card>
            <Divider />
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Требуемые навыки и квалификация" bordered={false}>
                        {data.required_skills ?

                            data.required_skills.split(',').map((skill) => (
                            <Tag key={skill}>{skill}</Tag>

                        )) : ""}
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Card title="Информация о практике" bordered={false}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Space direction="vertical">
                            <Paragraph>
                                <strong>Длительность практики:</strong> {data.duration}
                            </Paragraph>

                            <Paragraph>
                                <strong>Режим работы:</strong> {data.working_hours}
                            </Paragraph>

                            <Paragraph>
                                <strong>Оплата:</strong> {data.is_payment ? "Оплачиваемая" : "Неоплачиваемая"}
                            </Paragraph>

                            {data.is_payment === true && (
                                <Paragraph>
                                    <strong>Сумма оплаты:</strong> {data.payment_amount}
                                </Paragraph>
                            )}

                            <Paragraph>

                                <strong>Дата начала практики:</strong> {data.start_date ? data.start_date.toString() : ""}
                            </Paragraph>
                        </Space>
                    </Col>
                </Row>
            </Card>

            <Divider />

            <Card title="Дополнительная информация" bordered={false}>
                <Paragraph>
                    <strong>Ограничения:</strong> {data.restrictions}
                </Paragraph>

                <Paragraph>
                    <strong>Дополнительная информация или комментарии:</strong> {data.additional_information}
                </Paragraph>
            </Card>

            <Divider />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>
                    Редактировать
                </Button>
            </div>
        </div>
    );
};

export default CompanyPracticeView;
