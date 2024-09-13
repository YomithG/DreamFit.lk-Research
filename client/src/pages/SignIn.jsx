import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Spinner, Alert, Button, Label, TextInput } from "flowbite-react";

export default function SignIn() {
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      {/* left */}
      <div className="flex-1">
        <Link to="/" className="font-bold dark:text-white text-4xl">
          <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-lg text-white">
            DreamFit
          </span>
          .Lk
        </Link>
        <p className="text-sm mt-5">
        Welcome to DreamFit, your ultimate online destination for the latest trends and timeless fashion!
        </p>
      </div>

      {/* right */}
      <div className="flex-1">
        <form className="flex flex-col gap-4" >
          <div>
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="name@company.com"
              id="email"
              // onChange={handleChange} // Moved onChange to TextInput
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="**************"
              id="password"
              // onChange={handleChange} // Moved onChange to TextInput
            />
          </div>

          <Button
            gradientDuoTone="greenToBlue"
            type="submit"
            // disabled={loading}
          >
            {/* {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : ( */}
              Sign In
            {/* )} */}
          </Button>
          {/* <OAuth /> */}
        </form>

        <div className="flex gap-2 text-sm mt-5">
          <span>Don't Have an account?</span>
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </div>
        {/* {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )} */}
      </div>
    </div>
  </div>
  )
}