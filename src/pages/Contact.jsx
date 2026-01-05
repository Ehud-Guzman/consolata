import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { schoolInfo } from '../data/schoolData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with Our Lady Consolata Primary School
          </p>
        </div>
      </section>

      <div className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-text-body">{schoolInfo.location}</p>
                    <p className="text-text-muted text-sm">Along the Busia-Malakisi Road</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-text-body">{schoolInfo.contact.phone}</p>
                    <p className="text-text-muted text-sm">Monday - Friday, 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-text-body">{schoolInfo.contact.email}</p>
                    <p className="text-text-muted text-sm">Admissions: admissions@consolata.sc.ke</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-text-body">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-text-body">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-text-muted text-sm">Closed on Sundays and Public Holidays</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-background-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Find Us on Map</h3>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <p className="text-text-muted">Map integration placeholder</p>
                  </div>
                  <p className="text-sm text-text-muted mt-4">
                    We are located in Mundika, approximately 5km from Busia town center.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-heading mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-transparent outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-heading mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-transparent outline-none transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-heading mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-transparent outline-none transition"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-heading mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-transparent outline-none transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admissions">Admissions Inquiry</option>
                        <option value="Academic">Academic Information</option>
                        <option value="Boarding">Boarding Facilities</option>
                        <option value="General">General Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-heading mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2 py-4"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Schedule a Visit</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We welcome prospective parents to visit our school and experience our learning environment firsthand.
          </p>
          <button className="btn-primary bg-white text-navy-primary hover:bg-gray-100 px-8 py-4 text-lg">
            Book a School Tour
          </button>
        </div>
      </section>
    </div>
  )
}

export default Contact