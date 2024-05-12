// ProjectSection.tsx

import React from "react";

interface Project {
  title: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Digital Product Management Essentials",
    imageUrl: "https://source.unsplash.com/random/1",
  },
  {
    title: "Advanced Product Strategy for Digital Products",
    imageUrl: "https://source.unsplash.com/random/2",
  },
  {
    title: "User Experience Design for Product Managers",
    imageUrl: "https://source.unsplash.com/random/3",
  },
  {
    title: "Agile Development Principles for Product Managers",
    imageUrl: "https://source.unsplash.com/random/4",
  },
  {
    title: "Data Analytics for Product Managers",
    imageUrl: "https://source.unsplash.com/random/5",
  },
  {
    title: "Digital Marketing Strategies for Product Managers",
    imageUrl: "https://source.unsplash.com/random/6",
  },
];

const ProjectsUWillBuild: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {/* Additional project details can be added here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsUWillBuild;
