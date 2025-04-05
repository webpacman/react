import { FunctionComponent, SVGProps } from "react";

import { SkillName } from "../constants";

export interface SkillProps {
  name: SkillName;
  title: string;
  description: string;
  percent?: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
