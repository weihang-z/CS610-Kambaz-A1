"use client";

import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: 420 }}>
      <h1 className="mb-3">Sign in</h1>
      <Form>
        <FormControl id="wd-username" placeholder="username" className="mb-2" />
        <FormControl
          id="wd-password"
          type="password"
          placeholder="password"
          className="mb-3"
        />

        <Link
          id="wd-signin-btn"
          href="/Dashboard"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Link>

        <div className="text-center">
          <Link id="wd-signup-link" href="/Account/Signup">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}
