import React from 'react';
import { Card, Typography, Tag, Row, Col } from 'antd';

const { Title, Text } = Typography;

const RequestCard = ({ request }) => {
    const getStatusColor = () => {
        switch (request.status) {
            case 'accepted':
                return 'green';
            case 'rejected':
                return 'red';
            default:
                return 'default';
        }
    };

    const cardStyle = {
        marginBottom: 16,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    };

    const infoTitleStyle = {
        marginBottom: 8,
    };

    const infoLabelStyle = {
        fontWeight: 'bold',
        marginRight: 4,
    };

    return (
        <Card style={cardStyle} bordered={false}>
            <div style={{ marginBottom: 16 }}>
                <Tag color={getStatusColor()}>{request.status}</Tag>
            </div>
            <Title level={5} style={infoTitleStyle}>Информация о практике:</Title>
            <Text style={infoLabelStyle}>Предприятие:</Text>
            <Text>{request.name}</Text>
            <br />
            <Text style={infoLabelStyle}>Длительность практики:</Text>
            <Text>{request.duration}</Text>
            <br />
            <Text style={infoLabelStyle}>Описание практики:</Text>
            <Text>{request.description}</Text>
            <br/>
            <Text style={infoLabelStyle}>Оплата:</Text>
            {
                request.is_payment ? (<Text>{request.payment_amount}</Text>) : (<Text>Ноплачиваемая</Text>)
            }
            <br />
            <Title level={5} style={infoTitleStyle}>Информация о предприятии:</Title>
            <br />
            <Text style={infoLabelStyle}>Контактный email:</Text>
            <Text>{request.email}</Text>
            <br />
            <Text style={infoLabelStyle}>Контактный телефон:</Text>
            <Text>{request.phone_number}</Text>
            <br />
        </Card>
    );
};
export default RequestCard