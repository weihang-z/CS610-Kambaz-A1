"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
export default function Kambaz() {
  return (
    <div>
      <h2>Kambaz Home Page</h2>
      <br />
      <Link href="/Account/Signup">Sign up</Link>
      <br />
      <Link href="/Account/Signin">Sign in</Link>
      <br />
      <Link href="/Labs/Lab1">Lab Exercises Landing Page</Link>
    </div>
  );
}
