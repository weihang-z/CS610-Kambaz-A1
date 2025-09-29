"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Home`) ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        href={`/Courses/${cid}/Modules`}
        id="wd-course-modules-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Modules`) ? "active" : ""}`}
      >
        Modules
      </Link>
      <Link
        href={`/Courses/${cid}/Piazza`}
        id="wd-course-piazza-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Piazza`) ? "active" : ""}`}
      >
        Piazza
      </Link>
      <Link
        href={`/Courses/${cid}/Zoom`}
        id="wd-course-zoom-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Zoom`) ? "active" : ""}`}
      >
        Zoom
      </Link>
      <Link
        href={`/Courses/${cid}/Assignments`}
        id="wd-course-quizzes-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Assignments`) ? "active" : ""}`}
      >
        Assignments
      </Link>
      <Link
        href={`/Courses/${cid}/Quizzes`}
        id="wd-course-assignments-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Quizzes`) ? "active" : ""}`}
      >
        Quizzes
      </Link>
      <Link
        href={`/Courses/${cid}/Grades`}
        id="wd-course-grades-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/Grades`) ? "active" : ""}`}
      >
        Grades
      </Link>
      <Link
        href="/Courses/1234/People/Table"
        id="wd-course-people-link"
        className={`list-group-item text-danger border-0 ${isActive(`/Courses/${cid}/People`) ? "active" : ""}`}
      >
        People
      </Link>
    </div>
  );
}
