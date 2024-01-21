import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';
import EmployeeInfo from './EmployeeInfo'; // import the EmployeeInfo component

import Statistics from './Statistics';
import SessionOverview from './SessionOverview';
import BrowserUsage from './BrowserUsage';
import TrafficSources from './TrafficSources';
import Channels from './Channels';
import SocialMediaTraffic from './SocialMediaTraffic';
import EngagementOverviews from './EngagementOverviews';

// dummy data
import {
    sessionSummary,
    browserUsageData,
    trafficSources,
    channels,
    socialMediaTraffic,
    engagementOverview,
} from './data';

const AnalyticsDashboard = () => {
    const [showAlert, setShowAlert] = useState<boolean>(true);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tracking', path: '/dashboard/analytics' },
                    { label: 'Employees Tracking', path: 'dashboard/analytics', active: true },
                ]}
                title={'Employees Tracking'}
            />

            <EmployeeInfo
                empId="1412"
                empName="Raza"
                designation="Support"
                empTagBattery="80%"
                empStatus="Not at assigned location"
                sensorId="S12T25"
                sensorStatus="Active"
                lastUpdate="23 Feb 2023 10:23:06"
            />
        </>    
    );
};

export default AnalyticsDashboard;
