import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";
import UserCard from "@/components/ui/user-card";
import { UserData } from "@/mock/users-data";

export default function UsersPage() {
  
const users = UserData
console.log(users)

  return (
    <div id="Container-user" className="flex min-h-screen">
      <div id="navigation" className="bg-white w-[250px] flex flex-col items-center gap-8 p-5"
      >
        <h1 className="text-3xl text-black font-bold">Connect</h1>
        <div className="flex flex-col gap-3">
          <Link href="/users">
          <button className="text-white bg-black w-[150px] p-2 rounded-lg flex gap-2">
            <IconUser /> User
            </button>
            </Link>
            <Link href="/hak-akses">
          <button className="text-black w-[150px] p-1 rounded-lg flex gap-2">
            <IconKey />
            Hak Akses
            </button>
            </Link>
          <button className="text-black w-[150px] p-1 rounded-lg flex gap-2">
            <IconLogout />
            Logout
            </button>
        </div>
        </div>
      <div id="container" className="bg-white w-full">
        <Input placeholder="Cari User" />

        <div id="list-user" className="flex flex-col gap-2 w-full mt-2">
         {users.map((user, index) => (
             <UserCard
             key={index}
             fullname={user.fullname}
             email={user.email}
             roles={user.roles}
             status={user.status}
             />
         ))}
        </div>
      </div>
    </div>
  );
}
