export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <text className="text-7xl text-center sm:text-center font-[family-name:var(--font-geist)]"> 
          <b>Ascendance</b>
        </text>
        <ol className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          <li>Attendance tracking app</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={"/user"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Clock in as a user
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Track attendance of users
          </a>
        </div>
      </main>
    </div>
  );
}
