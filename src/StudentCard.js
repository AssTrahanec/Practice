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
            <p>Specialty: {student.Specialty}</p>
            <p>AvgMark: {student.AvgMark}</p>
            <p>Email: {student.StudentEmail}</p>
            <p>Phone: {student.StudentPhoneNumber}</p>
            <p>Skills: {student.Skills.join(', ')}</p>
            <p>Experience: {student.Experience}</p>
            <p>OverallGPA: {student.OverallGPA}</p>
            <p>Language Skills: {student.LanguageSkills.join(', ')}</p>
            <p>Projects Link: {student.ProjectsLink}</p>
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
