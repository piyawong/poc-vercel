import React from "react";
import packageJson from "../../package.json";
import Link from "next/link";
import PrivateRoute from "@/module/auth/PrivateRoute";

function page() {
  return (
    <PrivateRoute>
      <div>
        <div>{JSON.stringify(packageJson)}</div>
        <Link href={"/login"}>GO to login</Link>
      </div>
    </PrivateRoute>
  );
}

export default page;
