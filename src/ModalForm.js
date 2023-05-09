import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const ModalForm = ({ company, visible, onCancel, onFinish }) => {
    return (
        <Modal
            title={`Заявка на практику "${company.name}"`}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <Form onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="ФИО"
                    rules={[{ required: true, message: 'Введите ваше ФИО' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Введите ваш Email' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    label="Номер телефона"
                    rules={[{ required: true, message: 'Введите ваш номер телефона' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Speciality"
                    label="Специальность"
                    rules={[{ required: true, message: 'Введите специальность' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="AvgMark"
                    label="Средняя оценка"
                    rules={[{ required: true, message: 'Введите средню оценку' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Skills"
                    label="Ключевые навыки"
                    rules={[{ required: true, message: 'Введите Ваши навыки' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Experience"
                    label="Опыт работы"
                    rules={[{ required: false, message: 'Введите опыт работы, если есть' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="LanguageSkills"
                    label="Знание иностранных языков"
                    rules={[{ required: false, message: 'Введите иностранные языки' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="ProjectLink"
                    label="Проекты"
                    rules={[{ required: false, message: 'Ссылка на ваши проекты' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить заявку
                    </Button>
                    <Button onClick={onCancel} style={{ marginLeft: '16px' }}>
                        Отмена
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalForm;
