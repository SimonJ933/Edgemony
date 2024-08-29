import { IUser } from "@/model/user";
import Link from "next/link";

interface CardProps {
  post: IUser;
}
export function Card({ post }: CardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.name}</h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.username}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.website}</p>
      <Link
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href={`/user/${post.id}`}
      >
        READ MORE
      </Link>
    </div>
  );
}

export default Card;
