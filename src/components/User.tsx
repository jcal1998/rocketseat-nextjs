"use client";

// import { cookies, headers } from "next/headers";
import { useState } from "react";

export function User() {
  const [count, setCount] = useState(0);
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  // quando usar o client a function n pode ser async &*ˆ@*&3678678&@#666ˆ&*!*$%&!ˆ*!ˆ*!*ˆ&*&*!&*!%&*!T!ˆ&#&ˆ%$ˆ&!#ˆ#ˆ&!#ˆ#%ˆ!%ˆ&@ˆ&@ˆ&@
  // quando tiver so uma parte pequena, leva a parte pequena para o client e a parte grande fica no server

  // const userCookies = cookies();
  // const userHeaders = headers();

  //   userCookies.set("authorization", "123", {
  //     path: "/",
  //     maxAge: 60 * 60 * 24 * 7, // 1 week
  //     sameSite: "strict",
  //   });

  // const response = await fetch("https://api.github.com/users/vercel", {
  //   cache: "no-store",
  // });

  // const json = await response.json();

  return (
    <main>
      <div>
        <p>User</p>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {/* <pre>{JSON.stringify(userCookies.get("authorization"), null, 2)}</pre>
        <pre>{JSON.stringify(userHeaders.entries(), null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(json, null, 2)}</pre> */}
      </div>
    </main>
  );
}
