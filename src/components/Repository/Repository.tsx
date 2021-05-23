import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import "./Repository.css";

export interface IRepository {
  forkCount: number;
  id: string;
  name: string;
  stargazerCount: number;
  url: string;
}

export default function Repository({
  repository,
}: {
  repository: IRepository;
}): JSX.Element {
  return (
    <Card className="card" key={repository.id} elevation={Elevation.TWO}>
      <h2>
        <a href={repository.url}>{repository.name}</a>
      </h2>
      <p>🌟 {repository.stargazerCount}</p>
      <p>🍴 {repository.forkCount}</p>
    </Card>
  );
}
