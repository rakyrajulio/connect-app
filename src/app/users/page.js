import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";
import UserCard from "@/components/ui/user-card";

export default function UsersPage() {
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
          <UserCard 
          fullname={"Raky Rajulio"}
          email={"2313108@students.universitasmulia.ac.id"}
          roles={"Owner"}
          status={"Aktif"}/>
          <UserCard 
          fullname={"dika"}
          email={"jokidika23@gmai.com"}
          roles={"Admin"}
          status={"Aktif"}/>
          <UserCard 
          fullname={"alif andhika"}
          email={"alifgta34@gmail.com"}
          roles={"member"}
          status={"Aktif"}/>
          <UserCard 
          fullname={"erwinto"}
          email={"erwinto23@gmail.com"}
          roles={"member"}
          status={"Aktif"}/>
          <UserCard 
          fullname={"raky"}
          email={"westy234@gmail.com"}
          roles={"Orang hilang"}
          status={"Aktif"}/>
          <UserCard 
          fullname={"rosi"}
          email={"eefffk@gmail.com"}
          roles={"Member"}
          status={"Aktif"}/>
        </div>
      </div>
    </div>
  );
}
