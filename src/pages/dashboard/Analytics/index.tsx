import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

// supabase
// import supabase from "../../../config/supabaseClient";
// component
import PageTitle from "../../../components/PageTitle";

// dummy data
import EmployeeInfo from "./EmployeeInfo";
const AnalyticsDashboard = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  // console.log("hello", supabase);
  // const [fetchError, setFetchError] = useState("");
  // const [fypData, setFypData] = useState<any>("");

  // useEffect(() => {
  //   const fetchFypData = async () => {
  //     const { data, error } = await supabase.from("fyp_table").select();
  //     if (error) {
  //       setFetchError("could not fetch data");
  //       setFypData("");
  //       console.log(error);
  //     }
  //     if (data) {
  //       setFypData(data);
  //       setFetchError("");
  //       console.log(data);
  //     }
  //   };
  //   fetchFypData();
  // }, []);
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tracking", path: "/tracking/employees_tracking" },
          {
            label: "Employees Tracking",
            path: "dashboard/employees_tracking",
            active: true,
          },
        ]}
        title={"Employees Tracking"}
      />
      {/* <div>
        {fetchError && <p>{fetchError}</p>}
        {fypData && (
          <div>
            {fypData.map((data: any) => (
              <div key={data.id}>
                <h1>Name: {data.name}</h1>
                <p>
                  <strong>Designation:</strong> {data.designation}
                </p>
                <p>
                  <strong>location:</strong>
                  {data.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div> */}

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

      {/* Your other components or JSX code here */}
    </>
  );
};

export default AnalyticsDashboard;
