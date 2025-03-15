export type ExhibitorFormProps ={
    id: string; // Unique identifier for the form field
    type: "email" | "text"; // Type of input (HTML input type)
    inputType: "input" | "select" // Type of input element (either a select dropdown or input field)
    options?: { value: string; label: string; id: string }[]; // Optional array of options for select inputs
    label?: string; // Optional label for the form field
    placeholder: string; // Placeholder text for the input field
    name: string; // Name attribute for the input field
}


export const EXHIBITOR_FORM: ExhibitorFormProps[] = [
    {
      id: "1",
      inputType: "input",
      placeholder: "Company Name",
      name: "companyName",
      type: "text",
    },
    {
      id: "2",
      inputType: "input",
      placeholder: "City of company's headquarter",
      name: "city",
      type: "text",
    },
    {
      id: "3",
      inputType: "input",
      placeholder: "State",
      name: "state",
      type: "text",
    },
    {
      id: "4",
      inputType: "input",
      placeholder: "PIN Code",
      name: "pinCode",
      type: "text",
    },
    {
      id: "5",
      inputType: "input",
      placeholder: "Name of the main representative",
      name: "primaryContactName",
      type: "text",
    },
    {
      id: "6",
      inputType: "input",
      placeholder: "Role within the company",
      name: "designation",
      type: "text",
    },
    {
      id: "7",
      inputType: "input",
      placeholder: "Email Address",
      name: "email",
      type: "email",
    },
    {
      id: "8",
      inputType: "input",
      placeholder: "Primary contact number",
      name: "phoneNumber",
      type: "text",
    },
    {
      id: "9",
      inputType: "input",
      placeholder: "Company website URL",
      name: "website",
      type: "text",
    },
    {
      id: "10",
      inputType: "input",
      placeholder: "Link of company social media account",
      name: "socialMediaHandle",
      type: "text",
    },
    {
      id: "11",
      inputType: "select",
      placeholder: "Nature of business",
      name: "typeOfIndustry",
      type: "text",
      options: [
        { value: "1", label: "Manufacturing", id: "1" },
        { value: "2", label: "IT(Industrial Technology)", id: "2" },
        { value: "3", label: "Agri-Tech", id: "3" },
        { value: "4", label: "Agri-Product", id: "4" },]
    },
    {
      id: "12",
      inputType: "input",
      placeholder: "GST Identification Number",
      name: "gstIn",
      type: "text",
    },

  ];
