export async function Repo() {
  // const [response1, response2] = await Promise.all([
  //   fetch("https://api.github.com/users/vercel"),
  //   fetch("https://api.github.com/users/vercel2", {
  //     // next: {
  //     //   revalidate: 30,
  //     // },
  //     // cache: 'force-cache',
  //     cache: "no-store",
  //   }),
  // ]);

  const response1 = await fetch("https://api.github.com/users/vercel");
  const json = await response1.json();

  return (
    <main>
      <div>
        <p>Repos</p>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
    </main>
  );
}
