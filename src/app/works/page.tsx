import FeaturedWorks from "@/components/Featured-works";
import Testimonials from "@/components/Testimonials";

const Works = () => {
  return (
    <>
      <FeaturedWorks
        title="SELECTED WORKS"
        showSeeAllButton={false}
        headerText="Building the next generation of highly impactful and converting projects."
        headerClassName="flex px-4 md:px-0 items-center justify-between"
        titleClassName="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]"
        headerTextClassName="font-semibold text-[24px] md:text-[44px] leading-[120%] tracking-[-0.03em] text-[#000] md:max-w-4xl"
      />
      <Testimonials />
    </>
  );
};

export default Works;
