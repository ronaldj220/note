"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import * as React from "react";

interface IServicesPageProps {}

const ServicesPage: React.FunctionComponent<IServicesPageProps> = (props) => {
  const langCtx = React.useContext(LanguageContext);
  return (
    <div>
      <p className="text-4xl">Services Page {langCtx.lang}</p>
      <button
        className="bg-gray-300 text-white px-4 py-2"
        type="button"
        onClick={() => langCtx.setLang("EN")}
      >
        Set Language
      </button>
    </div>
  );
};

export default ServicesPage;
