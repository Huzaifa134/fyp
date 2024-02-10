import React, { useEffect, useState } from "react";
// supabase
import supabase from "../../../config/supabaseClient";
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "50px",
      backgroundColor: "#f8f9fa",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      marginBottom: "20px",
    },
    info: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "10px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  const [fetchError, setFetchError] = useState("");
  const [fypData, setFypData] = useState<any>("");
  const myStyle = {
    width: "100%",
  };
  const mapping = {
    marginBottom: "60px",
    border: "1px solid blue",
    padding: "30px",
  };

  useEffect(() => {
    const fetchFypData = async () => {
      const { data, error } = await supabase.from("main").select();
      if (error) {
        setFetchError("could not fetch data");
        setFypData("");
        console.log(error);
      }
      if (data) {
        setFypData(data);
        setFetchError("");
        console.log(data);
      }
    };
    fetchFypData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Live Tracking</h1>
      {fetchError && <p>{fetchError}</p>}
      {fypData && (
        <div style={myStyle}>
          {fypData
            .slice(fypData.length - 3, fypData.length)
            .map((data: any) => (
              <div key={data.id} style={mapping}>
                <div style={styles.info}>
                  <span>Emp ID:</span>
                  <span>{data.id}</span>
                </div>
                <div style={styles.info}>
                  <span>Emp Name:</span>
                  <span>{data.name}</span>
                </div>
                <div style={styles.info}>
                  <span>Designation:</span>
                  <span>{data.designation}</span>
                </div>
                <div style={styles.info}>
                  <span>Emp Tag Battery:</span>
                  <span style={{ color: "green" }}>{empTagBattery}</span>
                </div>
                <div style={styles.info}>
                  <span>Emp Status:</span>
                  <span style={{ color: "red" }}>{data.location}</span>
                </div>
                <div style={styles.info}>
                  <span>Sensor ID:</span>
                  <span>{data.RSSI}</span>
                </div>
                <div style={styles.info}>
                  <span>Sensor Status:</span>
                  <span style={{ color: "green" }}>
                    {data.RSSI ? "Active" : "Offline"}
                  </span>
                </div>
                {/* ... */}
                <button style={styles.button}>Detail</button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeInfo;
