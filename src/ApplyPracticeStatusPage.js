import React from 'react';
import { Card, Typography } from 'antd';
import Navbar from "./NavBar";
const { Title, Text } = Typography;

const ApplyPracticeStatusPage = () => {

    const applicationStatus = {
        status: 'Одобрена',
        practiceTitle: 'Название практики',
        practiceDuration: '3 месяца',
        practiceDescription: 'Описание практики',
        company: 'Название предприятия',
        supervisor: 'Имя руководителя',
        contactEmail: 'example@example.com',
        contactPhone: '+1234567890',
    };

    return (
        <div>
            <Navbar/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card style={{ width: 400 }}>
                    <Title level={4}>Статус заявки: {applicationStatus.status}</Title>
                    <Title level={5}>Информация о практике:</Title>
                    <Text strong>Название практики:</Text>
                    <Text>{applicationStatus.practiceTitle}</Text>
                    <br />
                    <Text strong>Длительность практики:</Text>
                    <Text>{applicationStatus.practiceDuration}</Text>
                    <br />
                    <Text strong>Описание практики:</Text>
                    <Text>{applicationStatus.practiceDescription}</Text>
                    <br />
                    <Title level={5}>Информация о предприятии:</Title>
                    <Text strong>Название предприятия:</Text>
                    <Text>{applicationStatus.company}</Text>
                    <br />
                    <Text strong>Руководитель:</Text>
                    <Text>{applicationStatus.supervisor}</Text>
                    <br />
                    <Text strong>Контактный email:</Text>
                    <Text>{applicationStatus.contactEmail}</Text>
                    <br />
                    <Text strong>Контактный телефон:</Text>
                    <Text>{applicationStatus.contactPhone}</Text>
                </Card>
            </div>
        </div>

    );
}

export default ApplyPracticeStatusPage;