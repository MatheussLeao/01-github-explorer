import { useEffect, useState } from "react";
import "../styles/repositories.scss";
import { RepositoryItem, RepositoryItemProps } from "./RepositoryItem";

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map((repo) => (
            <RepositoryItem key={repo.name} repository={repo} />
          ))
        }
      </ul>
    </section>
  );
}
