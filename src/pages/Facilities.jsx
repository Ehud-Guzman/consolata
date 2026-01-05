import React from 'react'
import { Building, Home, Users, Shield, Cross, Book } from 'lucide-react'

const Facilities = () => {
  const facilities = [
    {
      icon: <Building />,
      title: "Modern Classrooms",
      description: "Well-ventilated, well-lit classrooms equipped with learning aids and supportive technology."
    },
    {
      icon: <Shield />,
      title: "Safe Environment",
      description: "Secure school compound with perimeter fencing, controlled access, and constant supervision."
    },
    {
      icon: <Home />,
      title: "Boarding Facilities",
      description: "Separate boarding houses for boys and girls with comfortable accommodation and care."
    },
    {
      icon: <Cross />,
      title: "School Chapel",
      description: "A serene space dedicated to prayer, worship, and spiritual development."
    },
    {
      icon: <Users />,
      title: "Dining Hall",
      description: "Clean and organized dining facilities offering balanced, nutritious meals."
    },
    {
      icon: <Book />,
      title: "Library",
      description: "A learning resource center with age-appropriate books and academic materials."
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative gradient-bg text-white py-20">
        <img
          src="/public/facilities.png" 
          alt="School facilities"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            A safe, supportive, and well-equipped environment for learning and growth
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">A Conducive Learning Environment</h2>
            <p className="text-lg text-text-body">
              At Our Lady Consolata Primary School, we believe that quality facilities enhance
              learning outcomes. Our infrastructure is carefully designed to promote safety,
              comfort, discipline, and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="card p-6 text-center rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
              >
                <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mb-4 text-white mx-auto">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-text-body">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boarding Facilities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Boarding Facilities</h2>
              <p className="text-lg text-text-body">
                Our boarding program offers a structured, caring, and supportive environment
                that feels like a home away from home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Girls Boarding */}
              <div className="card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-primary rounded-full mb-4 text-white">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Girls' Boarding</h3>
                  <ul className="text-text-body space-y-2 text-left">
                    <li>• Secure and comfortable dormitories</li>
                    <li>• Dedicated matron supervision</li>
                    <li>• Study areas and common rooms</li>
                    <li>• Health and hygiene facilities</li>
                  </ul>
                </div>
              </div>

              {/* Boys Boarding */}
              <div className="card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-primary rounded-full mb-4 text-white">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Boys' Boarding</h3>
                  <ul className="text-text-body space-y-2 text-left">
                    <li>• Spacious and well-maintained hostels</li>
                    <li>• Housemaster guidance and discipline</li>
                    <li>• Recreational and relaxation areas</li>
                    <li>• Laundry and cleaning services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual & Community */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Cross className="h-8 w-8 text-navy-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Spiritual & Community Spaces</h2>
            <p className="text-xl opacity-90 mb-8">
              The school chapel is the spiritual heart of our community, offering a space
              for prayer, reflection, and Catholic formation under the guidance of the
              Benedictine Sisters.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-white italic">
                “We nurture faith alongside academic excellence, forming disciplined,
                compassionate, and responsible learners.”
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Facilities
