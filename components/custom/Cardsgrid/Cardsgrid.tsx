export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "We build high-performance business websites tailored to your brand, ensuring speed, scalability, and seamless user experience.",
      img: "/images/web-development.jpg",
    },
    {
      title: "Digital Marketing",
      desc: "Our targeted campaigns drive traffic and convert leads, helping your business grow with measurable results.",
      img: "/images/digital-marketing.jpg",
    },
    {
      title: "Branding",
      desc: "We create strong brand identities that stand out, connecting you with your audience through design and messaging.",
      img: "/images/branding.jpg",
    },
    {
      title: "PR Services",
      desc: "From media outreach to reputation management, we help you build trust and establish authority in your industry.",
      img: "/images/pr-services.jpg",
    },
    {
      title: "Designing",
      desc: "Our creative team delivers stunning graphics and visuals that make your business look premium and professional.",
      img: "/images/designing.jpg",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          What We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex-1 min-w-[280px] max-w-[32%]
                bg-white dark:bg-gray-800 rounded-2xl shadow-md 
                p-6 hover:shadow-lg transition 
                text-gray-900 dark:text-gray-100
              "
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
