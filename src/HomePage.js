import React, {useState} from 'react';
import { Typography } from 'antd';
import Navbar from "./NavBar";
import CompanyCard from "./CompanyCard";

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

    const handleCardClick = (cardId) => {
        setExpandedCardId(cardId);
    };

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