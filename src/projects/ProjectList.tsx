import React from "react";

interface ProjectListPros {
  list: {
    id: number;
    name?: string;
    description: string;
    imageUrl: string;
    contractTypeId: number;
    contractSignedOn: string;
    budget: number;
    isActive: boolean;
  };
}

const ProjectList = ({ list }: ProjectListPros) => {
  const {
    id,
    name,
    description,
    imageUrl,
    contractTypeId,
    contractSignedOn,
    budget,
    isActive,
  } = list;
  return (
    <div>
      <div>{name}</div>
      <img src={imageUrl} alt={`img-${id}`} />
      <div>{description}</div>
    </div>
  );
};

export default ProjectList;
