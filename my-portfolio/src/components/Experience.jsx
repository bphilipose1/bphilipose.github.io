export default function Experience() {
    const experiences = [
      {
        role: "Algorithms Engineer V",
        company: "Meta – Contract",
        dates: "June 2024 – Present | Redmond, WA | Hybrid",
        bullets: [
          "Delivered an 87% end-to-end latency reduction by porting and optimizing real-time computer vision models (EfficientNet) from Python/PyTorch to C++ for embedded platforms.",
          "Optimized embedded models by removing unsupported ops, adapting TFLite pipelines, and reducing channel widths while documenting accuracy-performance trade-offs.",
          "Designed real-time data transmission pipelines (SPI blob) for model outputs and IMU sensor streams enabling hardware-in-the-loop debugging.",
          "Developed high-performance C++ image processing primitives (debayering, cropping, rotation, type conversion) and resolved memory and buffer alignment issues.",
          "Performed cross-platform validation for Python/C++ numerical equivalence and verified end-to-end on-device inference accuracy."
        ]
      },
      {
        role: "Machine Learning Researcher",
        company: "Seattle University",
        dates: "June 2024 – Aug 2024 | Seattle, WA",
        bullets: [
          "Developed fMRI-based autism detection model using PyTorch and CUDA, reducing diagnosis time by 30% and improving accuracy by 4%.",
          "Implemented Graph Convolutional Network (GCN) and Community-Aware Transformer (CAT) to model brain connectivity (85.98% accuracy).",
          "Applied feature selection using MLPs and GNNs, improving fMRI data representation and classification.",
          "Optimized training performance with GPU acceleration and hyperparameter tuning.",
          "Collaborated with research team to validate model reliability for neuroimaging applications."
        ]
      },
      {
        role: "Robotics Software Engineer",
        company: "Amazon Web Services (AWS)",
        dates: "Sep 2023 – June 2024 | Seattle, WA",
        bullets: [
          "Developed semi-autonomous robotic cart integrating LiDAR, thermal imaging, and computer vision for real-time data monitoring in data centers.",
          "Designed modular UI for real-time sensor data visualization.",
          "Optimized sensor processing pipelines in Python and C++ to improve thermal anomaly detection.",
          "Co-led cross-functional team of 9 engineers, drove Agile development, conducted Scrum meetings, and collaborated with AWS liaisons."
        ]
      },
      {
        role: "Software Engineering Researcher",
        company: "National Institute of Standards and Technology (NIST)",
        dates: "June 2023 – Aug 2023 | Gaithersburg, MD & Remote",
        bullets: [
          "Developed high-performance, low-latency data transfer tool in C++ for autonomous vehicle simulations. [Paper Publication](https://www.nist.gov/publications/feature-description-assessing-autonomous-vehicle-performance)",
          "Optimized AV simulation performance using NS-3, ROS2, and proprietary simulators leveraging parallel programming and algorithmic efficiency.",
          "Collaborated to debug sensing platforms, enhance system software, and refine real-time OS performance.",
          "Presented research at 2023 NIST Colloquium. [Article Link](https://www.nist.gov/news-events/news/2023/08/university-students-aid-smart-connected-systems-research-nists-surf-program)"
        ]
      },
      {
        role: "Software Engineering Researcher",
        company: "National Institute of Standards and Technology (NIST)",
        dates: "June 2022 – Aug 2022 | Gaithersburg, MD & Remote",
        bullets: [
          "Developed testing methods to detect unsafe behaviors in ADS-equipped vehicles in simulations.",
          "Used SoapUI to test and validate safe driving behaviors in ADS, improving compliance with safety standards.",
          "Designed automated test cases for real-time vehicle evaluation, reducing manual testing effort.",
          "Collaborated with researchers to refine AV safety metrics and standardized evaluation frameworks.",
          "Presented research findings at 2022 NIST Colloquium."
        ]
      },
      {
        role: "Information Technology Intern",
        company: "Federal Way Public Schools",
        dates: "June 2019 – Aug 2021 | Federal Way, WA",
        bullets: [
          "Provided maintenance, repair, testing, and deployment of student and staff hardware.",
          "Troubleshot interactive whiteboards, computers, projectors, printers, and peripherals.",
          "Managed and documented IT service requests through a ticketing system efficiently."
        ]
      }
    ];
  
    return (
      <section>
        <h2>Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.dates}</p>
            <ul>
              {exp.bullets.map((b, j) => <li key={j} dangerouslySetInnerHTML={{__html: b}} />)}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  