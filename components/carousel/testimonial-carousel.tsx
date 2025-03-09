"use client";
import { Testimonial } from "@/types/testimonial";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="border-slate-300">
              <CardContent className="flex items-center aspect-square justify-center p-6">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <q className="flex-1 text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </q>
                  <div className="mt-6 flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage className='inline-flex rounded-full' src={testimonial.imgSrc} loading="lazy"/>
                      <AvatarFallback>IMG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))
        }
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
      <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
    </Carousel>
  );
};

export default TestimonialCarousel;
