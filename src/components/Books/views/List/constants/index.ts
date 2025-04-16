import { ImageDataProps } from "@/common/hooks/useImagePopup";

import Skills7Image from "../assets/7skills.webp";
import ClearArchitectureImage from "../assets/clear-architecture.webp";
import ClearCodeImage from "../assets/clear-code.webp";
import ComputerScienceImage from "../assets/computer-science.webp";
import MicroFrontendImage from "../assets/microfrontends.webp";
import PatternsImage from "../assets/patterns.webp";
import PerfectCodeImage from "../assets/perfect-code.webp";
import ProgramFanaticImage from "../assets/program-fan.webp";
import ScaleApplicationsImage from "../assets/scale-applications.webp";
import TeamLeadImage from "../assets/teamlead.webp";
import TypeScriptImage from "../assets/typescript.webp";

export enum BooksKeys {
  SKILLS7 = "skills7",
  CLEAR_ARCHITECTURE = "clear-architecture",
  CLEAR_CODE = "clear-code",
  COMPUTER_SCIENCE = "computer-science",
  MICRO_FRONTEND = "micro-frontend",
  PATTERNS = "patterns",
  PERFECT_CODE = "perfect-code",
  PROGRAM_FANATIC = "program-fanatic",
  SCALE_APPLICATIONS = "scale-applications",
  TEAM_LEAD = "team-lead",
  TYPESCRIPT = "typescript",
}

export const books: ImageDataProps<BooksKeys>[] = [
  {
    name: BooksKeys.TYPESCRIPT,
    image: TypeScriptImage,
  },
  {
    name: BooksKeys.CLEAR_CODE,
    image: ClearCodeImage,
  },
  {
    name: BooksKeys.TEAM_LEAD,
    image: TeamLeadImage,
  },
  {
    name: BooksKeys.PATTERNS,
    image: PatternsImage,
  },
  {
    name: BooksKeys.SKILLS7,
    image: Skills7Image,
  },
  {
    name: BooksKeys.CLEAR_ARCHITECTURE,
    image: ClearArchitectureImage,
  },

  {
    name: BooksKeys.COMPUTER_SCIENCE,
    image: ComputerScienceImage,
  },
  {
    name: BooksKeys.MICRO_FRONTEND,
    image: MicroFrontendImage,
  },

  {
    name: BooksKeys.PERFECT_CODE,
    image: PerfectCodeImage,
  },
  {
    name: BooksKeys.PROGRAM_FANATIC,
    image: ProgramFanaticImage,
  },
  {
    name: BooksKeys.SCALE_APPLICATIONS,
    image: ScaleApplicationsImage,
  },
];
