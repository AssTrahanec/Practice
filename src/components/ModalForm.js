import React, {useEffect, useState} from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import { instanceAuth } from "../utils/axios";
import ResumeForm from './ResumeForm';
import {useAppDispatch, useAppSelector} from "../utils/hook";
import {
    createResume,
    getCompanies,
    getPublicPractices,
    getRequests,
    getResume,
    getStudent,
    updateResume, updateStudent
} from "../store/thunks/assests";

const ModalForm = ({ company, visible, onCancel, onFinish }) => {

    const initialResumeData = {
        // full_name: student.student_name,
        // email: student.student_email,
        // phone_number: student.phone_number,
        // specialty: student.specialty,
        student_name: '',
        student_email: '',
        student_phone_number: '',
        specialty: '',
        avg_mark: null,
        skills: '',
        work_experience: '',
        projects_link: '',
        language_skills: [],
    };

    const dispatch = useAppDispatch();
    const savedRequest = useAppSelector(state => state.assets.resume)
    const student = useAppSelector(state => state.assets.student);
    const [resumeData, setResumeData] = useState(initialResumeData);
    const [requests, setRequests] = useState(null);
    const [pendingRequest, setPendingRequest] = useState(false)
    const savedData = {
        student_name: 'Иванов Иван Иванович',
        student_email: 'ivanov@example.com',
        student_phone_number: '+7 (123) 456-78-90',
        specialty: 'Web Development',
        avg_mark: '9.5',
        skills: 'JavaScript, React, HTML, CSS',
        work_experience: 'Experience details',
        projects_link: 'Link to projects',
        language_skills: ['English', 'Russian']
    };
    useEffect(() => {
        dispatch(getResume())
        dispatch(getStudent());
        setResumeData(savedData);
        // dispatch(getRequests());
    }, []);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await instanceAuth.get('/api/requests');
            setRequests(response.data.data);
        };

        fetchRequests();
    }, []);

    useEffect(() => {
        if(requests){
            const request = requests.find(
                (request) =>
                    request.student_id === parseInt(sessionStorage.getItem("userid")) &&
                    request.company_id === company.company_id &&
                    request.status === "pending"
            );

            if (request) {
                setPendingRequest(true)
            } else {
                setPendingRequest(false)
            }
        }
    }, [pendingRequest, requests]);
    useEffect(() => {

        let updatedResumeData = {};
        let updatedStudentData = {};
        if(student!== null){
            updatedStudentData = {
                student_name: student.student_name,
                student_email: student.student_email,
                student_phone_number: student.student_phone_number,
                specialty: student.specialty,
                avg_mark: student.avg_mark
            };
            setResumeData(updatedResumeData)

        }
        if(savedRequest !== null && savedRequest){
            updatedResumeData = {
                avg_mark: savedRequest.avg_mark,
                skills: savedRequest.skills,
                work_experience: savedRequest.work_experience,
                projects_link: savedRequest.projects_link,
                language_skills: savedRequest.language_skills && savedRequest.language_skills.split(',').map((item) => item.trim()),
            };
            setResumeData(updatedResumeData)
        }
        if(student && savedRequest){
            updatedResumeData = {
                ...updatedResumeData,
                ...updatedStudentData,
            };
            setResumeData(updatedResumeData)
        }

    }, [student, savedRequest, requests]);

    const handleFormSubmit = async (values) => {
        if(pendingRequest){
            notification.error({
                message: 'Ошибка',
                description: 'Ваш запрос уже рассматривается.',
                duration: 3
            });
            onCancel();
        }
        else {
            try {
                const requestData = {
                    company_id: company.company_id,
                    student_id: parseInt(sessionStorage.getItem("userid")),
                    status: 'pending',
                    projects_link: values.projects_link,
                    language_skills: values.language_skills ? values.language_skills.join(', ') : '',
                    work_experience: values.work_experience,
                    skills: values.skills
                };

                const response = await instanceAuth.post("/api/requests", requestData);
                notification.success({
                    message: 'Успешно',
                    description: 'Заявка успешно добавлена.',
                    duration: 3
                });
                dispatch(getCompanies());
                dispatch(getPublicPractices());

                const requestDataForResume = {
                    skills: requestData.skills,
                    work_experience: requestData.work_experience,
                    projects_link: requestData.projects_link,
                    language_skills: Array.isArray(requestData.language_skills) ? requestData.language_skills.join(', ') : null,
                    status: 'saved'
                };
                const studentData = {
                    student_name: values.student_name,
                    student_email: values.student_email,
                    student_phone_number : values.student_phone_number,
                    specialty: values.specialty,
                    avg_mark: parseFloat(values.avg_mark) ? parseFloat(values.avg_mark) : null
                };
                const id = sessionStorage.getItem("userid");
                dispatch(updateStudent({ studentData, id}));

                if(savedRequest !== null && savedRequest) {
                    const id = savedRequest.id
                    dispatch(updateResume({request: requestDataForResume, id}))
                }
                else {
                    dispatch(createResume(requestDataForResume))
                }
                onCancel();
            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <Modal
            title={`Заявка на практику "${company.name}"`}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
                <ResumeForm initialValues={resumeData} onFinish={handleFormSubmit} />
        </Modal>
    );
};

export default ModalForm;
