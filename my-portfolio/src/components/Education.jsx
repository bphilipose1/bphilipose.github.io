export default function Education() {
    const degrees = [
      {
        school: "Seattle University",
        degree: "M.S. Computer Science, Specialization in Data Science",
        dates: "Sep 2023 – Jun 2025",
        gpa: "GPA: 4.00/4.00",
        coursework: "Large Language Models, Intro to Data Science, Parallel Computing, Visual Analytics, Big Data Analytics, Distributed Systems, Machine Learning, Artificial Intelligence, LLMs"
      },
      {
        school: "Seattle University",
        degree: "B.S. Computer Engineering & Computer Science",
        dates: "Sep 2021 – Mar 2025",
        gpa: "GPA: 4.00/4.00",
        coursework: "CS: OOD, Databases, Computing Systems, Algorithms, Web Development; CE: MATLAB, Data Networks, ML I, Signals & Systems, Embedded Systems, Microprocessor Design, Circuits"
      }
    ];
  
    return (
      <section>
        <h2>Education</h2>
        {degrees.map((deg, i) => (
          <div key={i} className="card">
            <h3>{deg.degree}</h3>
            <h4>{deg.school}</h4>
            <p>{deg.dates}</p>
            <p>{deg.gpa}</p>
            <p><strong>Relevant Coursework:</strong> {deg.coursework}</p>
          </div>
        ))}
      </section>
    );
  }
  