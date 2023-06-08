import React, {useEffect, useState} from 'react';
import Navbar from "../components/NavBar";
import CompanyCard from "../components/CompanyCard";
import {useAppDispatch, useAppSelector} from "../utils/hook";
import {getCompanies, getPractices} from "../store/thunks/assests";

function innerJoinPracticesAndCompanies(practices, companies) {
    const joinedData = [];
    practices.forEach((practice) => {
        const companyId = practice.company_id;
        const company = companies.find((company) => company.company_id === companyId);

        if (company) {
            const joinedItem = { ...practice, ...company };
            joinedData.push(joinedItem);
        }
    });
    console.log("joindeddata",joinedData);
    return joinedData;
}
const HomePage = () => {
    const companies = useAppSelector(state=> state.assets.companies)
    const practices = useAppSelector(state => state.assets.practices)
    // console.log("practices", practices)
    // console.log("companies", companies)
    const practicesToShow = innerJoinPracticesAndCompanies(companies, practices)

    const isLoading = useAppSelector(state => state.assets.isLoading)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getCompanies())
        dispatch(getPractices())
    },[])

    const [expandedCardId, setExpandedCardId] = useState(null);
    const handleCardClick = (cardId) => {
        setExpandedCardId(cardId);
    };
    console.log("practiceToShow",practicesToShow)
    return (
        <div>
            <Navbar />
            <div>
                {isLoading ? "Загрузка..." :
                    <div>
                    {practicesToShow.map((company) => (
                        <CompanyCard
                        key={company.id}
                    company={company}
                    expandedCardId={expandedCardId}
                    handleCardClick={handleCardClick}
                    />
                    ))}
                    </div>}
            </div>

        </div>

    );
}

export default HomePage;