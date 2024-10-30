import { ContactUs } from "@/components/Contactus";
import { HomeHero } from "@/components/HomeHero";
import { ServiceSection } from "@/components/SeriveSection";
import { SuccesStory } from "@/components/Success";
import { createFileRoute, } from "@tanstack/react-router";


export const Route = createFileRoute('/')({
    component: IndexComponent
}) 



function IndexComponent() {
    return (
        <div>
            {/* Hero Section */}
            <HomeHero />

            {/* End Hero Section */}

            {/* Success Stories */}
            <SuccesStory />
            {/* End Success Stories */}

            {/* Services Section */}
            <ServiceSection />
            {/* // End Services Section  */}

            {/* Contact US */}
            <ContactUs />
            {/* End Contact US */}

        </div>
           
        
    );
}

