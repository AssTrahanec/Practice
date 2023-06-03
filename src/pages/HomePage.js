import React, {useEffect, useState} from 'react';
import { Typography } from 'antd';
import Navbar from "../components/NavBar";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";
import {API_ADDRESS} from "../ApiConfig";
const HomePage = () => {
    const companies = [
        {
            id: 1,
            name: 'Предприятие 1',
            description: 'Описание предприятия 1',
            address: 'Адрес предприятия 1',
            contactPerson: 'Имя контактного лица',
            phoneNumber: 'Контактный номер телефона',
            email: 'Адрес электронной почты',
            website: 'Веб-сайт предприятия 1',
            duration: 'Длительность практики',
            workingHours: 'Режим работы',
            payment: 'Оплачиваемая/неоплачиваемая',
            paymentAmount: 'Сумма оплаты',
            startDate: 'Дата начала практики',
            requiredSkills: 'Требуемые навыки и квалификация',
            expectations: 'Ожидания и задачи практиканта',
            benefits: 'Бенефиты для студента',
            restrictions: 'Ограничения',
            additionalInformation: 'Дополнительная информация или комментарии'
        },
        {
            id: 2,
            name: 'Предприятие 2',
            description: 'Описание предприятия 2',
        },
        {
            id: 3,
            name: 'Предприятие 3',
            description: 'Описание предприятия 3',
        },
    ];
    const [expandedCardId, setExpandedCardId] = useState(null);
    //const [companies, setCompanies] = useState([]);
    const handleCardClick = (cardId) => {
        setExpandedCardId(cardId);
    };
    // useEffect(() => {
    //     const fetchCompanies = async () => {
    //         try {
    //             const response = await axios.get(API_ADDRESS+'/api/companies'); // Замените на ваш API endpoint для получения списка компаний
    //             const fetchedCompanies = response.data; // Предполагается, что данные приходят в формате JSON
    //             setCompanies(fetchedCompanies);
    //             console.log("1111")
    //         } catch (error) {
    //             console.error('Error fetching companies:', error);
    //         }
    //     };
    //
    //     fetchCompanies();
    // }, []);
    return (
        <div>
            <Navbar />
            <div>
                {companies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        expandedCardId={expandedCardId}
                        handleCardClick={handleCardClick}
                    />
                ))}
            </div>
        </div>

    );
}

export default HomePage;