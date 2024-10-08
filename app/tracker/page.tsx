'use client';
import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/track')
      .then((res) => res.json())
      .then((data) => {
        setData(data.arr)
      })
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <text className="text-7xl text-center sm:text-center font-[family-name:var(--font-geist)]"> 
          <b>Ascendance</b>
        </text>
        <ol className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          <li>Track attendance. Refresh page to reload data.</li>
        </ol>
        <div className="container mx-auto py-10">
          {data && <DataTable columns={columns} data={data} />}
        </div>
      </main>
    </div>
  );
}
