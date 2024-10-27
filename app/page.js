
import HeroSection from "@/components/hero";

import servicesData from "@/dummyData.json"
import Card from "@/components/cards";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
    <HeroSection />
    <div className="mx-16 justify-center text-center grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {servicesData.services.map(service => (
      <Card key={service.id} title={service.title} description={service.description.substr(0, 85)}/>
    ))}
    </div>
    <Testimonial />
        
    </>  


  );
}
