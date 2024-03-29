import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'
import { buttonVariants } from "./ui/button";

const getTopics = async (): Promise<{ topics: Topic[] }> => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store", 
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.error("Error loading topics", error);
        // Handle the error or rethrow it if needed
        throw error;
    }
};

interface Topic {
    _id: number;
    title: string;
    description: string;
    // Add any other properties of your topic object here
}

const TopicList  = async () => {
    const { topics } = await getTopics();

    return (
        <>
            {topics.map((t) => (
              <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 bg-white mx-auto items-center">
                <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div className="text-gray-500">{t.description}</div>
                </div>
          
              <div className="flex gap-2">
                  <RemoveBtn id={t._id}/>
                  <Link href={`/editTopic/${t._id}`} className={buttonVariants({variant:"outline"})}>
                      Update
                  </Link>
              </div>
          </div>
          
            
            ))}
        </>
    );
};

export default TopicList;