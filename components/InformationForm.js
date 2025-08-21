"use client";
import ProfileSvg from "@/public/svgs/ProfileSvg";
import React from "react";
import { useState } from "react";

const InformationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    status: "",
    other: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 py-10 container mx-auto">
      <div className="bg-white rounded-[15px] shadow-infoBoxShadow p-8">
        <h2 className="text-[45px] text-darkBlack font-bold text-center mb-6">
          Your <span className="text-theme">Information</span>
        </h2>
        <form className="grid md:grid-cols-2 gap-5">
          <div className="p-[10px] px-5 rounded-lg bg-[#F5F5F5] text-[18px] font-normal relative">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="placeholder:text-lightGray outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="absolute right-5 top-1/2 translate-x-1/2">
              <ProfileSvg />
            </div>
          </div>
          {/* <input
            type="email"
            name="email"
            placeholder="Enter email address *"
            className="border p-3 rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number *"
            className="border p-3 rounded-lg"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age of student *"
            className="border p-3 rounded-lg"
            value={formData.age}
            onChange={handleChange}
          /> */}

          {/* Status Checkboxes */}
          <div className="col-span-2 space-y-2">
            <p className="font-medium">Student Academic Status *</p>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Awaiting"
                  onChange={handleChange}
                />
                Awaiting CSEC/CAPE Exam Score
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Currently Pursuing"
                  onChange={handleChange}
                />
                Currently Pursuing CSEC or CAPE
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Tertiary"
                  onChange={handleChange}
                />
                In Tertiary Studies
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Age16"
                  onChange={handleChange}
                />
                Age 16+ and Considering Options
              </label>
            </div>
            <textarea
              name="other"
              placeholder="Other: Please state below"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <button className="col-span-2 bg-yellow-400 hover:bg-thetext-theme px-6 py-3 rounded-full font-semibold shadow mt-4">
            → Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default InformationForm;
