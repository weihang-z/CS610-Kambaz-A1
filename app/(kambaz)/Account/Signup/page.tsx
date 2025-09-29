"use client";

import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: 420 }}>
      <h1 className="mb-3">Sign up</h1>
      <Form>
        <FormControl
          id="wd-signup-username"
          placeholder="username"
          className="mb-2"
        />
        <FormControl
          id="wd-signup-password"
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <FormControl
          id="wd-signup-verify"
          type="password"
          placeholder="verify password"
          className="mb-3"
        />

        <Link href="/Account/Profile" className="btn btn-primary w-100 mb-2">
          Sign up
        </Link>
        <div className="text-center">
          <Link href="/Account/Signin">Sign in</Link>
        </div>
      </Form>
    </div>
  );
}
