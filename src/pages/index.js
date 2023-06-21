import LayoutWrapper from "@/Layouts";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [apiMessage, setApiMessage] = useState("Loading Api Response...");
  const handleClick = () => {
    router.push("/about");
  };
  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch("http://localhost:3000/api/hello");
      const data = await response.json();
      setTimeout(() => {
        setApiMessage(data.message);
      }, 500);
    };
    getMessage();
  }, []);
  return (
    <LayoutWrapper>
      <div style={{ margin: "100px 30px" }}>
        <h1 style={{ marginBottom: "20px" }}>{apiMessage}</h1>
        <button style={{ height:"40px", padding:"10px"}} onClick={handleClick}>Navigate About</button>
      </div>
    </LayoutWrapper>
  );
}
