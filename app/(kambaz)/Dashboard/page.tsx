"use client";

import Link from "next/link";
import {
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";

const courses = [
  {
    id: "1234",
    img: "/images/reactjs.jpg",
    title: "CS1234 React JS",
    sub: "Full Stack software developer",
  },
  {
    id: "2001",
    img: "/images/course2.jpg",
    title: "CS2001 Systems",
    sub: "Processes & memory",
  },
  {
    id: "2400",
    img: "/images/course3.jpg",
    title: "CS2400 Algorithms",
    sub: "Asymptotics & graphs",
  },
  {
    id: "2510",
    img: "/images/course4.jpg",
    title: "CS2510 OOD",
    sub: "Design patterns",
  },
  {
    id: "3200",
    img: "/images/course5.jpg",
    title: "CS3200 DB",
    sub: "SQL & ER",
  },
  {
    id: "4550",
    img: "/images/course6.jpg",
    title: "CS4550 Web Dev",
    sub: "Next.js & APIs",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {courses.map((c) => (
          <Col
            key={c.id}
            className="wd-dashboard-course"
            style={{ width: "300px" }}
          >
            <Card>
              <Link
                href={`/Courses/${c.id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src={c.img} width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {c.title}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {c.sub}
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
