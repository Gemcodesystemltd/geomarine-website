"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brands } from "@/components/brands/brands";

export default function Home() {
  const stats = [
    {
      value: "",
      description:
        "Over 25 highly trained engineers, geoscientist, surveyors, navigators and geo-engineers.",
    },
    {
      value: "",
      description:
        "Highly satisfied clients across the oil and gas value chain.",
    },

    {
      value: "",
      description:
        "We have provided verifiable, high quality services to our customers for over 30 years.",
    },

    {
      value: "",
      description:
        "We have the most up to date/state of art equipment and systems in on our inventory, making it possible to work on complex integrated projects.",
    },
  ];

  const certifications = [
    {
      title: "/images/certificate-2.png",
    },
  ];

  const coreValues = [
    {
      title: "1. Environmental Sustainability",
      description:
        "We prioritize environmental stewardship in our business decisions, implementing responsible practices that minimize our ecological footprint and preserve natural resources.",
    },
    {
      title: "2. Human Development",
      description:
        "We invest in our people's growth and potential, creating pathways for professional advancement while nurturing a culture that celebrates innovation and diverse perspectives.",
    },
    {
      title: "3. Integrity",
      description:
        "We operate with unwavering honesty and accountability, ensuring our actions consistently align with our commitment to build lasting stakeholder confidence.",
    },
    {
      title: "4. Quality Service",
      description:
        "We deliver excellence through meticulous attention to detail, continuously refining our processes to exceed expectations and provide superior value in everything we do.",
    },
  ];

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
    <div className="">
      {/** Section 0*/}
      <section className="hero-section flex flex-col justify-start gap-7 px-4 pt-40 overflow-hidden">
        <div className="text-white text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-content"
          >
            <h1 className="text-3xl uppercase sm:text-5xl lg:text-6xl font-bold leading-tight">
              Putting the Science back in Geosciences
            </h1>
            <p className="py-4 text-base md:text-lg">
              We are Agile. Experienced. Competent. And we love challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mt-4"
          >
            <Link href="/services">
              <button className="flex items-center gap-4 group bg-[#092656] text-white rounded-md px-7 py-4 w-fit hover:bg-gray-800 cursor-pointer transition-all ease-in-out duration-200">
                Discover Our Expertise
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-7 h-7 group-hover:translate-x-2 transition-all ease-in-out duration-200"
                />
              </button>
            </Link>
          </motion.div>
        </div>
        {/** Hero cards section */}
        <div className="hero-cards lg:px-16 pt-20 pb-10 relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {/** Desktop cards animated */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="border border-[#8B8B8B] rounded-2xl w-[20rem] flex-shrink-0 mx-auto md:flex items-center gap-3 p-4 backdrop-blur-md bg-white/10 hidden"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariant}
              >
                {/**<h1 className="text-white text-3xl font-bold">{stat.value}</h1>*/}
                <p className="text-[#ffffff] mt-2">{stat.description}</p>
              </motion.div>
            ))}
            {/** Mobile cards not animated */}
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-[#8B8B8B] rounded-2xl w-[20rem] flex-shrink-0 mx-auto flex items-center gap-3 p-7 backdrop-blur-md bg-white/10 md:hidden"
              >
                {/**<h1 className="text-white text-3xl font-bold">{stat.value}</h1>*/}
                <p className="text-[#ffffff] mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:p-20">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-14 relative">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#282828] pb-4">
              Putting the Science Back in Geosciences
            </h1>
            <motion.p
              className="text-base md:text-lg leading-loose text-[#414753] mb-6"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Climate change concerns are about science. The science of: the
              atmospheric build up of carbon bearing gases. The science of ocean
              temperature rise. The science of polar ice caps melts and its
              potential impact on coastal communities. The science of sea level
              rise and its impact on pre–existing tidal regimes. The science of
              extreme atmospheric temperature variations. These changes have
              effect on the field data we acquire and the longer term analyses
              and interpretation of such data.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-loose text-[#414753] mb-6"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              To address these concerns properly and to continue to produce
              sound, useable geo–data, Geomarine Systems Limited uses AI enabled
              LiDAR systems, multibeam echo sounder systems, neural networks and
              the latest imaging software to acquire top grade imagery of your
              facilities to support design upgrades, maintenance and
              certification/re–certification requirements.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-loose text-[#414753]"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Contact us for your complex geoscience surveys and investigations.
              ROV. UAV. AUV. Conventional. Geotechnical. Seismic. Electrical
              Resistivity. We are: Agile. Rugged. Knowledgeable. Experienced and
              we Love Challenges.
            </motion.p>
          </motion.div>

          {/* Sticky Image */}
          <motion.div
            className="lg:w-1/2 w-full md:sticky top-36 self-start"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="/images/new.jpg"
              alt="Geoscience Technology"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/** Section 2 */}
      <section className="flex flex-wrap items-center gap-14 bg-gray-100 px-4 py-16 md:p-16 overflow-hidden">
        <motion.div
          className="lg:flex-1 mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/images/two-men.jpg" alt="" className="w-full rounded-md" />
        </motion.div>

        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#282828]">
            Discover the Heart of Our Organization.
          </h1>
          <p className="text-lg py-7 leading-loose text-[#414753]">
            We are a multi – disciplinary geoscience company based in the oil
            city of Port-Harcourt, Rivers State, Nigeria. Our personnel have had
            extensive experience of working in the oil and gas rich Niger Delta,
            the Northern Savannah and desert areas and offshore regions of
            Nigeria. Some have had extensive experience in the Middle East, Far
            East and the North Sea.
          </p>
          <div className="flex justify-end px-4">
            <Link href="/about-us">
              <button className="border border-[#092656] px-7 py-2 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
      {/** Section 3 */}
      <section className="flex flex-wrap items-center gap-14 bg-[#092656] px-4 py-16 md:p-16">
        <div className="lg:flex-1 flex flex-col text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDownVariant}
          >
            <p className="uppercase text-lg">Values</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Our values and standard
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-14">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariant}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h2>
                <p className="text-gray-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="sticky top-36 lg:flex-1 mx-auto"
        >
          <img
            src="/images/our-standard.jpg"
            alt=""
            className="w-full rounded-md"
          />
        </motion.div>
      </section>
      {/** Section 4 */}
      <section className="flex flex-col flex-wrap items-center gap-14 bg-white px-4 py-16 md:p-16 overflow-hidden">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariantNo}
          className="flex justify-center px-4"
        >
          <Link href="/services">
            <button className="border border-[#092656] px-10 py-3 cursor-pointer rounded-sm">
              Learn More
            </button>
          </Link>
        </motion.div>
      </section>
      {/** Section 5 */}
      <Brands />
    </div>
  );
}
