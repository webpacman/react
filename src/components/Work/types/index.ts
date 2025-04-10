import { WorkCode } from "../constants";

export interface ProjectProps {
  name: string;
  description: string;
}

export interface WorkProps {
  code: WorkCode;
  title: string;
  dateStart: Date;
  dateEnd?: Date;
  skills: string[];
  projects?: ProjectProps[];
}
