import React from 'react';
import { Button, Form, Input, Select, DatePicker, Divider, Typography } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from "dayjs";
const { Option } = Select;
const { Title, Text } = Typography;

const CompanyPracticeEditForm = ({ data, onSave }) => {
    console.log(data.start_date)
    const initialValues = {
        ...data,
        is_payment: data.is_payment ? "true" : "false",
        startDate: dayjs(data.start_date, 'DD.MM.YYYY')
    }
    console.log(initialValues)
    return (
        <div>
            <Title level={2}>Редактирование информации о предприятии</Title>
            <Form onFinish={onSave} initialValues={initialValues} layout="vertical">
                <Title level={4}>Основная информация</Title>

                <Form.Item
                    name="name"
                    label="Название предприятия"
                    rules={[{ required: true, message: 'Пожалуйста, введите название предприятия' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Описание предприятия"
                    rules={[{ required: true, message: 'Пожалуйста, введите описание предприятия' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Адрес предприятия"
                    rules={[{ required: true, message: 'Пожалуйста, введите адрес предприятия' }]}
                >
                    <Input />
                </Form.Item>

                <Divider />

                <Title level={4}>Контактная информация</Title>

                <Form.Item
                    name="contact_person"
                    label="Контактное лицо"
                    rules={[{ required: true, message: 'Пожалуйста, введите контактное лицо' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone_number"
                    label="Контактный номер телефона"
                    rules={[{ required: true, message: 'Пожалуйста, введите контактный номер телефона' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Адрес электронной почты"
                    rules={[
                        { required: true, message: 'Пожалуйста, введите адрес электронной почты' },
                        { type: 'email', message: 'Пожалуйста, введите корректный адрес электронной почты' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="website" label="Веб-сайт предприятия">
                    <Input />
                </Form.Item>

                <Divider />

                <Title level={4}>Информация о практике</Title>

                <Form.Item
                    name="duration"
                    label="Длительность практики"
                    rules={[{ required: true, message: 'Пожалуйста, введите длительность практики' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="working_hours"
                    label="Режим работы"
                    rules={[{ required: true, message: 'Пожалуйста, выберите режим работы' }]}
                >
                    <Select>
                        <Option value="full-time">Полный рабочий день</Option>
                        <Option value="part-time">Частичная занятость</Option>
                        <Option value="flexible">Гибкий график работы</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="is_payment"
                    label="Оплата"
                    rules={[{ required: true, message: 'Пожалуйста, выберите опцию оплаты' }]}
                >
                    <Select>
                        <Option value= "true">Оплачиваемая</Option>
                        <Option value= "false">Неоплачиваемая</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="payment_amount" label="Сумма оплаты (если практика оплачиваемая)">
                    <Input />
                </Form.Item>

                <Form.Item
                    name="startDate"
                    label="Дата начала практики"
                    rules={[{ required: true, message: 'Пожалуйста, выберите дату начала практики' }]}
                >
                    <DatePicker locale = {locale} style={{ width: '100%' }} />
                </Form.Item>

                <Divider />

                <Title level={4}>Дополнительная информация</Title>

                <Form.Item
                    name="required_skills"
                    label="Требуемые навыки и квалификация"
                    rules={[{ required: true, message: 'Пожалуйста, введите требуемые навыки и квалификацию' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="expectations"
                    label="Ожидания и задачи практиканта"
                    rules={[{ required: true, message: 'Пожалуйста, введите ожидания и задачи практиканта' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="benefits"
                    label="Бенефиты для студента"
                    rules={[{ required: true, message: 'Пожалуйста, введите бенефиты для студента' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item name="restrictions" label="Ограничения">
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item name="additional_information" label="Дополнительная информация или комментарии">
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CompanyPracticeEditForm;
