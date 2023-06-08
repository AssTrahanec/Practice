import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import Navbar from "../components/NavBar";
import RequestStatusCard from "../components/RequestStatusCard";
import {useAppDispatch, useAppSelector} from "../utils/hook";
import {getCompanies, getPractices, getRequests} from "../store/thunks/assests";

const RequestsPage = () => {
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getCompanies())
        dispatch(getRequests())
        dispatch(getPractices())
    },[])


    const isLoading = useAppSelector(state => state.assets.isLoading)
    const practices = useAppSelector(state => state.assets.practices)
    const requests = useAppSelector(state => state.assets.requests)
    const companies = useAppSelector(state => state.assets.companies)
    console.log("request", requests)
    console.log("companies", companies)
    console.log("practices", practices)
    // Объединяем requests с companies и practices
    const joinedRequests = requests.map(request => {
        const companyId = request.company_id;
        const company = companies.find(company => company.company_id === companyId);
        const practice = practices.find(practice => practice.company_id === companyId);

        return { ...request, ...company, ...practice };
    });
    console.log("joinedrequests", joinedRequests)
    return (
        <div>
            <Navbar />
            {isLoading ? "Загрузка" : (
                <div style={{ padding: "24px" }}>
                    <Row gutter={[24, 24]}>
                        {joinedRequests.map((request) => (
                            <Col span={8} key={request.id}>
                                <RequestStatusCard request={request} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default RequestsPage;
