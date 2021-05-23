import React from "react";

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
    <div key={repository.id}>
      <p>
        {repository.name} - stars: {repository.stargazerCount} - forks:{" "}
        {repository.forkCount}
      </p>
    </div>
  );
}
