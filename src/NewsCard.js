import React from 'react'
import { Card, Image } from 'react-bootstrap'

export default function NewsCard({id, articles}) {
    const val = articles
  return (
    <Card id={id} className="d-inline-flex flex-row justify-content-evenly mb-2 w-100 border-0">
        <Image className="card-img-left w-25" src={val.urlToImage} alt="Card image cap"/>
        <Card.Body className="text-body d-flex flex-column pb-0">
            <Card.Title className="text-body">{val.title}</Card.Title>
            <Card.Subtitle className="text-muted">{val.description}</Card.Subtitle>
            <Card.Footer className="text-muted mt-auto">{val.source.name} - {val.publishedAt.split("T")[0]}</Card.Footer>
            <a href={val.url} className="stretched-link"></a>
        </Card.Body>
    </Card>
  )
}