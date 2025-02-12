import AtroIcon from "../incons/AstroIcon.astro";
import ReactIcon from "../incons/React.astro";
import TailwindIcon from "../incons/Tailwind.astro";
import ZustandIcon from "../incons/Zustand.astro";

type Tag = {
  name: string;
  class: string;
  icon: (_props: Record<string, any>) => any;
};

export const TAGS: Record<string, Tag> = {
  react: {
    name: "React",
    class: "bg-black/80 text-white dark:bg-black dark:text-white",
    icon: ReactIcon,
  },
  zustand: {
    name: "Zustand",
    class: "bg-black/80 text-white dark:bg-black dark:text-white",
    icon: ZustandIcon,
  },
  astro: {
    name: "Astro",
    class: "bg-black/80 text-white dark:bg-black dark:text-white",
    icon: AtroIcon,
  },
  tailwind: {
    name: "Tailwind CSS",
    class: "bg-black/80 text-white dark:bg-black dark:text-white",
    icon: TailwindIcon,
  },
};
