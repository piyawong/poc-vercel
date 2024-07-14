import React from "react";
import packageJson from "../../package.json";
import Link from "next/link";

function page() {
  return (
    <div>
      <div>{JSON.stringify(packageJson)}</div>
      <Link href={"/login"}>GO to login</Link>
    </div>
  );
}

export default page;
