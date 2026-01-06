import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Award,
  Users,
  Heart,
  BookOpen,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { schoolInfo } from "../data/schoolData"

export default function Home() {
  const [slide, setSlide] = useState(0)

  const images = [
    "/outside-full-shot.jpg",
    "/facilities.png",
    "/consolata-hero.jpg"
  ]

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % images.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="gradient-bg text-white overflow-hidden">
        <div className="container mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Our Lady of Grace and Compassion Comprehensive School
            </h1>

            <p className="mt-3 text-lg opacity-90">
              Mundika, Busia County
            </p>

            <p className="mt-6 text-xl font-serif">
              Catholic-based holistic primary education
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="btn-accent px-6 py-3 font-semibold inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/about"
                className="border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-navy-primary transition"
              >
                Learn More
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 text-center border-t border-white/20 pt-6">
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

          {/* CAROUSEL — DESKTOP ONLY */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">

            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="School"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-black/30" />

            <button
              onClick={() => setSlide((slide - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={() => setSlide((slide + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Holistic Learning" },
              { icon: Users, title: "Inclusive Community" },
              { icon: Heart, title: "Catholic Values" },
              { icon: Award, title: "Academic Excellence" }
            ].map((f, i) => (
              <div key={i} className="card p-6 text-center">
                <f.icon className="mx-auto mb-4 text-navy-primary" />
                <h3 className="font-semibold">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
