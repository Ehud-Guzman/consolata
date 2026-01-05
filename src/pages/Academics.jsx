import React from 'react'
import { Book, Users, TrendingUp, Target } from 'lucide-react'
import { schoolInfo } from '../data/schoolData'

const Academics = () => {
  const features = [
    {
      icon: <Book />,
      title: "Competency-Based Curriculum",
      description: "Focus on practical skills, knowledge application, and developing core competencies"
    },
    {
      icon: <Users />,
      title: "Individual Attention",
      description: "Small class sizes ensuring personalized learning and support for each child"
    },
    {
      icon: <Target />,
      title: "Holistic Development",
      description: "Balancing academic excellence with co-curricular activities and moral education"
    },
    {
      icon: <TrendingUp />,
      title: "Continuous Assessment",
      description: "Regular evaluation and feedback to track progress and identify areas for improvement"
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20">
        <img
          src="/public/UNICEF Roysambu-6.jpg.webp" 
          alt="Students learning"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Academic Excellence</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Nurturing minds, building character, achieving excellence
          </p>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-primary rounded-full mb-4 text-white">
              <Book className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-lg text-text-body">
              We follow the Competency-Based Curriculum (CBC) prescribed by the Kenyan 
              Ministry of Education, enhanced with our unique approach to holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-text-body">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="section-padding bg-background-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Subjects Offered</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {schoolInfo.curriculum.map((subject) => (
              <div key={subject} className="bg-white rounded-lg p-4 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <p className="font-medium text-text-body">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KCPE Performance */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Consistent Academic Success</h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Our students consistently excel in KCPE examinations, demonstrating the effectiveness 
              of our teaching methods and learning environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolInfo.kcpeResults.map((result, index) => (
              <div key={index} className="card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gold-accent mb-2">{result.score}</div>
                  <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                  <p className="text-text-muted mb-4">KCPE {result.year} Top Performer</p>
                  <div className="bg-background-light p-4 rounded-lg">
                    <p className="text-text-body italic">
                      "The teachers' dedication and the supportive environment at Our Lady Consolata 
                      helped me achieve my best. The holistic approach prepared me for high school."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedicated Teaching Staff</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              Our qualified and experienced teachers are committed to providing quality education 
              and personal attention to each student.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-white font-semibold">TSC Certified Teachers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-white font-semibold">Continuous Training</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-white font-semibold">Child-Centered Approach</p>
              </div>
            </div>

            {/* Sample / Demo Disclaimer */}
            <p className="text-xs text-yellow-300 mt-8 text-center">
              ⚠️ This is a sample/demo website for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Academics
