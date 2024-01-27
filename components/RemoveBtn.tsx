"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { buttonVariants } from './ui/button'

const RemoveBtn: React.FC<{ id: string }> = ({ id }) => {

  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className={`${buttonVariants({ variant: "outline" })} text-red-400`}>
      Delete
      <HiOutlineTrash className="inline-block h-4 w-4 ml-1" />
    </button>
  )
}

export default RemoveBtn
