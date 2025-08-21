"use client";
import CallSvg from "@/public/svgs/CallSvg";
import MailSvg from "@/public/svgs/MailSvg";
import ProfileSvg from "@/public/svgs/ProfileSvg";
import RightArrowSvg from "@/public/svgs/RightArrowSvg";
import StudentSvg from "@/public/svgs/StudentSvg";
import { HiCheck } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./ui/Button";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .required("Age is required"),
  status: Yup.array().min(1, "Select at least one status"),
  other: Yup.string(),
});

const InformationForm = () => {
  const statusOptions = [
    {
      id: "awaiting",
      label: "Awaiting CSEC/CAPE Exam Score",
      value: "Awaiting",
    },
    {
      id: "pursing",
      label: "Currently Pursuing CSEC or CAPE",
      value: "Currently Pursuing",
    },
    { id: "tertiary", label: "In Tertiary Studies", value: "Tertiary" },
    { id: "age16", label: "Age 16+ and Considering Options", value: "Age16" },
    { id: "other", label: "Other Please State Below", value: "other" },
  ];

  return (
    <section className="px-5 container mx-auto">
      <div className="px-5 py-10 relative">
        <div className="bg-white rounded-[15px] shadow-infoBoxShadow p-8 w-full relative z-10">
          <h2 className="text-[45px] text-darkBlack font-bold text-center mb-4">
            Your <span className="text-theme">Information</span>
          </h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              age: "",
              status: [],
              other: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted ✅", values);
              resetForm();
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <div className="p-[10px] px-4 rounded-lg bg-[#F5F5F5] text-[18px] font-normal relative">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      className="placeholder:text-lightGray outline-none bg-transparent w-full"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ProfileSvg />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="p-[10px] px-4 rounded-lg bg-[#F5F5F5] text-[18px] font-normal relative">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email address *"
                      className="placeholder:text-lightGray outline-none bg-transparent w-full"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <MailSvg />
                    </div>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <div className="p-[10px] px-4 rounded-lg bg-[#F5F5F5] text-[18px] font-normal relative">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number *"
                      className="placeholder:text-lightGray outline-none bg-transparent w-full"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <CallSvg />
                    </div>
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Age */}
                <div>
                  <div className="p-[10px] px-4 rounded-lg bg-[#F5F5F5] text-[18px] font-normal relative">
                    <Field
                      type="number"
                      name="age"
                      placeholder="Age of student *"
                      className="placeholder:text-lightGray outline-none bg-transparent w-full"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <StudentSvg />
                    </div>
                  </div>
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Status Checkboxes */}
                <div className="col-span-2 space-y-3">
                  <p className="font-medium text-[16px] text-darkBlack">
                    Student Academic Status *
                  </p>
                  <div className="flex flex-wrap gap-10">
                    {statusOptions.map((opt) => {
                      const isChecked = values.status.includes(opt.value);
                      return (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            name="status"
                            value={opt.value}
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFieldValue("status", [
                                  ...values.status,
                                  opt.value,
                                ]);
                              } else {
                                setFieldValue(
                                  "status",
                                  values.status.filter(
                                    (val) => val !== opt.value
                                  )
                                );
                              }
                            }}
                            className="peer hidden"
                          />
                          <span
                            className={`w-[25px] h-[25px] rounded-[7px] flex items-center justify-center transition
                          ${
                            isChecked
                              ? "bg-theme border-thebg-theme"
                              : "bg-[#F5F5F5]"
                          }`}
                          >
                            {isChecked && (
                              <HiCheck className="text-[18px] text-white" />
                            )}
                          </span>
                          <span className="text-[#7E7E7E] font-normal text-sm">
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Other Input */}
                <div className="p-[10px] px-4 rounded-lg bg-[#F5F5F5] text-[18px] font-normal">
                  <Field
                    name="other"
                    placeholder="Type your response here"
                    className="placeholder:text-lightGray outline-none bg-transparent w-full"
                  />
                </div>

                <div className="col-span-2 flex items-center justify-center mt-4">
                  <Button title="Submit" type="submit" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="absolute bottom-5 left-0 w-full h-[236px] bg-theme rounded-[20px]"></div>
      </div>
    </section>
  );
};

export default InformationForm;
