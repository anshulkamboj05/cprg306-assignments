import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className='text-2xl font-semibold'>Shopping List</h1>
      <Link href = "https://github.com/anshulkamboj05/cprg306-assignments">
        <StudentInfo />
      </Link>
    </main>
    
  );
}