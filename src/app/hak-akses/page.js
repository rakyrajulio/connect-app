'use client';

import Link from "next/link";
import { IconKey, IconLogout, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

export default function HakAksesPage() {
  const [hakAkses, setHakAkses] = useState([
    { id: 1, nama: 'Admin' },
    { id: 2, nama: 'Employee' }
  ]);

  const [search, setSearch] = useState('');
  const [newAkses, setNewAkses] = useState('');

  const handleAdd = () => {
    if (newAkses.trim() === '') return;
    const newId = hakAkses.length + 1;
    setHakAkses([...hakAkses, { id: newId, nama: newAkses }]);
    setNewAkses('');
  };

  const handleDelete = (id) => {
    setHakAkses(hakAkses.filter(item => item.id !== id));
  };

  const filteredAkses = hakAkses.filter(item =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow">
        <h2 className="text-xl font-bold mb-6">Connect</h2>
        <nav className="flex flex-col gap-2">
          <p href="/users" className="flex items-center gap-2 text-gray-700 hover:font-bold">
            <IconUser/> User
          </p>
          <p href="#" className="flex items-center gap-2 font-bold bg-gray-200 p-2 rounded">
            <IconKey/> Hak Akses
          </p>
          <p href="#" className="flex items-center gap-2 text-gray-700 hover:font-bold">
           <IconLogout/> Logout
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Hak Akses</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Cari Hak Akses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 w-full p-2 border border-gray-300 rounded"
        />

        {/* List Hak Akses */}
        <div id="list-hak-akses" className="flex flex-col gap-2">
          {filteredAkses.map((item, index) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white shadow"
            >
              <div className="flex items-center gap-4">
                {/* No */}
                <span className="bg-black text-white px-3 py-1 text-sm rounded-lg">
                  {index + 1}
                </span>

                {/* Hak Akses */}
                <span className="bg-black text-white px-3 py-1 text-sm rounded-lg">
                  {item.nama}
                </span>
              </div>

              {/* Action */}
              <div className="flex gap-2">
                <button className="bg-black text-white px-3 py-1 text-sm rounded-lg">
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-black text-white px-3 py-1 text-sm rounded-lg"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New */}
        <div className="mt-6 flex gap-2">
          <input
            type="text"
            placeholder="Tambah Hak Akses"
            value={newAkses}
            onChange={(e) => setNewAkses(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            ➕ Tambah
          </button>
        </div>
      </main>
    </div>
  );
}
