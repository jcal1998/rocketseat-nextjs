import Link from "next/link";

export interface paginationProps {
  id: string;
  title: string;
}

interface PageProps {
  params: {
    page: string;
  };
}

export const revalidate = 100;

// export async function generateStaticParams() {
//   return Array.from({ length: 3 }, (_, index) => {
//     return {
//       page: String(index + 1),
//     };
//   });
// }

export default async function Pagination({ params }: PageProps) {
  console.log("renderizou o server component");

  const res = await fetch(
    `http://localhost:3000/api/pagination?page=${params.page}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  const items: paginationProps[] = await res.json();

  return (
    <div>
      <h1>Page: {params.page}</h1>
      {items.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <Link href={`/pagination/${Number(params.page) - 1}`} prefetch={false}>
        <button>Previous</button>
      </Link>
      <Link href={`/pagination/${Number(params.page) + 1}`} prefetch={false}>
        <button>Next</button>
      </Link>
    </div>
  );
}
