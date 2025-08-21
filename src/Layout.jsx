import { Outlet } from "react-router";
import Header from "./Components/Header";
import { Toaster } from "@/Components/ui/sonner.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout() {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
        <Header />
        <Toaster />
        <Outlet />
      </GoogleOAuthProvider>
    </div>
  );
}
