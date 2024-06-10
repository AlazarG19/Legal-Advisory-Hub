import React from "react";
import Content from "./Content";
import Header from "./Header";
import Navigation from "./Navigation";

const Dashboard = () => {
  return (
    <div
      id="kt_app_content_container"
      className="app-container container-fluid"
    >
      <Navigation />

      <div
        className="col-md-12"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: 2,
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width={640}
          height={480}
          src="https://charts.mongodb.com/charts-legal-market-hub-fownzpy/embed/charts?id=6666f12a-6cad-4536-8e51-44a9c8df496d&maxDataAge=3600&theme=light&autoRefresh=true"
        />
        <iframe
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: 2,
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width={640}
          height={480}
          src="https://charts.mongodb.com/charts-legal-market-hub-fownzpy/embed/charts?id=6666f59c-9b3f-4ea5-80d4-1ab1817418be&maxDataAge=3600&theme=light&autoRefresh=true"
        />

        <iframe
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: 2,
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width={640}
          height={480}
          src="https://charts.mongodb.com/charts-legal-market-hub-fownzpy/embed/charts?id=6666fb19-c807-4be2-8f83-0e6bf5fedbb4&maxDataAge=3600&theme=light&autoRefresh=true"
        />
        <iframe
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: 2,
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width={640}
          height={480}
          src="https://charts.mongodb.com/charts-legal-market-hub-fownzpy/embed/charts?id=6666f858-c1ce-4eb0-8fa6-b1ca74070910&maxDataAge=3600&theme=light&autoRefresh=true"
        />
      </div>

      {/* <!--end::Row--> */}
    </div>
  );
};

export default Dashboard;
