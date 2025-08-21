"use client";
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
    <section className="bg-gray-50 px-8 md:px-20 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">
          Your <span className="text-yellow-500">Information</span>
        </h2>
        <form className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="border p-3 rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <input
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
          />

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

          <button className="col-span-2 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full font-semibold shadow mt-4">
            → Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default InformationForm;
