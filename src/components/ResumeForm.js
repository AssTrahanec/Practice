import React from 'react';
import { Form, Input, Button, Space, Typography, Divider, Select } from 'antd';
import { UserOutlined, MailOutlined, BookOutlined, PhoneOutlined, BulbOutlined } from '@ant-design/icons';
import InputMask from 'react-input-mask';

const { Title } = Typography;
const { Option } = Select;
const languageOptions = [
    { value: 'english', label: 'Английский' },
    { value: 'spanish', label: 'Испанский' },
    { value: 'french', label: 'Французский' },
    { value: 'german', label: 'Немецкий' },
    { value: 'russian', label: 'Русский' },
    { value: 'chinese', label: 'Китайский' },
    { value: 'japanese', label: 'Японский' },
    { value: 'italian', label: 'Итальянский' },
    { value: 'portuguese', label: 'Португальский' },
    { value: 'korean', label: 'Корейский' },
    { value: 'arabic', label: 'Арабский' },
    { value: 'dutch', label: 'Голландский' },
    { value: 'swedish', label: 'Шведский' },
    { value: 'norwegian', label: 'Норвежский' },
    { value: 'danish', label: 'Датский' },
// Добавьте здесь больше языковых вариантов
];
const ResumeForm = ({ initialValues, onFinish }) => {
    return (
        <Form name="resume" layout="vertical" initialValues={initialValues} onFinish={onFinish} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Резюме
            </Title>
            <Form.Item label="ФИО" name="student_name" rules={[{ required: true, message: 'Введите ФИО' }]}>
                <Input size="large" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="Email" name="student_email" rules={[{ required: true, message: 'Введите Email' }]}>
                <Input size="large" prefix={<MailOutlined />} type="email" />
            </Form.Item>
            <Form.Item
                label="Номер телефона"
                name="student_phone_number"
                rules={[{ required: true, message: 'Введите номер телефона' }]}
            >
                <InputMask
                    mask="+7 (999) 999-99-99"
                    maskChar={null}
                >
                    {() => <Input size="large" prefix={<PhoneOutlined />} placeholder="+7 (123) 456-78-90" />}
                </InputMask>
            </Form.Item>
            <Divider orientation="left" style={{ fontWeight: 'bold' }}>
                Образование и навыки
            </Divider>
            <Form.Item
                label="Специальность"
                name="specialty"
                rules={[{ required: true, message: 'Введите специальность' }]}
            >
                <Input size="large" prefix={<BookOutlined />} />
            </Form.Item>
            <Form.Item
                label="Средняя оценка"
                name="avg_mark"
                rules={[{ required: true, message: 'Введите среднюю оценку' }]}
            >
                <Input
                    size="large"
                    prefix={<BulbOutlined />}
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    placeholder="Введите среднюю оценку"
                />
            </Form.Item>
            <Form.Item label="Ключевые навыки" name="skills">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Divider orientation="left" style={{ fontWeight: 'bold' }}>
                Опыт работы
            </Divider>
            <Form.Item label="Опыт работы" name="work_experience">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Проекты" name="projects_link">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Divider orientation="left" style={{ fontWeight: 'bold' }}>
                Дополнительные сведения
            </Divider>
            <Form.Item label="Языковые навыки" name="language_skills">
                <Select mode="multiple" size="large" style={{ width: '100%' }} placeholder="Выберите языковые навыки">
                    {languageOptions.map((language) => (
                        <Option key={language.value}>{language.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit" size="large">
                        Сохранить
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default ResumeForm;
