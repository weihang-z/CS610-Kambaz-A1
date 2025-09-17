import Link from "next/link";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Weihang Zeng</h2>
      <h3>SEC 05 </h3>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz Application
          </Link>
        </li>
        <li>
          <Link href="https://github.com/weihang-z/CS610-Kambaz-A1" id="github">
            GitHub Code Repository
          </Link>
        </li>
      </ul>
    </div>
  );
}
