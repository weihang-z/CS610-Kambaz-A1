"use client";

import Link from "next/link";
import { Form, FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: 540 }}>
      <h1 className="mb-3">Profile</h1>
      <Form>
        <FormControl
          defaultValue="alice"
          id="wd-username"
          placeholder="username"
          className="mb-2"
        />
        <FormControl
          defaultValue="123"
          id="wd-password"
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <FormControl
          defaultValue="Alice"
          id="wd-firstname"
          placeholder="First Name"
          className="mb-2"
        />
        <FormControl
          defaultValue="Wonderland"
          id="wd-lastname"
          placeholder="Last Name"
          className="mb-2"
        />

        <FormControl
          defaultValue="2000-01-01"
          id="wd-dob"
          type="date"
          className="mb-2"
        />

        <FormControl
          defaultValue="alice@wonderland.com"
          id="wd-email"
          type="email"
          placeholder="email"
          className="mb-2"
        />

        <FormSelect defaultValue="FACULTY" id="wd-role" className="mt-2 mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>

        <Link href="/Account/Signin" className="btn btn-danger md-2 me-2">
          Sign out
        </Link>
        <button type="button" className="btn btn-secondary">
          Save
        </button>
      </Form>
    </div>
  );
}
