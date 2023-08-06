import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  console.log("chamou pagination no servidor, page", page);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  });
  const items = await res.json();

  const currentPage = parseInt(page || "1", 10);
  const perPage = 10;

  const pageItems = Array.from({ length: perPage }, (_, index) => {
    const id = index + 1 + (currentPage - 1) * perPage;

    return {
      id: `Item ${id}`,
      title: items[id - 1]?.title,
    };
  });

  return NextResponse.json(pageItems);
}
