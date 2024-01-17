import Link from "next/link"

export default  function home(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm 1">
       <h1> CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div>
        <Link href="/week-2">Week-2 Page</Link>

     </div>
    </main>
  );
};


