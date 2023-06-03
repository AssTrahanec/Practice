import React, {useState} from 'react';
import {Button, Card, Typography} from 'antd';

const {Title, Text} = Typography;

const RequestCard = ({request}) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {

        setIsConfirmed(true);//добавить, что студент уже нашел предприятие
    };

    const cardColor = request.status === 'Одобрена'
        ? '#fadb14' // желтый цвет для одобренных заявок
        : request.status === 'Отклонена'
            ? '#f5222d' // красный цвет для отклоненных заявок
            : '#f0f2f5'; // цвет по умолчанию для заявок со статусом "В ожидании"
    return (
        <Card style={{width: 400, backgroundColor: cardColor}}>
            <Title level={4}>Статус заявки: {request.status}</Title>
            <Title level={5}>Информация о практике:</Title>
            <Text strong>Название практики:</Text>
            <Text>{request.practiceTitle}</Text>
            <br/>
            <Text strong>Длительность практики:</Text>
            <Text>{request.practiceDuration}</Text>
            <br/>
            <Text strong>Описание практики:</Text>
            <Text>{request.practiceDescription}</Text>
            <br/>
            <Title level={5}>Информация о предприятии:</Title>
            <Text strong>Название предприятия:</Text>
            <Text>{request.company}</Text>
            <br/>
            <Text strong>Руководитель:</Text>
            <Text>{request.supervisor}</Text>
            <br/>
            <Text strong>Контактный email:</Text>
            <Text>{request.contactEmail}</Text>
            <br/>
            <Text strong>Контактный телефон:</Text>
            <Text>{request.contactPhone}</Text>
            <br/>
            {!isConfirmed && request.status === 'Одобрена' && (
                <Button onClick={handleConfirm}>Подтвердить заявку</Button>
            )}
        </Card>
    );
};

export default RequestCard;
