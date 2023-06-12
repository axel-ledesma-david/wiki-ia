import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../ListArticles/ListArticles.css";

const ListArticles = ({ data }) => {
  return (
    <Row className="d-flex gap-3 justify-content-center align-items-center row-list">
        {data.map((art) => (
          <Card key={art.id} style={{ width: "18rem"}} className="p-0 border-0 shadow-sm" >
            <Card.Img variant="top" style={{ width: "100%", height: "200px" }}  src={art.cover} />
            <Card.Body>
              <Card.Title>{art.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {art.categories.map((cat) => cat).join(", ")}
              </Card.Subtitle>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
  );
};

export default ListArticles;
