"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Button,
  InputGroup,
  Form,
  Card,
  ListGroup,
  Badge,
} from "react-bootstrap";
import {
  BsSearch,
  BsPlusLg,
  BsGripVertical,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();

  return (
    <div id="wd-assignments" className="p-3">
      <div className="clearfix mb-3">
        <div className="float-start me-2" style={{ minWidth: 320 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control id="wd-search-assignment" placeholder="Search..." />
          </InputGroup>
        </div>
        <div className="float-end">
          <Button
            id="wd-add-assignment-group"
            variant="secondary"
            className="me-2"
          >
            <BsPlusLg className="me-2" /> Group
          </Button>
          <Button id="wd-add-assignment" variant="danger" href="">
            <BsPlusLg className="me-2" /> Assignment
          </Button>
        </div>
      </div>

      <Card className="shadow-sm">
        <Card.Header className="bg-white">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 text-secondary" />
            <div className="fw-semibold">ASSIGNMENTS</div>
            <div className="ms-auto d-flex align-items-center">
              <Badge bg="light" text="dark" className="me-2">
                40% of Total
              </Badge>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
          </div>
        </Card.Header>

        <ListGroup
          variant="flush"
          id="wd-assignment-list"
          className="wd-assignment-list"
        >
          <ListGroup.Item className="wd-assignment-list-item py-3 px-3">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 mt-1 text-secondary" />
              <FaRegFileAlt className="me-2 mt-1 text-secondary fs-6" />
              <div className="flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/123`}
                  className="wd-assignment-link fw-semibold text-decoration-none"
                >
                  A1
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-success">Multiple Modules</span>
                  &nbsp;|&nbsp;<b>Not available until</b> May 6 at 12:00am
                  &nbsp;|&nbsp;<b>Due</b> May 13 at 11:59pm &nbsp;|&nbsp; 100
                  pts
                </div>
              </div>
              <div className="ms-2 d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-2 text-secondary" />
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item py-3 px-3">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 mt-1 text-secondary" />
              <FaRegFileAlt className="me-2 mt-1 text-secondary fs-6" />
              <div className="flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/234`}
                  className="wd-assignment-link fw-semibold text-decoration-none"
                >
                  A2
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-success">Multiple Modules</span>
                  &nbsp;|&nbsp;<b>Not available until</b> May 13 at 12:00am
                  &nbsp;|&nbsp;<b>Due</b> May 20 at 11:59pm &nbsp;|&nbsp; 100
                  pts
                </div>
              </div>
              <div className="ms-2 d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-2 text-secondary" />
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item py-3 px-3">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 mt-1 text-secondary" />
              <FaRegFileAlt className="me-2 mt-1 text-secondary fs-6" />
              <div className="flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/345`}
                  className="wd-assignment-link fw-semibold text-decoration-none"
                >
                  A3
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-success">Multiple Modules</span>
                  &nbsp;|&nbsp;<b>Not available until</b> May 20 at 12:00am
                  &nbsp;|&nbsp;<b>Due</b> May 27 at 11:59pm &nbsp;|&nbsp; 100
                  pts
                </div>
              </div>
              <div className="ms-2 d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-2 text-secondary" />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
