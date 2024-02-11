import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    homeLev: "Hemleverans",
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    streetNr: "",
    zipCode: "",
    county: "",
    cardName: "",
    cardNr: "",
    ExpDate: "",
    cvvNr: "",
  });

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};