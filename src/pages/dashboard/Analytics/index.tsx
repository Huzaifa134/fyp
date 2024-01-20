import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';

// dummy data

const AnalyticsDashboard = () => {
    const [showAlert, setShowAlert] = useState<boolean>(true);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tracking', path: '/tracking/employees_tracking' },
                    { label: 'Employees Tracking', path: 'tracking/employees_tracking', active: true },
                ]}
                title={'Employees Tracking'}
            />

            {/* Your other components or JSX code here */}

        </>
    );
};

export default AnalyticsDashboard;
