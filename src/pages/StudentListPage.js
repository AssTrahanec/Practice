import {useState} from 'react';
import {Row, Col} from 'antd';
import StudentCard from "../StudentCard";
import NavBar from "../NavBar";

const students = [
    {
        Specialty: 'Computer Science',
        AvgMark: 4.5,
        StudentName: 'John Smith',
        StudentEmail: 'john.smith@example.com',
        StudentPhoneNumber: '+1-123-456-7890',
        Skills: ['JavaScript', 'React', 'Node.js'],
        Experience: '2 years',
        LanguageSkills: ['English', 'Spanish'],
        ProjectsLink: 'https://github.com/johnsmith',
        status: 'pending',
    },
    {
        Specialty: 'Engineering',
        AvgMark: 4.0,
        StudentName: 'Alice Johnson',
        StudentEmail: 'alice.johnson@example.com',
        StudentPhoneNumber: '+1-234-567-8901',
        Skills: ['Python', 'MATLAB', 'CAD'],
        Experience: '1 year',
        OverallGPA: 3.5,
        LanguageSkills: ['English', 'German'],
        ProjectsLink: 'https://github.com/alicejohnson',
        status: 'pending',
    },
    {
        Specialty: 'Marketing',
        AvgMark: 4.2,
        StudentName: 'Bob Lee',
        StudentEmail: 'bob.lee@example.com',
        StudentPhoneNumber: '+1-345-678-9012',
        Skills: ['Social Media', 'SEO', 'Content Creation'],
        Experience: '1.5 years',
        OverallGPA: 3.7,
        LanguageSkills: ['English', 'French'],
        ProjectsLink: 'https://github.com/boblee',
        status: 'pending',
    },
    {
        Specialty: 'Business',
        AvgMark: 3.8,
        StudentName: 'Jane Doe',
        StudentEmail: 'jane.doe@example.com',
        StudentPhoneNumber: '+1-456-789-0123',
        Skills: ['Accounting', 'Finance', 'Business Strategy'],
        Experience: '2.5 years',
        OverallGPA: 3.9,
        LanguageSkills: ['English', 'Mandarin'],
        ProjectsLink: 'https://github.com/janedoe',
        status: 'pending',
    },
    {
        Specialty: 'Design',
        AvgMark: 4.3,
        StudentName: 'Samuel Kim',
        StudentEmail: 'samuel.kim@example.com',
        StudentPhoneNumber: '+1-567-890-1234',
        Skills: ['Photoshop', 'Illustrator', 'InDesign'],
        Experience: '2 years',
        OverallGPA: 3.8,
        LanguageSkills: ['English', 'Korean'],
        ProjectsLink: 'https://github.com/samuelkim',
        status: 'pending',
    },
];

const StudentsPage = () => {
    const [studentsList, setStudentsList] = useState(students);

    const handleAccept = (student) => {
        const newStudentsList = studentsList.filter((s) => s !== student);
        student.status = 'accepted';
        setStudentsList([...newStudentsList, student]);
    };

    const handleReject = (student) => {
        const newStudentsList = studentsList.filter((s) => s !== student);
        student.status = 'rejected';
        setStudentsList([...newStudentsList, student]);
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
            <NavBar/>
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