import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { schoolInfo } from '../data/schoolData'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
    {
      src: "/outside-full-shot.jpg",
      alt: "School compound with beautiful buildings"
    },
    {
      src: "/facilities.png",
      alt: "Students engaged in classroom learning"
    },
    {
      src: "/UNICEF Roysambu-6.jpg.webp",
      alt: "School activities and events"
    },
    {
      src: "/consolata-hero.jpg",
      alt: "Happy students in school uniform"
    }
  ]
  
  const features = [
    {
      icon: <BookOpen />,
      title: "Holistic Education",
      description: "Academic excellence with character, creativity, and critical thinking development."
    },
    {
      icon: <Users />,
      title: "Inclusive Environment",
      description: "Welcoming all children regardless of background, fostering unity in diversity."
    },
    {
      icon: <Heart />,
      title: "Community Focus",
      description: "Building strong partnerships with parents and the local community."
    },
    {
      icon: <Award />,
      title: "Academic Excellence",
      description: "Consistent top performance in KCPE examinations."
    }
  ]
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [carouselImages.length])
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="gradient-bg text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Lady Consolata Primary School
              </h1>

              <p className="text-lg md:text-xl mb-4 opacity-90">
                Busia County, Kenya
              </p>

              <div className="school-divider my-6"></div>

              <p className="text-xl md:text-2xl font-serif mb-8">
                Catholic-based, holistic primary education
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="btn-accent inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/about"
                  className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-navy-primary transition-all"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">40+</div>
                  <div className="text-sm opacity-80">Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
              </div>
            </div>

            {/* RIGHT: CAROUSEL SECTION */}
            <div className="max-w-lg mx-auto lg:max-w-none lg:ml-auto">
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl">
                {/* Carousel Container */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Image Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Image Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-sm md:text-base font-medium">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {currentSlide + 1} / {carouselImages.length}
                </div>
              </div>
              
              {/* Thumbnail Preview (Optional) */}
              <div className="hidden md:flex gap-2 mt-4 justify-center">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentSlide 
                        ? 'border-white scale-105' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full -z-10"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-accent/10 rounded-full -z-10"></div>
      </section>
      
      {/* About Snapshot */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">A Legacy of Excellence</h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Founded in {schoolInfo.founded.nursery} by the {schoolInfo.founder}, providing quality education with strong moral values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-gold-accent mb-2">{schoolInfo.founded.nursery}</div>
              <h3 className="text-xl font-bold mb-2">Nursery School Founded</h3>
              <p className="text-text-muted">Started with 30 children, laying our foundation</p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-gold-accent mb-2">{schoolInfo.founded.primary}</div>
              <h3 className="text-xl font-bold mb-2">Primary Section Opened</h3>
              <p className="text-text-muted">Expanded to provide complete primary education</p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-gold-accent mb-2">2022</div>
              <h3 className="text-xl font-bold mb-2">Boarding Facilities</h3>
              <p className="text-text-muted">Developed boarding facilities for boys and girls</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-background-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Why Choose Our School</h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              We provide an environment where every child can thrive academically, spiritually, and socially.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-primary rounded-full mb-4 text-white mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Academic Highlights */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-gold-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-heading">Academic Excellence</h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto mt-4">
              Our students consistently excel in national examinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schoolInfo.kcpeResults.map((result, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-5xl font-bold text-navy-primary">{result.score}</div>
                    <p className="text-text-muted">KCPE {result.year} Score</p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold">{result.name}</h3>
                    <p className="text-status-success font-semibold">Top Performer</p>
                  </div>
                </div>
                <p className="text-text-body border-t pt-4 italic">
                  "The teachers' dedication and supportive environment helped me achieve my best."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Child's Journey With Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our community dedicated to nurturing young minds with academic excellence and strong Catholic values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent px-8 py-4 text-lg rounded-lg font-semibold transition-all hover:opacity-90">
              Schedule a Visit
            </Link>
            <Link to="/admissions" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-navy-primary px-8 py-4 text-lg rounded-lg font-semibold transition-all">
              Download Prospectus
            </Link>
          </div>
          
          {/* Additional Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-bold text-lg mb-2">Location</h4>
              <p className="opacity-90">Busia County, Kenya</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Contact</h4>
              <p className="opacity-90">info@consolataschool.ac.ke</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Hours</h4>
              <p className="opacity-90">Mon-Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home