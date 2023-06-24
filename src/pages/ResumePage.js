import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import ResumeForm from '../components/ResumeForm';
import ResumeView from "../components/ResumeView";
import Navbar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../utils/hook";
import {
    createRequest,
    createResume,
    getRequests, getResume,
    getStudent,
    updateRequest, updateResume,
    updateStudent
} from "../store/thunks/assests";
import {instanceAuth} from "../utils/axios";

const { Title } = Typography;
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
const ResumePage = () => {
    const dispatch = useAppDispatch();
    const savedRequest = useAppSelector(state => state.assets.resume)
    const student = useAppSelector(state => state.assets.student);
    // const requests = useAppSelector(state => state.assets.requests);
    const [resumeData, setResumeData] = useState(initialResumeData);
    const [editingMode, setEditingMode] = useState(true);
    useEffect(() => {
        dispatch(getResume())
        dispatch(getStudent());
        // dispatch(getRequests());
    }, []);

    useEffect(() => {
        console.log("resumeData",resumeData)
    }, [resumeData]);
    // console.log(requests)
    // console.log(student);
    //const savedRequest = requests.find(request => request.student_id === student.student_id && request.status === 'saved');
    //console.log(savedRequest)
    useEffect(() => {
        let updatedResumeData = {};
        let updatedStudentData = {};
        if(student!== null){
            setEditingMode(false)
                updatedStudentData = {
                student_name: student.student_name,
                student_email: student.student_email,
                student_phone_number: student.student_phone_number,
                specialty: student.specialty,
                avg_mark: student.avg_mark
            };
            setResumeData(updatedResumeData)

        }
        if(savedRequest!== null && savedRequest){
                updatedResumeData = {
                avg_mark: savedRequest.avg_mark,
                skills: savedRequest.skills,
                work_experience: savedRequest.work_experience,
                projects_link: savedRequest.projects_link,
                language_skills: savedRequest.language_skills.split(',').map((item) => item.trim()),
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

    }, [student, savedRequest]);



    const handleEdit = () => {
        setEditingMode(true);
    };

    const handleSave = async (data) => {
        const studentData = {
            student_name: data.student_name,
            student_email: data.student_email,
            student_phone_number : data.student_phone_number,
            specialty: data.specialty,
            avg_mark: parseFloat(data.avg_mark)
        };

        const requestData = {
            skills: data.skills,
            work_experience: data.work_experience,
            projects_link: data.projects_link,
            language_skills: Array.isArray(data.language_skills) ? data.language_skills.join(', ') : null,
            status: 'saved'
        };

        const id = sessionStorage.getItem("userid");
        // Объедините studentData и id в одном объекте
        dispatch(updateStudent({ studentData, id}));
        if(savedRequest){
            const id = savedRequest.id

            dispatch(updateResume({request: requestData, id}))

        }
        else {
            dispatch(createResume(requestData))
        }
        setResumeData(data);
        setEditingMode(false);
    };

    return (
        <div>
            <Navbar />
            <div style={{ padding: '2rem' }}>
                {editingMode  && resumeData.student_name!==''? (
                    <ResumeForm initialValues={resumeData} onFinish={handleSave} />
                ) : (
                    <ResumeView data={resumeData} onEdit={handleEdit} />
                )}
            </div>
        </div>
    );
};

export default ResumePage;
