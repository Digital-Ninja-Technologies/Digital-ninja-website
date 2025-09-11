export function WhatWeDo() {
  return (
    <>
      <main className="min-h-screen   bg-[#fff] text-[#000]">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16  flex flex-col md:flex-row justify-between">
            <h2 className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29] mb-2">
              WHAT WE DO
            </h2>

            <div>
              <h1 className="font-semibold text-[28px] md:text-[48px] leading-[120%] tracking-[-0.03em] text-[#2E2D2D] max-w-5xl mb-8">
                Empowering brands and startups with impactful digital solutions.
              </h1>

              <p className="font-bold  p-2 text-[19px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-[#6B6A6A] md:max-w-[58rem]">
                At{" "}
                <span className="text-[#FF6602] font-[600]">
                  DIGITAL NINJA TECHNOLOGIES
                </span>
                , we bring your digital ideas to life with precision,
                creativity, and cutting-edge technology. Our services are
                designed to help startups, scale-ups, and enterprises build
                impactful digital products that drive results.
              </p>
            </div>
          </div>

          <div className="mb-16">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ServiceCard
                number="01"
                title="Web Design & Development"
                description="We craft sleek, responsive, and high-performing websites tailored to your brand's vision and business goals, from landing pages to full-scale web platforms."
              />

              <ServiceCard
                number="02"
                title="Mobile App Design & Development"
                description="From concept to launch, we design and build intuitive, user-centered mobile apps for iOS and Android that keep users engaged and coming back."
              />

              <ServiceCard
                number="03"
                title="No-Code & Low-Code Solutions"
                description="Need to move fast? We leverage no-code and low-code platforms like Wordpress, Webflow, Framer, Shopify, and more to launch functional MVPs and internal tools faster and cost-effectively."
              />
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ServiceCard
                  number="04"
                  title="Custom Software Design & Development"
                  description="Whether it's a complex SaaS product or internal enterprise tool, our team delivers scalable, secure, and robust software solutions tailored to your unique needs."
                />
              </div>
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ServiceCard
                  number="05"
                  title="Game UI & Development"
                  description="We bring games to life with immersive interfaces and smooth performance. From casual games to rich storytelling experiences, we design intuitive game UIs and develop engaging cross-platform games using the right technologies for your vision."
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="relative border border-[#FFF0E5] rounded-[80px] mb-6 p-5 pt-16 h-full">
      <div className="absolute -top-4 left-3 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>

      <h3 className="font-semibold text-[24px] leading-[120%] tracking-[-0.03em] text-[#4D4C4C] mb-3">
        {title}
      </h3>

      <p className="font-medium text-[20px] leading-[140%] tracking-[-0.03em] text-[#999797]">
        {description}
      </p>
    </div>
  );
}

export default WhatWeDo;
