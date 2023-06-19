import React, { useState, useRef } from 'react';
import { Card, Typography, Button, Modal, Form, Input, Divider } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import ModalForm from './ModalForm';
import '../styles/CompanyCard.css';

const { Title, Text } = Typography;

const CompanyCard = ({ company }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const cardRef = useRef(null);

    const handleCardClick = (e) => {
        const selection = window.getSelection();
        if (selection.toString().length === 0) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    const handleHideModal = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setIsModalVisible(false);
    };

    const formattedStartDate = moment(company.start_date).format('YYYY-MM-DD');

    return (
        <div>
            <Card
                key={company.id}
                onClick={handleCardClick}
                ref={cardRef}
                className={`company-card ${isExpanded ? 'expanded' : ''}`}
                hoverable
            >
                <div className="company-card-content">
                    <Title level={3}>{company.name}</Title>
                    <Divider />
                    <Text strong>Необходимые навыки:</Text>
                    <Text>{company.required_skills}</Text>
                    <Divider />
                    <Text strong>Оплата:</Text>
                    <Text>{company.is_payment ? company.payment_amount : "Неоплачиваемая"}</Text>
                    <Divider />
                    <Text strong>Продолжительность:</Text>
                    <Text>{company.duration}</Text>
                    {isExpanded && (
                        <>
                            <Divider />
                            <Text strong>Описание:</Text>
                            <Text>{company.description}</Text>
                            <Divider />
                            <Text strong>Адрес:</Text>
                            <Text>
                                <EnvironmentOutlined /> {company.address}
                            </Text>
                            <Divider />
                            <Text strong>Контактная информация:</Text>
                            <Text>
                                <PhoneOutlined /> {company.phone_number}
                            </Text>
                            <Text>
                                <MailOutlined /> {company.email}
                            </Text>
                            <Divider />
                            <Text strong>Веб-сайт:</Text>
                            <Text>{company.website}</Text>
                            <Divider />
                            <Text strong>Рабочие часы:</Text>
                            <Text>{company.working_hours}</Text>
                            {company.is_payment && (
                                <>
                                    <Divider />
                                    <Text strong>Сумма оплаты:</Text>
                                    <Text>{company.payment_amount}</Text>
                                </>
                            )}
                            <Divider />
                            <Text strong>Дата начала:</Text>
                            <Text>
                                <CalendarOutlined /> {formattedStartDate}
                            </Text>
                            <Divider />
                            <Text strong>Ожидания:</Text>
                            <Text>{company.expectations}</Text>
                            <Divider />
                            <Text strong>Преимущества:</Text>
                            <Text>{company.benefits}</Text>
                            <Divider />
                            <Text strong>Ограничения:</Text>
                            <Text>{company.restrictions}</Text>
                            <Divider />
                            <Text strong>Дополнительная информация:</Text>
                            <Text>{company.additional_information}</Text>
                            <Divider />
                            <Button type="primary" onClick={handleShowModal} className="apply-button">
                                Откликнуться
                            </Button>
                        </>
                    )}
                </div>
            </Card>
            <ModalForm company={company} visible={isModalVisible} onCancel={handleHideModal} onFinish={onFinish} />
        </div>
    );
};

export default CompanyCard;
