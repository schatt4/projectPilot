import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
  //   console.log(JSON.stringify(MOCK_PROJECTS, null, " "));
  console.log(MOCK_PROJECTS);

  return (
    <div>
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>

      <div>
        {MOCK_PROJECTS.map((data) => (
          <ProjectList list={data} key={data.id} />
          //   <span>{data.name}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
