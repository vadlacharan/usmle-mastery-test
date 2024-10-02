import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
    
      <HoverEffect items={projects} />
      
    </div>)
  );
}
export const projects = [
    {
      "title": " USMLE Mastery Program",
      "description": "Our flagship program offers a structured and comprehensive approach to mastering the USMLE exams. It includes tailored study plans, interactive learning modules, and full-length practice exams for Step 1, Step 2 CK, and Step 3. Whether you're just starting your USMLE journey or focusing on specific areas, this program adapts to your needs to help you succeed.",
      "link": "https://example.com/courses/javascript-essentials"
    },
    {
      "title": "Clinical Knowledge Accelerator",
      "description": "This specialized program is designed to boost clinical knowledge and application, particularly for Step 2 CK and Step 3 of the USMLE. It focuses on real-world case studies, simulated patient encounters, and problem-solving exercises, helping you bridge the gap between theory and practice. Perfect for students looking to enhance their clinical reasoning and decision-making skills.",
      "link": "https://example.com/courses/python-data-science"
    },
    {
      "title": " Research & Publication Insight Program",
      "description": "Designed for medical students who want to stay up-to-date with the latest advancements, this program gives you access to a wealth of research publications. It also includes workshops on interpreting clinical studies, understanding medical innovations, and applying new knowledge to your practice. Perfect for students with a strong interest in research and evidence-based medicine.",
      "link": "https://example.com/courses/react-ui"
    },
    {
      "title": " USMLE Mastery Program",
      "description": "Our flagship program offers a structured and comprehensive approach to mastering the USMLE exams. It includes tailored study plans, interactive learning modules, and full-length practice exams for Step 1, Step 2 CK, and Step 3. Whether you're just starting your USMLE journey or focusing on specific areas, this program adapts to your needs to help you succeed.",
      "link": "https://example.com/courses/javascript-essentials"
    },
    {
      "title": "Clinical Knowledge Accelerator",
      "description": "This specialized program is designed to boost clinical knowledge and application, particularly for Step 2 CK and Step 3 of the USMLE. It focuses on real-world case studies, simulated patient encounters, and problem-solving exercises, helping you bridge the gap between theory and practice. Perfect for students looking to enhance their clinical reasoning and decision-making skills.",
      "link": "https://example.com/courses/python-data-science"
    },
    {
      "title": " Research & Publication Insight Program",
      "description": "Designed for medical students who want to stay up-to-date with the latest advancements, this program gives you access to a wealth of research publications. It also includes workshops on interpreting clinical studies, understanding medical innovations, and applying new knowledge to your practice. Perfect for students with a strong interest in research and evidence-based medicine.",
      "link": "https://example.com/courses/react-ui"
    }
  
  ]
  