"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { exhibitorSchema } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EXHIBITOR_CONSTANT } from "../constants";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";

const ExhibitorInfoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof exhibitorSchema>>({
    resolver: zodResolver(exhibitorSchema),
  });

  const submitInfo = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const formData = new FormData();

      // Append all form fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      // Append Logo file
      const logoInput = document.getElementById("logo") as HTMLInputElement;
      if (logoInput?.files?.length) {
        formData.append("logo", logoInput.files[0]);
      }

      // Append Banner file
      const bannerInput = document.getElementById("banner") as HTMLInputElement;
      if (bannerInput?.files?.length) {
        formData.append("banner", bannerInput.files[0]);
      }

      // Debugging log
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      // Send to backend
      const res = await fetch("http://localhost:3000/protected/register", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (res.ok) {
        setMessage("✅ Form submitted successfully!");
        reset();
        // Also reset file inputs manually
        logoInput.value = "";
        bannerInput.value = "";
      } else {
        setMessage("❌ Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("❌ Error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={submitInfo} className="flex flex-col gap-5 mt-10">
        {EXHIBITOR_CONSTANT.exhibitorForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            register={register}
            errors={errors}
          />
        ))}

        {/* File Upload: Logo */}
        <label className="flex flex-col gap-2 text-white">
          Upload Company's Logo
          <input
            type="file"
            id="logo"
            className="bg-[#09090B] border border-white rounded-xl text-[#B4B0AE] p-2"
            accept="image/*"
          />
        </label>

        {/* File Upload: Banner */}
        <label className="flex flex-col gap-2 text-white">
          Upload Banner
          <input
            type="file"
            id="banner"
            className="bg-[#09090B] border border-white rounded-xl text-[#B4B0AE] p-2"
            accept="image/*"
          />
        </label>

        {/* Submit Button */}
        <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>

        {/* Feedback Message */}
        {message && (
          <p className="text-center text-white mt-3">{message}</p>
        )}
      </form>

      {/* Debugging: Validation Errors */}
      {Object.keys(errors).length > 0 && (
        <div className="mt-4 text-red-400">
          <h3>Validation Errors:</h3>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExhibitorInfoForm;
