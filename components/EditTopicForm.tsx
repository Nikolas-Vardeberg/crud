"use client"

import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const EditTopicForm = ({ id, title, description }) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if(res.ok) {
        throw new Error("failed to update topic");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className='border border-slate-300 p-2.5 outline-none rounded-md'
          type='text'
          placeholder='Topic Title'
        />

      <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className='border border-slate-300 p-2.5 outline-none rounded-md'
          type='text'
          placeholder='Topic Description'
        />
        <Button type="submit" className={cn(buttonVariants({variant: "default" }), "w-fit bg-black text-white font-bold")}>
          Update Topic
        </Button>
      </form>
    </div>
  )
}

export default EditTopicForm;
