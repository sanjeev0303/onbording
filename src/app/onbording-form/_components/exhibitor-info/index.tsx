"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { exhibitorSchema } from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EXHIBITOR_CONSTANT } from "../constants";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";

const ExhibitorInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<z.infer<typeof exhibitorSchema>>({
    resolver: zodResolver(exhibitorSchema),
  });

  const submitInfo = handleSubmit(async () => {
    // submit logic
    console.log(getValues());
    reset();
  });

  return (
    <div>
        <form onSubmit={submitInfo} className="flex flex-col gap-5 mt-10">
      {EXHIBITOR_CONSTANT.exhibitorForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}
    </form>

    <Button type="submit" className="mt-5 w-full">
        Submit
    </Button>
    </div>
  );
};

export default ExhibitorInfoForm;
