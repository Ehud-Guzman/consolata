import React from 'react'
import { Church, Heart, Target, Users } from 'lucide-react'
import { schoolInfo } from '../data/schoolData'

const About = () => {
  const values = [
    { icon: <Church />, title: "Faith", description: "Rooted in Catholic values and spiritual growth" },
    { icon: <Target />, title: "Excellence", description: "Striving for academic and personal excellence" },
    { icon: <Heart />, title: "Compassion", description: "Caring for each child with love and understanding" },
    { icon: <Users />, title: "Service", description: "Serving the community and each other" }
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20">
        <img
          src="/outside-full-shot.jpg" 
          alt="School exterior"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Our School</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Catholic primary school in Mundika providing holistic education since 2012
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <div className="text-lg text-text-body space-y-4">
              <p>
                Our Lady of Grace And Compassion Comprehensive School is a Catholic institution in {schoolInfo.location}, 
                dedicated to providing quality education that nurtures the whole child - academically, 
                spiritually, socially, and emotionally.
              </p>
              <p>
                Our foundation rests on the principles established by the {schoolInfo.founder}, 
                who believe in education as a transformative tool for building a better society.
              </p>
            </div>

            {/* Sample / Demo Disclaimer */}
            <p className="text-xs text-yellow-300 mt-6 text-center">
              ⚠️ This is a sample/demo website for demonstration purposes only. All names, locations, and content are fictitious.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="section-padding bg-background-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-accent hidden md:block"></div>
            {schoolInfo.history.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                  <div className={`card ${index % 2 === 0 ? 'md:text-right' : ''} p-6 rounded-xl bg-white shadow-md`}>
                    <div className="text-2xl font-bold text-gold-accent mb-2">{item.year}</div>
                    <p className="text-text-body">{item.event}</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-gold-accent border-4 border-white z-10 animate-pulse"></div>
                <div className="md:w-1/2 md:px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="card text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-primary rounded-full mb-4 text-white text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl opacity-90 italic relative before:content-['“'] before:text-6xl before:absolute before:-top-6 before:-left-4">
              To provide quality Catholic education that forms responsible citizens, nurtures individual talents, and prepares children for lifelong learning and service to humanity.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
