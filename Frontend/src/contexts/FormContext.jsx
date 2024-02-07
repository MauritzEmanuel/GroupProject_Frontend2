import React, { createContext, useContext, useState } from 'react';

// Skapar en ny kontext
const FormContext = createContext();

// En anpassad hook för att använda FormContext
export const useFormContext = () => useContext(FormContext);

// En Provider-komponent för att tillhandahålla formulärdatan
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    homeLev: "",
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

  // En funktion för att uppdatera formulärdatan
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