import React from 'react';

interface EmployeeInfoProps {
  empId: string;
  empName: string;
  designation: string;
  empTagBattery: string;
  empStatus: string;
  sensorId: string;
  sensorStatus: string;
  lastUpdate: string;
}

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({
  empId,
  empName,
  designation,
  empTagBattery,
  empStatus,
  sensorId,
  sensorStatus,
  lastUpdate,
}) => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '50px',
      backgroundColor: '#f8f9fa',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      marginBottom: '20px',
    },
    info: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: '10px',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Live Tracking</h1>
      <div style={styles.info}>
        <span>Emp ID:</span>
        <span>{empId}</span>
      </div>
      <div style={styles.info}>
        <span>Emp Name:</span>
        <span>{empName}</span>
      </div>
      <div style={styles.info}>
        <span>Designation:</span>
        <span>{designation}</span>
      </div>
      <div style={styles.info}>
        <span>Emp Tag Battery:</span>
        <span style={{ color: 'green' }}>{empTagBattery}</span>
      </div>
      <div style={styles.info}>
        <span>Emp Status:</span>
        <span style={{ color: 'red' }}>{empStatus}</span>
      </div>
      <div style={styles.info}>
        <span>Sensor ID:</span>
        <span>{sensorId}</span>
      </div>
      <div style={styles.info}>
        <span>Sensor Status:</span>
        <span style={{ color: 'green' }}>{sensorStatus}</span>
      </div>
      {/* ... */}
      <button style={styles.button}>Detail</button>
    </div>
  );
};

export default EmployeeInfo;
