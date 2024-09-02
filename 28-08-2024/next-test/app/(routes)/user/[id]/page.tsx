import { getUser } from "@/action/getUser";

interface UserProps {
  params: { id: string };
}
async function UserPage({ params }: UserProps) {
  const { id } = params;
  const user = await getUser(id);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.username}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.phone}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.address.city}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
