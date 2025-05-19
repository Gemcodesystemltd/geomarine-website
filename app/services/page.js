"use client";
import { NavBanner } from "@/components/navigation/navBanner";
import { motion } from "framer-motion";

export default function Page() {
  const services = [
    {
      title: "Seismic Geophysics",
      description:
        "We acquire subsurface data using advanced seismic imaging technologies for oil and gas exploration. GSL also uses shallow seismic data acquisition for foundation studies. These include seismic refraction and multi-channel surface wave analysis.",
      icon: "/icons/audio-wave.svg",
    },
    {
      title: "Seabed Geophysics",
      description:
        "We study the ocean floor using advanced geophysical techniques to map underwater structures, hazards, and seabed conditions. The data acquired is used to design offshore pipelines, platforms and jackets.",
      icon: "/icons/task.svg",
    },
    {
      title: "Geotechnical Engineering",
      description:
        "We analyze soil, rock, and underground conditions to ensure safe and stable foundations for construction and infrastructure development both on land and offshore.",
      icon: "/icons/submarine.svg",
    },
    {
      title: "ROV and AUV Surveys",
      description:
        "Advances in technology have made it possible to survey hard to reach areas using ROV's and AUV's, with even higher, better, quality than usual. Integrated with AI we achieve higher levels of productivity and customer satisfaction.",
      icon: "/icons/boat.svg",
    },
    {
      title: "Seismic Data Acquisition QA/QC Services",
      description:
        "We ensure the accuracy and reliability of seismic data through rigorous quality control and testing, helping you make informed decisions with confidence.",
      icon: "/icons/mountain.svg",
    },
    {
      title: "Survey, Navigation and Positioning",
      description:
        "We provide precise surveying, navigation, and positioning solutions to ensure accurate mapping, geospatial data collection, and reliable location tracking for marine and land projects.",
      icon: "/icons/location.svg",
    },
  ];
  const fadeInDownVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -40 }, // Starting from the left
    visible: (i) => ({
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 40 }, // Starting from the right
    visible: (i) => ({
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInRightVariantNo = {
    hidden: { opacity: 0, x: 40 }, // Starting from the right
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 10, delay: 0.4 },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 10, delay: 0.4 },
    },
  };
  return (
    <div>
      <NavBanner
        bgImage="/images/services.jpg"
        title="Services"
        description="Services we offer."
      />
      {/** Section 1 */}
      <section className="flex flex-wrap items-center gap-14 bg-white px-4 py-16 md:p-16 overflow-hidden">
        <div className="lg:flex-1 flex flex-col text-[#282828]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDownVariant}
          >
            <p className="uppercase text-lg">Services</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              What we do for you
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14 mt-14">
            {services.map((value, index) => (
              <motion.div
                initial="hidden"
                custom={index}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRightVariantNo}
                key={index}
                className="text-[#282828]"
              >
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-10 h-10 bg-[#092656] p-2 rounded-md"
                />
                <h2 className="text-lg font-semibold my-2">{value.title}</h2>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/** Section 2 */}
      <section className="flex flex-wrap items-center gap-14 bg-[#092656] px-4 py-16 md:p-16 overflow-hidden">
        <motion.div
          className="lg:flex-1 mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/equip.jpg"
            alt=""
            className="w-full rounded-md md:h-[35rem]"
          />
        </motion.div>

        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            GSL Equipment and Systems
          </h1>
          <ul className="text-lg py-7 leading-loose text-white list-disc list-inside">
            <li>Side Scan Sonar – C-Max</li>
            <li>Marine Magnetometer G882</li>
            <li>Innomar Compact 2000 Sub-bottom Profiler</li>
            <li>DMS–05 Motion Compensator</li>
            <li>Odom MK III E Marine Echo Sounder</li>
            <li>GeoAcoustics GS 4 Multibeam Echo Sounder</li>
            <li>Hemisphere Heading Sensor</li>
            <li>Geotechnical Rig</li>
            <li>Hypack Navigation System</li>
          </ul>
        </motion.div>
      </section>
      {/** Section 3 */}
      <section className="flex flex-wrap items-center gap-14 bg-white px-4 py-16 md:p-16 overflow-hidden">
        <motion.div
          className="lg:flex-1 mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/equip-2.jpg"
            alt=""
            className="w-full rounded-md md:h-[35rem] object-cover"
          />
        </motion.div>

        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            GSL Capabilities
          </h1>
          <ul className="text-xl py-7 leading-loose text-gray-900 list-disc list-inside">
            <li>Seismic Exploration</li>
            <li>
              Seismic Refraction Surveys for Foundation Engineering Application
            </li>
            <li>Land and Marine Geo-hazard Surveys</li>
            <li>Survey and Marine Positioning</li>
            <li>Geotechnical Engineering</li>
            <li>Metocean Services</li>
            <li>Hydrodynamics using ADCP Systems</li>
            <li>Electrical Resistivity Surveys</li>
            <li>Thermal Conductivity Surveys</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
