import React from "react"
import { useFormik } from "formik"

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  })
  console.log(formik.values)
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-14 text-3xl font-bold underline text-sky-400">Welcome to Family Quiz</h1>
      <form className="flex flex-col gap-6 w-[400px] bg-white">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Email</span>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Password</span>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <div className="grid place-items-end">
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
