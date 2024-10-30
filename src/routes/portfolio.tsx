import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioComponet
})


function PortfolioComponet() {
  return (
    <div>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center h-[32rem] ">
            <div className="px-14 mx-auto text-center">
                <h1 className="text-5xl sm:text-4xl lg:text-6xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    We Build Digital Solutions<br />That Drive Growth
                </h1>
                <p className="text-xl sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Transform your ideas into powerful software solutions with our expert team of developers, designers, and strategists.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg">
                        Start Your Project
                    </Button>
                    <Button size="lg" variant="secondary">
                        View Our Work
                    </Button>
                </div>
            </div>
        </div>

      {/* End Hero Section */}


    </div>
  );
}