"use client";
import React, { createContext } from "react";

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FunctionComponent<
  LanguageProviderProps
> = (props) => {
  const [lang, setLang] = React.useState<string>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
