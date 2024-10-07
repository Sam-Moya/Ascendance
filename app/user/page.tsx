'use client';
import { toast, Toaster } from 'sonner'
export default async function Home() {
  const clockin = async () => {
    try{
      const resp = await fetch('/api/clockin', {
        method: 'GET'
      })
      const json = await resp.json();
      console.log(json);
      if (json["result"] == 1) {
        toast.error("Already clocked in")
      } else {
        toast.success("Clocked in")
      }
    } catch (error: unknown) {
      console.log(error)
      toast.error("API request failed")
    }
  }
  const clockout = async () => {
    try{
      const resp = await fetch('/api/clockout', {
        method: 'GET'
      })
      const json = await resp.json();
      console.log(json);
      if (json["result"] == 1) {
        toast.error("Not clocked in yet")
      } else {
        toast.success("Clocked out")
      }
    } catch (error: unknown) {
      console.log(error)
      toast.error("API request failed")
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <text className="text-7xl text-center sm:text-center font-[family-name:var(--font-geist)]"> 
          <b>Ascendance</b>
        </text>
        <ol className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          <li>Clock your attendance for the day.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick = {clockin}
          >
            Clock in
            <Toaster richColors/>
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick = {clockout}
          >
            Clock out
            <Toaster richColors/>
          </button>
        </div>
      </main>
    </div>
  );
}
