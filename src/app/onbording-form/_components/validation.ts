import z from "zod"

export const exhibitorSchema = z.object({
    companyName: z.string(),
    companyRegistrationNumber: z.number(),
    registeredAddress: z.string(),
    city: z.string(),
    state: z.string(),
    pinCode: z.string(),
    primaryContactName: z.string(),
    designation: z.string(),
    emailAddress: z.string().email("You must give a valid email"),
    phoneNumber: z.number().min(10, { message: "Enter your phone number" }),
    website: z.string().min(5, { message: "Enter your website URL" }).optional(),
    socialMediaHandle: z.string().optional(),
    typeOfIndustry: z.string(),
    gstIn: z.string(),
})
