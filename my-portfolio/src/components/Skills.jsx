const skills = [
    "Python", "C++", "Java", "C#", "JavaScript", "SQL", "Bash", "CUDA", "MATLAB",
    "PyTorch", "TensorFlow", "GNNs", "NLP", "Transformers", "RAG",
    "MPI", "Multithreading", "Spark", "Hadoop", "Distributed Systems",
    "Node.js", "Express.js", "MongoDB", "AWS", "GCP", "Kubernetes", "Docker",
    "Git", "Linux", "Jupyter", "Agile Development",
    "Cryptography", "Blockchain Protocols", "CI/CD"
  ];
  
  export default function Skills() {
    return (
      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
    );
  }
  