import { useEffect, useState } from "react";
import axios from "axios";

const featuredProjects = [
  {
    name: "LegalEase",
    desc: "AI-powered business filing chatbot (RAG + LLMs).",
    link: "https://github.com/bphilipose1/LegalEase"
  },
  {
    name: "Age Prediction Neural Networks",
    desc: "Multi-modal CNN + CUDA GPU optimization.",
    link: "https://github.com/bphilipose1/AgeFacePredictionDNN"
  },
  {
    name: "ResponSight (Hackathon)",
    desc: "Traffic collision ML model on AWS.",
    link: "#"
  }
];

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/bphilipose1/repos?sort=updated")
      .then(res => setRepos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        {featuredProjects.map(p => (
          <div key={p.name} className="card">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank">View on GitHub</a>
          </div>
        ))}
        {repos.map(r => (
          <div key={r.id} className="card">
            <h3>{r.name}</h3>
            <p>{r.description || "No description"}</p>
            <a href={r.html_url} target="_blank">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
