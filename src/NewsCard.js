import React from 'react'
import { Card, Image } from 'react-bootstrap'

export default function NewsCard({value}) {
    const val = value

  return (
    <Card className="d-inline-flex justify-content-evenly mb-2" href={val.url}>
        <Image className="card-img-top" src={val.urlToImage} alt="Card image cap"/>
        <Card.Body className="text-body">
            <Card.Title className="text-body">{val.title}</Card.Title>
            <Card.Subtitle className="text-muted">{val.author!=null ? "Author:"+val.author : "No Author listed"}</Card.Subtitle>
            Description: {val.description}
        </Card.Body>
        <a className="text-muted">{val.publishedAt.split("T")[0]}</a>
        <a className="text-muted">{val.source.name}</a>
    </Card>
  )
}