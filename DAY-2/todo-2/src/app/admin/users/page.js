import { userModel } from "@/utils/db";

//server component
export default async function Users() {
  const data = await userModel.find().select("-password");
  //const response=await fetch ("http://localhost:3000/api/v1/users");
  //const data=await response.json();
  //   return (
  //     <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f1ea] px-4 py-10">
  //       <div className="w-full max-w-3xl rounded-[30px] border border-[#eadcca] bg-[#fffaf5] p-8 shadow-[0_22px_55px_rgba(109,72,61,0.12)]">
  //         <h1 className="mb-8 text-center text-3xl font-bold text-[#2d2a2a]">Users</h1>
  //         <ul className="space-y-4">
  //           {users.map((user) => (
  //             <li
  //               key={user._id}
  //               className="rounded-lg border border-[#e3cfbe] bg-[#f8f3ee] px-4 py-2 text-[#2d2a2a
  // }
  return (
    <div>
      <h2> Admin page: Available UsersPage</h2>
      {data.map((userObj) => {
        return <div key={userObj._id}> {userObj.username} </div>;
      })}
    </div>
  );
}
