"use client";

import { useAuth } from "../../module/auth/AuthProvider";
import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm";
import packageJsonWeb from "../../../web/package.json";
export default function Home() {
  const { signin } = useAuth();
  console.log("packageJsonWeb = ", packageJsonWeb);
  return (
    <main className={styles.main}>
      <LoginForm signin={signin} />
    </main>
  );
}
