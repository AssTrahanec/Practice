import React, { useEffect, useState } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { useAuth } from '../AuthProvider';
import NavBar from '../components/NavBar';
import CompanyView from '../components/CompanyPracticeView';
import CompanyEdit from '../components/CompanyPracticeEditForm';
import {
    getCompanies,
    getCompanyOfCurrentUser,
    getPracticeOfCurrentUser,
    getPractices,
    getPublicPractices, updateCompany, updatePractice
} from "../store/thunks/assests";
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from "../utils/hook";
import moment from "moment";


const CompanyFormPage = () => {
    const initialData = {
        companyName: 'Название предприятия',
        companyDescription: 'Описание предприятия',
        companyAddress: 'Адрес предприятия',
        contactPerson: 'Контактное лицо',
        contactPhoneNumber: 'Контактный номер телефона',
        email: 'max197402@gmail.com',
        website: 'Веб-сайт предприятия',
        practiceDuration: 'Длительность практики',
        workSchedule: 'full-time',
        payment: 'paid',
        paymentAmount: 'Сумма оплаты',
        startDate: dayjs(new Date(2023, 6, 4)),
        requiredSkills: 'Требуемые навыки и квалификация',
        expectations: 'Ожидания и задачи практиканта',
        benefits: 'Бенефиты для студента',
        restrictions: 'Ограничения',
        additionalInfo: 'Дополнительная информация или комментарии',
    };

    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState(initialData);
    const [status,setStatus] = useState("private")
    useEffect(() => {
        setFormData(initialData)
    }, []);

    const { companies, practices, isLoading } = useAppSelector((state) => state.assets);
    const dispatch = useAppDispatch();


    const practice = useAppSelector(state => state.assets.companyPracticeInfo)
    const company = useAppSelector(state => state.assets.companyInfo)
    useEffect(() => {
        dispatch(getCompanyOfCurrentUser());
        dispatch(getPracticeOfCurrentUser());
    }, [editing, status]);

    useEffect(() => {
        if (!practice || !company) {
            return;
        }
        if (practice.start_date != null) {
            const start_date = dayjs(practice.start_date.split('T')[0], 'YYYY-MM-DD');
            setFormData({ ...company, ...practice, start_date: start_date });
        } else {
            const startDate = dayjs('2023-01-01', 'YYYY-MM-DD');
            setFormData({ ...company, ...practice, start_date: startDate, is_payment: false });
        }
        setStatus(practice.practice_status)
    }, [practice, company, editing, status]);
    // useEffect(() => {
    //     if (practice && company) {
    //         if (practice.start_date != null) {
    //             const start_date = dayjs(practice.start_date.split('T')[0], 'YYYY-MM-DD');
    //             setFormData({ ...company, ...practice, start_date: start_date });
    //         } else {
    //             const startDate = dayjs('2023-01-01', 'YYYY-MM-DD');
    //             setFormData({ ...company, ...practice, start_date: startDate, is_payment: false });
    //         }
    //         setStatus(practice.practice_status)
    //     }
    // }, [editing, status]);


    const handleEdit = () => {
        console.log("formdata",formData)
        setEditing(true);
    };

    const handlePublish = () =>{
        const practiceId = practice.id
        if(practice.practice_status === "private"){
            dispatch(updatePractice({practice :{...practice, practice_status: "public"}, id : practiceId}))
            setStatus("public")
        }
        else{
            dispatch(updatePractice({practice :{...practice, practice_status: "private"}, id : practiceId}))
            setStatus("private")
        }
    }
    const handleCancel = () => {
        setEditing(false);
    };

    const handleSave = (values) => {
        values.start_date = moment(values.startDate.$d.toLocaleDateString(), "DD.MM.YYYY").format("YYYY-MM-DDTHH:mm:ssZ");
        delete values.startDate;


        console.log("data",  values.start_date)
        const editedPractice = {
            additional_information: values.additional_information,
            benefits: values.benefits,
            duration: values.duration,
            expectations: values.expectations,
            is_payment: values.is_payment === "true",
            payment_amount: values.payment_amount,
            practice_status: "private",
            required_skills: values.required_skills,
            restrictions: values.restrictions,
            start_date: values.start_date,
            working_hours: values.working_hours,
        };

// Создание объекта company с оставшимися полями
        const editedCompany = {
            address: values.address,
            contact_person: values.contact_person,
            description: values.description,
            email: values.email,
            name: values.name,
            phone_number: values.phone_number,
            website: values.website,
        };
        const practiceId = practice.id
        const companyId = practice.company_id
        console.log(practiceId, companyId)
        dispatch(updatePractice({ practice: editedPractice, id: practiceId }));
        dispatch(updateCompany({ company: editedCompany, id: companyId }));

        console.log("практика",editedCompany);
        console.log("компания",editedPractice);
        setFormData(values);
        setEditing(false);
    };


    return (
        <div>
            <NavBar />
            <div style={{ padding: '50px' }}>
                {editing ? (
                    <CompanyEdit data={formData} onSave={handleSave} onCancel={handleCancel} />
                ) : (
                    <CompanyView data={formData} onEdit={handleEdit} onPublish ={handlePublish}/>
                )}
            </div>
        </div>
    );
};

export default CompanyFormPage;
