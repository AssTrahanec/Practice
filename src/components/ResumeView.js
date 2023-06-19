import React from 'react';
import { Typography, Divider, Button, Tag, Row, Col, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ResumeView = ({ data, onEdit }) => {
    const { student_name, student_email, student_phone_number, specialty, avg_mark, skills, work_experience, projects_link, language_skills } = data;

    return (
        <div style={{ padding: '1rem' }}>
            <Row justify="center">
                <Col span={20}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={onEdit}
                            style={{ fontSize: '1.2rem', padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', height: '2.4rem' }}
                        >
                            Редактировать
                        </Button>
                    </div>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.8rem' }}>
                        Резюме
                    </Title>
                    <Card style={{ marginBottom: '1rem' }}>
                        <Title level={4}>Общая информация</Title>
                        <Text strong>ФИО:</Text> <span>{student_name}</span>
                        <br />
                        <Text strong>Email:</Text> <span>{student_email}</span>
                        <br />
                        <Text strong>Номер телефона:</Text> <span>{student_phone_number}</span>
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}>
                        <Title level={4}>Образование</Title>
                        <Text strong>Специальность:</Text> <span>{specialty}</span>
                        <br />
                        <Text strong>Средняя оценка:</Text> <span>{avg_mark}</span>
                        <Divider />
                        <Title level={4}>Навыки</Title>
                        <Text strong>Ключевые навыки:</Text>
                        <div style={{ marginTop: '0.4rem' }}>
                            {skills ? skills.split(',').map((skill) => (
                                <Tag
                                    key={skill}
                                    color="blue"
                                    style={{ marginRight: '0.4rem', marginBottom: '0.4rem', padding: '0.4rem' }}
                                >
                                    {skill.trim()}
                                </Tag>
                            )) : ""}
                        </div>
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}>
                        <Title level={4}>Опыт работы</Title>
                        <Text>{work_experience}</Text>
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}>
                        <Title level={4}>Проекты</Title>
                        <Text>{projects_link}</Text>
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}>
                        <Title level={4}>Дополнительные сведения</Title>
                        <Text strong>Языковые навыки:</Text>
                        <div style={{ marginTop: '0.4rem' }}>
                            {language_skills ? language_skills.map((language) => (
                                <Tag
                                    key={language}
                                    color="green"
                                    style={{ marginRight: '0.4rem', marginBottom: '0.4rem', padding: '0.4rem' }}
                                >
                                    {language}
                                </Tag>
                            )) : ""}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ResumeView;
