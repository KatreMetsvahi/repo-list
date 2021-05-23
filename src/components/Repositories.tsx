import React from "react";
import { gql, useQuery } from "@apollo/client";

const REACT_REPOS = gql`
  query Repository($topic: String!) {
    search(query: $topic, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            forkCount
            id
            name
            stargazerCount
            url
          }
        }
      }
    }
  }
`;

type Repository = {
  forkCount: number;
  id: string;
  name: string;
  stargazerCount: number;
  url: string;
};

export default function Repositories(): JSX.Element {
  const { data, error, loading } = useQuery(REACT_REPOS, {
    variables: { topic: "react" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.search.edges.map(({ node }: { node: Repository }) => (
    <div key={node.id}>
      <p>
        {node.name} - stars: {node.stargazerCount} - forks: {node.forkCount}
      </p>
    </div>
  ));
}
