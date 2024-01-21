"use client"

import { useState } from "react"


const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description })
      })
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Title'
      />

    <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Description'
      />
      <button type="submit" className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Topic</button>
    </form>
  )
}

export default page
