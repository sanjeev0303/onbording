import * as z from "zod";

export const exhibitorSchema = z.object({
    companyName: z.string().min(1, { message: "Required" }),
    city: z.string().min(1, { message: "Required" }),
    state: z.string().min(1, { message: "Required" }),
    pinCode: z.string().min(1, { message: "Required" }),
    nameOfRepresentative: z.string().min(1, { message: "Required" }),
    descriptionOfRepresentative: z.string().min(1, { message: "Required" }),
    designation: z.string().min(1, { message: "Required" }),
    phoneNumber: z.string().min(1, { message: "Required" }),
    website: z.string().min(1, { message: "Required" }),
    socialMediaHandle: z.string().min(1, { message: "Required" }),
    typeOfIndustry: z.string().min(1, { message: "Required" }),
    gstIn: z.string().min(1, { message: "Required" }),
});
