import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconEaseInOut,
  IconPennant,
  IconChartBar,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Comprehensive USMLE Training Modules",
      description:
      "Our platform offers detailed modules covering all three USMLE exam steps (Step 1, Step 2 CK, Step 3). Users can access in-depth lectures, practice questions, and simulated exams to ensure they are thoroughly prepared for each aspect of the exam. Progress tracking helps you identify strengths and areas for improvement, keeping your preparation focused and efficient.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Research Publication Hub",
      description:
        "Stay at the forefront of medical science with access to a vast library of peer-reviewed publications. Users can explore the latest research in areas relevant to their medical field, ensuring they are not only prepared for exams but also informed about the latest advancements in medicine.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Expert Guidance and Peer Community",
      description:
        "Connect with experienced medical professionals who have aced the USMLE and share insights. Join study groups, participate in discussion forums, and get real-time support from peers. This feature helps users build a community, share resources, and maintain motivation throughout their preparation journey.",
      icon: <IconChartBar />,
    },
    {
      title: "Adaptive Learning System",
      description: "Tailor your study plan with our adaptive learning system. Based on your performance, the system adjusts the difficulty level and areas of focus, ensuring efficient learning. Whether you're struggling with clinical knowledge or medical foundations, our AI-driven platform creates a unique preparation journey to help you excel in the USMLE.",
      icon: <IconPennant />,
    }
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
