import React from 'react';
import { Row, Col } from 'antd';
import Navbar from "../NavBar";
import RequestStatusCard from "../RequestStatusCard";

const requests = [
    {
        id: 1,
        status: 'Одобрена',
        practiceTitle: 'Название практики',
        practiceDuration: '3 месяца',
        practiceDescription: 'Описание практики',
        company: 'Название предприятия',
        supervisor: 'Имя руководителя',
        contactEmail: 'example@example.com',
        contactPhone: '+1234567890',
    },
    {
        id: 2,
        status: 'В ожидании',
        practiceTitle: 'Название практики 2',
        practiceDuration: '4 месяца',
        practiceDescription: 'Описание практики 2',
        company: 'Название предприятия 2',
        supervisor: 'Имя руководителя 2',
        contactEmail: 'example2@example.com',
        contactPhone: '+0987654321',
    },
    // Добавьте здесь данные для других заявок, если необходимо
];
const sortedRequests = [
    ...requests.filter((request) => request.status === "Одобрена"),
    ...requests.filter((request) => request.status === "В ожидании"),
    ...requests.filter((request) => request.status === "Отклонена"),
];

const RequestsPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: "24px" }}>
                <Row gutter={[24, 24]}>
                    {sortedRequests.map((request) => (
                        <Col span={8} key={request.id}>
                            <RequestStatusCard request={request} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default RequestsPage;
