import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions";

export const Input = () => {

    const dispatch = useDispatch();

    const[data, setData]=useState({name:"",email:"", salary:"",gender:""})
    const handleChange =(e)=>{
        setData({...data, [e.target.name]:e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(createUser(data));
        setData({ name: "", email: "", salary: "", gender: "" });
    }

  return (
    <div className="relative m-20 overflow-x-auto shadow-md sm:rounded-lg">
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="salary"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={data.salary}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Name"
            required
          />
        </div>

        <label
          htmlFor="gender"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Gender
        </label>
        <div className="mb-4 flex items-center">
          <input
            id="gender-option-1"
            type="radio"
            name="gender"
            value={"male"}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="gender-option-1"
            className="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            id="gender-option-2"
            type="radio"
            name="gender"
            value={"female"}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="gender-option-2"
            className="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
};
