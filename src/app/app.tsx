"use client";

import AuthProvider from "../module/auth/AuthProvider";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import packageJson from "../../package.json";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(error);
    },
  }),
});

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("packageJson = ", packageJson);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
