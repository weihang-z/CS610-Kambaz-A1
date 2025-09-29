"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/Account/Signin"
        id="wd-account-nav-signin"
        className={`list-group-item text-danger border-0 ${isActive("/Account/Signin") ? "active" : ""}`}
      >
        Sign in
      </Link>
      <Link
        href="/Account/Signup"
        id="wd-account-nav-signup"
        className={`list-group-item text-danger border-0 ${isActive("/Account/Signup") ? "active" : ""}`}
      >
        Sign up
      </Link>
      <Link
        href="/Account/Profile"
        id="wd-account-nav-profile"
        className={`list-group-item text-danger border-0 ${isActive("/Account/Profile") ? "active" : ""}`}
      >
        Profile
      </Link>
    </div>
  );
}
