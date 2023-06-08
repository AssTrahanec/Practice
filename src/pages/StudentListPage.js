import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import StudentCard from "../components/StudentCard";
import NavBar from "../components/NavBar";
import { getRequests } from "../store/thunks/assests";
import { useAppDispatch, useAppSelector } from "../utils/hook";
import {instanceAuth} from "../utils/axios";

const StudentsPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getRequests());
    }, []);

    const requests = useAppSelector(state => state.assets.requests);
    const [studentsList, setStudentsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const studentsData = [];

            for (const request of requests) {
                const response = await instanceAuth.get(`api/students/${request.student_id}`);
                const student = response.data
                const mergedStudent = { ...student, ...request };
                studentsData.push(mergedStudent);
            }

            setStudentsList(studentsData);
        };

        fetchData();
    }, [requests]);
    console.log(studentsList)

    const updateRequestStatus = async (requestId, status) => {
        try {
            const response = await instanceAuth.put(`api/requests/${requestId}`, { status })
            console.log('Request status updated successfully');
        } catch (error) {
            console.log('Failed to update request status', error);
        }
    };

    const handleAccept = async (student) => {
        const newStudentsList = studentsList.filter((s) => s !== student);
        student.status = 'accepted';
        setStudentsList([...newStudentsList, student]);
        await updateRequestStatus(student.id, 'accepted');
    };

    const handleReject = async (student) => {
        const newStudentsList = studentsList.filter((s) => s !== student);
        student.status = 'rejected';
        setStudentsList([...newStudentsList, student]);
        await updateRequestStatus(student.id, 'rejected');
    };

    const rejectedStudents = studentsList.filter((student) =>
        student.status === 'rejected'
    );

    const pendingStudents = studentsList.filter((student) =>
        student.status === 'pending' && student !== rejectedStudents
    ).concat(rejectedStudents);

    const acceptedStudents = studentsList.filter((student) =>
        student.status === 'accepted'
    );

    return (
        <div>
            <NavBar />
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <h2>Pending students</h2>
                    {pendingStudents.length === 0 && <p>No pending students.</p>}
                    {pendingStudents.map((student, index) => (
                        <StudentCard
                            key={index}
                            student={student}
                            onAccept={handleAccept}
                            onReject={handleReject}
                        />
                    ))}
                </Col>
                <Col xs={24} md={12}>
                    <h2>Accepted students</h2>
                    {acceptedStudents.length === 0 && <p>No accepted students.</p>}
                    {acceptedStudents.map((student, index) => (
                        <StudentCard
                            key={index}
                            student={student}
                        />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default StudentsPage;
