import React from 'react';
import {Card, Typography, Button, Modal, Form, Input} from 'antd';
import ModalForm from "./ModalForm";

const {Title, Text} = Typography;

const CompanyCard = ({company}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
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
    return (
        <div>
            <Card
                key={company.id}
                onClick={handleCardClick}
                style={{
                    height: isExpanded ? 'auto' : '300px',
                    width: '400px',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#ffffff',
                    transition: 'height 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <Title level={4}>{company.name}</Title>
                    <Text>
                        <strong>Необходимые навыки:</strong>
                        <br/>
                        {company.required_skills}
                        <br/>
                        <br/>
                    </Text>
                    <Text>
                        <strong>Оплата:</strong>
                        <br/>
                        {company.payment}
                        <br/>
                        <br/>
                    </Text>
                    <Text>
                        <strong>Продолжительность:</strong>
                        <br/>
                        {company.duration}
                        <br/>
                        <br/>
                    </Text>
                    {isExpanded && (
                        <>
                            <Text>
                                <strong>Описание:</strong>
                                <br/>
                                {company.description}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Адрес:</strong>
                                <br/>
                                {company.address}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Контактное лицо:</strong>
                                <br/>
                                {company.contact_person}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Номер телефона:</strong>
                                <br/>
                                {company.phone_number}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Email:</strong>
                                <br/>
                                {company.email}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Веб-сайт:</strong>
                                <br/>
                                {company.website}
                                <br/>
                                <br/>
                            </Text>

                            <Text>
                                <strong>Рабочие часы:</strong>
                                <br/>
                                {company.working_hours}
                                <br/>
                                <br/>
                            </Text>

                            {company.is_payment ?<Text>
                                <strong>Сумма оплаты:</strong>
                                <br/>
                                {company.payment_amount}
                                <br/>
                                <br/>
                            </Text> : ""}
                            <Text>
                                <strong>Дата начала:</strong>
                                <br/>
                                {company.start_date}
                                <br/>
                                <br/>
                            </Text>

                            <Text>
                                <strong>Ожидания:</strong>
                                <br/>
                                {company.expectations}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Преимущества:</strong>
                                <br/>
                                {company.benefits}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Ограничения:</strong>
                                <br/>
                                {company.restrictions}
                                <br/>
                                <br/>
                            </Text>
                            <Text>
                                <strong>Дополнительная информация:</strong>
                                <br/>
                                {company.additional_information}
                                <br/>
                                <br/>
                            </Text>
                            <Button type="primary" onClick={handleShowModal}>
                                Откликнуться
                            </Button>
                        </>
                    )}
                </div>
                <div>
                    {/* Добавьте здесь дополнительные элементы, если необходимо */}
                </div>
            </Card>
            <ModalForm company={company} visible={isModalVisible} onCancel={handleHideModal} onFinish={onFinish}/>
        </div>

    );
};

export default CompanyCard;

