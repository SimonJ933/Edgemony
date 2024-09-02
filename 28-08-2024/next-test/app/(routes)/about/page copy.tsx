import { getUsers } from "@/action/getUsers";

async function page() {
  const users = await getUsers();
  console.log(users);

  return (
    <div>
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default page;
