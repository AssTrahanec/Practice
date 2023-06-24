import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hook';
import {getCompanies, getPractices, getPublicPractices} from '../store/thunks/assests';
import Navbar from '../components/NavBar';
import CompanyCard from '../components/CompanyCard';
import { Spin, Row, Col } from 'antd';
function innerJoinPracticesAndCompanies(practices, companies) {
    if(practices) {
    const joinedData = [];
        practices.forEach((practice) => {
            const companyId = practice.company_id;
            const company = companies.find((company) => company.company_id === companyId);

            if (company) {
                const joinedItem = {...practice, ...company};
                joinedData.push(joinedItem);
            }
        });
        return joinedData;
    }
    return null
}

const HomePage = () => {
    const { companies, publicPractices, isLoading } = useAppSelector((state) => state.assets);
    const dispatch = useAppDispatch();
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [practicesToShow, setPracticesToShow] = useState(null);
    useEffect(() => {
        dispatch(getCompanies());
        dispatch(getPublicPractices());
    }, []);
    useEffect(() => {
        if (!companies || !publicPractices) {
            return;
        }
        setPracticesToShow(innerJoinPracticesAndCompanies(companies, publicPractices));
    }, [companies, publicPractices]);


    const handleCardClick = (cardId) => {
        setExpandedCardId(cardId);
    };

    return (
        <div className="homepage">
            <Navbar />
            <div className="homepage-content">
                {isLoading ? (
                    <div className="loader">
                        <Spin size="large" />
                    </div>
                ) : (
                    <Row gutter={[16, 16]}>
                        {practicesToShow && practicesToShow.length > 0 ? (
                            practicesToShow.map((company) => (
                                <Col key={company.id} xs={24} sm={24} md={24} lg={24}>
                                    <CompanyCard
                                        company={company}
                                        expanded={company.id === expandedCardId}
                                        onClick={handleCardClick}
                                    />
                                </Col>
                            ))
                        ) : (
                            <div>Нет доступных практик</div>
                        )}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default HomePage;
