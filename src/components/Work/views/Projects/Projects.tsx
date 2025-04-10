import { FC } from "react";

import { useLang } from "@/services/LangContext";

import { ProjectProps } from "../../types";
import { DetailElement } from "../DetailElement/DetailElement";
import { DetailsWrapper } from "../DetailsWrapper/DetailsWrapper";
import { ProjectElement } from "../ProjectElement/ProjectElement";
import styles from "./Projects.module.scss";
import { translator } from "./translator";

interface ProjectsProps {
  projects: ProjectProps[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const lang = useLang();

  return (
    <DetailsWrapper title={translator.title[lang]}>
      {projects.map((project) => (
        <DetailElement key={project.name} className={styles.project}>
          <ProjectElement {...project} />
        </DetailElement>
      ))}
    </DetailsWrapper>
  );
};
