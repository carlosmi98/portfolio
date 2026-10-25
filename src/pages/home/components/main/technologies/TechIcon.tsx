import { TECH_ICONS, DEFAULT_TECH_ICON } from "./techConfig";

interface TechIconProps {
    name: string;
    className?: string;
}

export const TechIcon = ({ name, className }: TechIconProps) => {
    const key = name.toLowerCase();
    const IconComponent = TECH_ICONS[key] ?? DEFAULT_TECH_ICON;

    return (
        <IconComponent
            className={className}
        />
    );
};

export default TechIcon;
