export interface paginationProps {
  id: string;
  title: string;
}

export default async function PaginationContent({ page }: { page: number }) {
  const res = await fetch(`http://localhost:3000/api/pagination?page=${page}`, {
    next: {
      revalidate: 30000,
    },
  });

  const items: paginationProps[] = await res.json();

  return (
    <div>
      <h1>Server Side Render</h1>
      {items.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}
