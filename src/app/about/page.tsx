"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import * as React from "react";

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const langCtx = React.useContext(LanguageContext); // Mendefine context yang ingin digunakan
  return (
    <div>
      <p className="text-6xl">About Page {langCtx.lang}</p>
      <button
        className="bg-gray-300 text-white px-4 py-2"
        type="button"
        onClick={() => langCtx.setLang("ID")}
      >
        Set Language
      </button>
    </div>
  );
};

export default AboutPage;
