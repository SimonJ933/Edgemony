// "use client";
// import { getUser } from "@/action/getUser";
// import { IUser } from "@/model/user";
// import { useState, useEffect, useTransition } from "react";

// function User({ id }: { id: string }) {
//   const [user, setUser] = useState<IUser | null>(null);
//   const [isPending, startTransition] = useTransition();

//   const handleGetUser = async () => {
//     startTransition(async () => {
//       try {
//         const data = await getUser(id);
//         setUser(data);
//       } catch (error: unknown) {
//         const message = error instanceof Error ? error.message : "An error occurred while downloading user.";
//         console.log(message);
//       }
//     });
//   };

//   useEffect(() => {
//     handleGetUser();
//   }, [id]);

//   return (
//     <div>
//       {isPending && (
//         <div className="flex justify-center items-center h-screen">
//           <div className="relative">
//             <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent border-solid rounded-full animate-spin"></div>
//             <div className="absolute inset-0 flex justify-center items-center">
//               <span className="text-indigo-600 text-lg font-medium">Loading...</span>
//             </div>
//           </div>
//         </div>
//       )}
//       <div>{user?.name}</div>
//     </div>
//   );
// }

// export default User;
