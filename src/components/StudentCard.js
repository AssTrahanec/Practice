import { Card, Button, Tag } from 'antd';

const StudentCard = ({ student, onAccept, onReject }) => {
    const handleAccept = () => {
        onAccept(student);
    };

    const handleReject = () => {
        onReject(student);
    };

    return (
        <Card
            style={{ marginBottom: 16, backgroundColor: student.status === 'rejected' ? '#ffe6e6' : 'white' }}
            actions={student.status === 'accepted' ? [<Tag color="green">Accepted</Tag>] : []}
        >
            <p>Specialty: {student.specialty}</p>
            <p>AvgMark: {student.avg_mark}</p>
            <p>Email: {student.student_email}</p>
            <p>Phone: {student.student_phone_number}</p>
            <p>Skills: {student.skills}</p>
            <p>Experience: {student.work_experience}</p>
            <p>Language Skills: {student.language_skills}</p>
            <p>Projects Link: {student.projects_link}</p>
            {student.status === 'rejected' && <Tag color="red">Rejected</Tag>}
            {student.status === 'pending' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <Button type="primary" onClick={handleAccept}>Accept</Button>
                    <Button type="ghost" onClick={handleReject} style={{ color: 'white', backgroundColor: 'red'}}>
                        {student.status === 'rejected' ? 'Rejected' : 'Reject'}
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default StudentCard;
