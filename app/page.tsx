import Link from "next/link"

export default  function home(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm 1">
        <h1 className="text-4xl font-bold mb-5"> CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <li>
          <Link href='./week-2'>Week-2 Page</Link>
          </li>
          <li>
            <Link href='./Week-3'>Week-3 Page</Link>
          </li>
          <li>
            <Link href = './Week-4'>Week-4 Page</Link>
          </li>
          <li>
            <Link href = './Week-5'>Week-5 Page </Link>
          </li>
          <li>
            <Link href = './Week-6'>Week-6 Page</Link>
          </li>
          <li>
            <Link href ='./Week-7'>Week-7 Page</Link>
          </li>
          <li>
            <Link href ='./Week-8'>Week-8 Page</Link>
          </li>
          <li>
            <Link href ='./Week-10'>Week-10 Page</Link>
          </li>
          

      </div>

    </div>
    </main>
  );
}


