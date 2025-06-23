import instance from "@/instance/api";
import { useEffect, useState } from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

function Spinner() {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <div className="spinner" />
      <style>{`
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}

export default function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
      return;
    }

    async function heartBeat() {
      try {
        await instance.get("/heartbeat");
        setIsLoading(false);
      } catch (error) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    heartBeat();
  }, []);

  if (isLoading) return <Spinner />;

  return (
      <div className="w-full min-h-screen flex flex-col">
        {/* <Header /> */}
        <SideMenu />
      <div className="w-full h-full pt-18 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
        {children}
      </div>
    </div>
  );
}
