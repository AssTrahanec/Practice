import React, { useState } from 'react';
import { Button, Select, InputNumber, message, Typography, Row, Col, Divider, Card, Space } from 'antd';
import { DownloadOutlined, UserOutlined, BuildOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import Navbar from "../components/NavBar";
import {useAppDispatch} from "../utils/hook";
import {signUp} from "../store/thunks/assests";

const { Option } = Select;
const { Title } = Typography;

const RegistrationPage = () => {
    const dispatch = useAppDispatch();
    const [role, setRole] = useState([]);
    const [userCount, setUserCount] = useState({student: 0, company: 0});

    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handleUserCountChange = (value, name) => {
        setUserCount({...userCount, [name]: value});
    };

    const handleGenerate = () => {
        if (!role.length) {
            message.error('Пожалуйста, выберите хотя бы одну роль!');
            return;
        }

        let users = [];
        try {
            Object.keys(userCount).forEach(userRole => {
                for (let i = 0; i < userCount[userRole]; i++) {
                    users.push({
                        role: userRole === 'student' ? 'student' : 'company',
                        password: `${userRole}${Date.now()}${Math.random().toString(36).substring(7)}`,
                        login: `${userRole}login${Date.now()}${Math.random().toString(36).substring(7)}`,
                    });
                }
            });
            console.log(users);

            const registrationPromises = users.map(user => dispatch(signUp(user)));

            Promise.all(registrationPromises)
                .then(responses => {
                    console.log('Все пользователи успешно зарегистрированы:', responses);
                    const wb = XLSX.utils.book_new();
                    const ws = XLSX.utils.json_to_sheet(users);
                    XLSX.utils.book_append_sheet(wb, ws, 'Users');
                    XLSX.writeFile(wb, 'users.xlsx');
                    message.success('Excel файл успешно создан, пользователи зарегистрированы!');
                })
                .catch(error => {
                    console.error('Ошибка при регистрации пользователей:', error);
                    message.error('Ошибка при регистрации пользователей. Excel файл не будет создан.');
                });
        } catch (error) {
            console.error('Ошибка при генерации пользователей:', error);
            message.error('Ошибка при генерации пользователей. Excel файл не будет создан.');
        }
    };


    return (
        <div >
            <Navbar />
            <Card>
                <Title level={2}>Регистрация пользователей</Title>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%', marginBottom: '20px' }}
                    placeholder="Выберите роли"
                    defaultValue={role}
                    onChange={handleRoleChange}
                >
                    <Option key='student'>Студент</Option>
                    <Option key='company'>Предприятие</Option>
                </Select>

                <Space direction="vertical">
                    <Row gutter={16}>
                        {role.includes('student') &&
                            <Col>
                                <Title level={4}><UserOutlined /> Студенты</Title>
                                <InputNumber
                                    min={1}
                                    max={100}
                                    defaultValue={userCount.student}
                                    onChange={(value) => handleUserCountChange(value, 'student')}
                                    placeholder='Количество студентов'
                                />
                            </Col>}

                        {role.includes('company') &&
                            <Col>
                                <Title level={4}><BuildOutlined /> Предприятия</Title>
                                <InputNumber
                                    min={1}
                                    max={100}
                                    defaultValue={userCount.company}
                                    onChange={(value) => handleUserCountChange(value, 'company')}
                                    placeholder='Количество предприятий'
                                />
                            </Col>}
                    </Row>

                    <Divider />

                    <Button type="primary" onClick={handleGenerate} icon={<DownloadOutlined />}>
                        Скачать Excel
                    </Button>
                </Space>
            </Card>
        </div>
    );
};

export default RegistrationPage;
