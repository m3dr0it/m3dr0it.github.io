"use client";

import Editor from "../../components/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const data = localStorage.getItem("whoami"); // Ganti 'dataKey' dengan kunci yang kamu butuhkan

    if (!data) {
      if(data != "iamnoone"){
        router.push("/");
      }
    }
  }, []);

  const [content, setContent] = useState<string>("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan 'content', seperti mengirim ke server
    console.log("Submitted content:", content);
  };

  return (
    <div className="p-10">
      <h1>Gimana ?</h1>
      <form onSubmit={handleSubmit}>
        <Editor value={content} onChange={handleChange} />
        <button
          type="button"
          className=" text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
        >
          Simpan dulu
        </button>
      </form>
    </div>
  );
};

export default Home;
