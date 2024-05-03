import React from "react";
import Card from "./Components/Card/Card";

const App = () => {
  const data = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      pulicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      free: "Free Subdomain",
      reports: "Monthly Status Reports",
      choosen:"fa-solid fa-check",
      xmark:"fa-solid fa-xmark ",
      textDim:"text-body-secondary"
      
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 User",
      storage: "50GB Storage",
      pulicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      free: "Free Subdomain",
      reports: "Monthly Status Reports",
      tick:"fa-solid fa-check",
      cross:"fa-solid fa-xmark",
      dullText:"text-body-secondary"
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      storage: "50GB Storage",
      pulicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      free: "Free Subdomain",
      reports: "Monthly Status Reports",
      check:"fa-solid fa-check"
    }
  ];

  return (
    <>
      <Card data={data} />
    </>
  );
};

export default App;
