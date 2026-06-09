"use client"

import { Testimonial } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Amazun",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    testimonial: "This library has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Goggle",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    testimonial: "The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase."
  },
  {
    name: "Emily Chen",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    testimonial: "The accessibility features and design system consistency are impressive. It's saved us countless hours in development time."
  }
]

export default function ModernTestimonial() {
  return (
    <div className="testimonial mt-4" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="heading2 text-center">
                <h2>Trusted by Thousands of Happy Homeowners</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
                  See what our clients have to say about their experience working with our expert team to find their perfect homes.
                </p>
            </div>
          </div>
        </div>
        <div className="space60" />
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="col-lg-4 col-md-6">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
