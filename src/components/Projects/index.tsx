import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 dark:bg-[#111827]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Portfolio
              </span>
              <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[42px]">
                Recent Projects
              </h2>
              <p className="mx-auto mt-4 max-w-[570px] text-base text-[#737373] dark:text-[#A3A3A3]">
                Discover how we've helped businesses transform their digital
                presence with innovative solutions
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/portfolio"
            className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  color: string;
  featured?: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, category, description, image, technologies, featured, color } =
    project;

  return (
    <div className={`w-full px-4 ${featured ? "md:w-2/3" : "md:w-1/3"} mb-10`}>
      <div className="shadow-project hover:shadow-projectHover dark:shadow-card-dark group h-full overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-[#1E293B]">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={featured ? 800 : 400}
            height={featured ? 450 : 225}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        <div className="p-6 sm:p-8">
          <span
            className={`mb-2 inline-block rounded bg-${color}/15 px-3 py-1 text-xs font-medium text-${color}`}
          >
            {category}
          </span>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </h3>

          <p className="mb-6 text-base leading-relaxed text-[#565656] dark:text-[#CBD5E1]">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`inline-block rounded-full bg-${color}/10 px-3 py-1 text-xs font-medium text-${color} dark:bg-${color}/20`}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#"
            className={`inline-flex items-center text-sm font-medium text-${color} hover:underline`}
          >
            View Case Study
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description:
      "Complete redesign and development of an e-commerce platform with advanced filtering, payment processing, and inventory management.",
    image: "/images/projects/project-1.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    color: "primary",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description:
      "Patient-focused mobile application for appointment scheduling, medication reminders, and secure communication with healthcare providers.",
    image: "/images/projects/project-2.jpg",
    technologies: ["React Native", "Firebase", "HIPAA Compliance"],
    color: "secondary",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "AI Integration",
    description:
      "Data analytics platform with AI-driven insights, visualization tools, and predictive modeling for business intelligence.",
    image: "/images/projects/project-3.jpg",
    technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    color: "warning",
  },
  {
    id: 4,
    title: "Supply Chain Automation System",
    category: "Automation",
    description:
      "End-to-end automation solution for inventory tracking, supplier management, and predictive inventory optimization.",
    image: "/images/projects/project-4.jpg",
    technologies: ["Node.js", "IoT", "Machine Learning", "Docker"],
    color: "success",
    featured: true,
  },
  {
    id: 5,
    title: "Financial Services Portal",
    category: "Web Development",
    description:
      "Secure financial services platform with real-time data processing, reporting tools, and regulatory compliance features.",
    image: "/images/projects/project-5.jpg",
    technologies: ["React", "GraphQL", "AWS", "Blockchain"],
    color: "info",
  },
];
