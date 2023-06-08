import React, {useState} from 'react';
import {Button, Card, Typography} from 'antd';

const {Title, Text} = Typography;

const RequestCard = ({request}) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {

        setIsConfirmed(true);//добавить, что студент уже нашел предприятие
    };

    const cardColor = request.status === 'accepted'
        ? '#fadb14' // желтый цвет для одобренных заявок
        : request.status === 'rejected'
            ? '#f5222d' // красный цвет для отклоненных заявок
            : '#f0f2f5'; // цвет по умолчанию для заявок со статусом "В ожидании"
    return (
        <Card style={{width: 400, backgroundColor: cardColor}}>
            <Title level={4}>Статус заявки: {request.status}</Title>
            <Title level={5}>Информация о практике:</Title>
            <Text strong>Предприятие:</Text>
            <Text>{request.name}</Text>
            <br/>
            <Text strong>Длительность практики:</Text>
            <Text>{request.duration}</Text>
            <br/>
            <Text strong>Описание практики:</Text>
            <Text>{request.description}</Text>
            <br/>
            <Title level={5}>Информация о предприятии:</Title>
            <br/>
            <Text strong>Контактный email:</Text>
            <Text>{request.email}</Text>
            <br/>
            <Text strong>Контактный телефон:</Text>
            <Text>{request.phone_number}</Text>
            <br/>
            {!isConfirmed && request.status === 'accepted' && (
                <Button onClick={handleConfirm}>Подтвердить заявку</Button>
            )}
        </Card>
    );
};

export default RequestCard;
