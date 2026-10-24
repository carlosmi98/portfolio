import type { IconType } from "react-icons";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaDocker,
    FaGithub,
    FaQuestion
} from "react-icons/fa";
import { DiDjango, DiPostgresql } from "react-icons/di";
import { BsJavascript, BsTypescript } from "react-icons/bs";

export const TECH_ICONS: Record<string, IconType> = {
    react: FaReact,
    javascript: BsJavascript,
    typescript: BsTypescript,
    html5: FaHtml5,
    css3: FaCss3Alt,
    java: FaJava,
    django: DiDjango,
    postgresql: DiPostgresql,
    github: FaGithub,
    docker: FaDocker,
};

export const TECH_COLORS: Record<string, string> = {
    react: "#61DAFB",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    html5: "#E34F26",
    css3: "#1572B6",
    java: "#ED8B00",
    django: "#44B78B",
    postgresql: "#4169E1",
    github: "#000000ff",
    docker: "#2496ED",
};

export const DEFAULT_TECH_ICON = FaQuestion;
