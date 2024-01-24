"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter()

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
      });

      if (res.ok) {
        router.push("/");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='border border-slate-300 p-2.5 outline-none rounded-md'
          type='text'
          placeholder='Topic Title'
        />

      <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='border border-slate-300 p-2.5 outline-none rounded-md'
          type='text'
          placeholder='Topic Description'
        />
        <Button type="submit" className={cn(buttonVariants({variant: "default" }), "w-fit bg-black text-white font-bold")}>
          Add Topic
        </Button>

      </form>
    </div>
  )
}

export default page
