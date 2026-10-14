import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";
import { FaReact } from "react-icons/fa";

/**
 * Mapeo centralizado de identificadores de tecnologías a componentes de iconos.
 */
const ICON_MAP: Record<string, ComponentType<IconBaseProps>> = {
  react: FaReact,
};

export interface TechIconProps extends IconBaseProps {
  name: string;
  className?: string;
}

/**
 * Componente TechIcon en TypeScript.
 * Desacopla la capa de datos de la librería visual con tipado estricto.
 */
export const TechIcon = ({ name, className = "", ...props }: TechIconProps) => {
  const IconComponent = ICON_MAP[name?.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent 
      className={`tech-icon ${className}`.trim()} 
      {...props} 
    />
  );
};

export default TechIcon;
