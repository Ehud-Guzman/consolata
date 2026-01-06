import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Award, Users, Heart, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { schoolInfo } from "../data/schoolData"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    { src: "/outside-full-shot.jpg", alt: "School compound" },
    { src: "/facilities.png", alt: "Modern facilities" },
    { src: "/consolata-hero.jpg", alt: "Happy students" }
  ]

  const features = [
    {
      icon: <BookOpen />,
      title: "Holistic Education",
      description: "Academic excellence blended with strong values."
    },
    {
      icon: <Users />,
      title: "Inclusive Community",
      description: "Welcoming learners from all backgrounds."
    },
    {
      icon: <Heart />,
      title: "Catholic Foundation",
      description: "Faith-based learning with moral grounding."
    },
    {
      icon: <Award />,
      title: "Proven Results",
      description: "Consistent KCPE excellence."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)

  const prev = () =>
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Lady of Grace And Compassion Comprehensive School
            </h1>

            <p className="text-lg opacity-90 mb-6">
              Busia County, Kenya
            </p>

            <p className="text-2xl font-serif mb-8">
              Catholic-based, holistic primary education
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-accent px-6 py-3 inline-flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link to="/about" className="btn-secondary px-6 py-3 border-2 border-white">
                Learn More
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 text-center">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <p className="text-sm opacity-80">Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold">40+</div>
                <p className="text-sm opacity-80">Teachers</p>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <p className="text-sm opacity-80">Success</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          {/* MOBILE IMAGE */}
          <div className="block md:hidden rounded-xl overflow-hidden shadow-xl">
            <img
              src={carouselImages[0].src}
              alt={carouselImages[0].alt}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* DESKTOP CAROUSEL */}
          <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-80 lg:h-96">
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card text-center hover:shadow-lg">
                <div className="w-14 h-14 bg-navy-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-text-body">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMICS */}
      <section className="section-padding bg-background-light">
        <div className="container mx-auto text-center">
          <Award className="mx-auto mb-4 text-gold-accent" size={48} />
          <h2 className="text-3xl font-bold mb-10">Academic Excellence</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schoolInfo.kcpeResults.map((r, i) => (
              <div key={i} className="card">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-4xl font-bold">{r.score}</div>
                    <p className="text-sm text-text-muted">KCPE {r.year}</p>
                  </div>
                  <div className="font-semibold">{r.name}</div>
                </div>
                <p className="italic text-text-body border-t pt-4">
                  “Supportive teachers made the difference.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Begin Your Child’s Journey With Us
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="btn-accent px-8 py-4">
            Schedule a Visit
          </Link>
          <Link to="/admissions" className="btn-secondary border-2 border-white px-8 py-4">
            Download Prospectus
          </Link>
        </div>
      </section>
    </div>
  )
}
