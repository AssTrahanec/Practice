import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { useAuth } from '../AuthProvider';
import NavBar from "../components/NavBar";
const { Option } = Select;

const CompanyFormPage = () => {
    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (values) => {
        console.log(values); // Можно добавить логику обработки данных

        // После обработки данных, можно сбросить форму и показать сообщение об успешной отправке
        form.resetFields();
        setSubmitted(true);
    };

    return (
        <div>
            <NavBar/>
        <div style={{ padding: '50px' }}>
            <h1>Заполните информаци о предприятии</h1>
            {submitted ? (
                <div>
                    <h3>Анкета успешно отправлена!</h3>
                    <p>Спасибо за заполнение анкеты.</p>
                </div>
            ) : (
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="companyName" label="Название предприятия" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="companyDescription" label="Описание предприятия" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="companyAddress" label="Адрес предприятия" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="contactPerson" label="Контактное лицо" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="contactPhoneNumber" label="Контактный номер телефона" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="email" label="Адрес электронной почты" rules={[{ required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="website" label="Веб-сайт предприятия">
                        <Input />
                    </Form.Item>

                    <Form.Item name="practiceDuration" label="Длительность практики" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="workSchedule" label="Режим работы" rules={[{ required: true }]}>
                        <Select>
                            <Option value="full-time">Полный рабочий день</Option>
                            <Option value="part-time">Частичная занятость</Option>
                            <Option value="flexible">Гибкий график работы</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="payment" label="Оплата" rules={[{ required: true }]}>
                        <Select>
                            <Option value="paid">Оплачиваемая</Option>
                            <Option value="unpaid">Неоплачиваемая</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="paymentAmount" label="Сумма оплата (если практика оплачиваемая)">
                        <Input />
                    </Form.Item>
                    <Form.Item name="startDate" label="Дата начала практики" rules={[{ required: true }]}>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item name="requiredSkills" label="Требуемые навыки и квалификация" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="expectations" label="Ожидания и задачи практиканта" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="benefits" label="Бенефиты для студента(например, возможность обучения, практического опыта или перспективы трудоустройства)" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="restrictions" label="Ограничения">
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="additionalInfo" label="Дополнительная информация или комментарии">
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    </div>
    );
}

export default CompanyFormPage;