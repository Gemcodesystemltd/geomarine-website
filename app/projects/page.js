"use client";
import { NavBanner } from "@/components/navigation/navBanner";
import { ProjectCard } from "@/components/projects/projectsCard";

export default function Page() {
  const projects = [
    {
      image: "/images/project-1.png",
      title: "Geotechnical Boring In Imo River for Alscon/MTS, 2008.",
      // date: "2008",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/conoil.jpg",
      title: "Deploying Geophysical sensor during survey for conoil/Belbop.",
      // date: "2008",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/alscone.jpg",
      title: "Geotechnical Work for NNPC G-791 Gas Pipeline Project.",
      // date: "",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/chevron.jpg",
      title:
        "Marine Geotechnical and Geophysical Services for Chevron Nigeria Limited.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/ibaka.png",
      title: "UAV LIDAR SURVEY IN IBAKA AREA, AKWA IBOM STATE NIGERIA.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/geoswath.png",
      title:
        "DREDGE SCOURS OBSERVED ON ESTUARINE SEABED WITH GEOACOUSTICS GEOSWATHE GS4 WIDESWATH BATHYMETRY SYSTEM.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/survey.png",
      title:
        "Pipeline Trench observed during a marine Geophysical survey of Imo River in 2008.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/sonar.png",
      title: "SIDE SCAN SONAR IMAGERY SHOWING SUNKEN BOAT.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/graph.png",
      title:
        "Brute Stack Section of Hydrophone Data from A Shallow Marine 3D x 2C Seismic survey.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
    {
      image: "/images/photo-2.jpg",
      title: "Geotechnical Boring in Lagos, Lagoon for Oando Plc.",
      // date: "2010",
      // description: "",
      status: "Completed",
    },
  ];

  return (
    <div>
      <NavBanner
        bgImage="/images/sensore.jpg"
        title="Projects"
        description="A deep dive into some of our projects."
      />
      <section className="px-4 lg:px-16 pt-20 pb-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              date={project.date}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}