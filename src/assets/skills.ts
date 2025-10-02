export interface Technology {
    name: string;
    icon: string;
}

export interface SkillGroup {
    category: string;
    icon: string;
    technologies: Technology[];
}

export const skills: SkillGroup[] = []
