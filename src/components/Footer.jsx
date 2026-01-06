import React from 'react'
import { School, MapPin, Phone, Mail } from 'lucide-react'
import { schoolInfo } from '../data/schoolData'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center">
                <School className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Lady of Grace And Compassion Comprehensive School</h3>
                <p className="text-sm text-gray-300">Primary School</p>
              </div>
            </div>
            <p className="text-gray-300">
              Catholic-based holistic primary education in Mundika, Busia County.
              Founded by Grace & Compassion Benedictine Sisters.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Academics', 'Facilities', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-accent" />
                <span className="text-gray-300">{schoolInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-accent" />
                <span className="text-gray-300">{schoolInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-accent" />
                <span className="text-gray-300">{schoolInfo.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-1">
          <p className="text-gray-400">
            © {currentYear} Our Lady of Grace And Compassion Comprehensive School. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Founded by Grace & Compassion Benedictine Sisters
          </p>
          {/* Sample / Demo Disclaimer */}
          <p className="text-xs text-yellow-300 mt-2">
            ⚠️ This is a <strong>sample/demo website</strong> for demonstration purposes only. All names, locations, and content are fictitious.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
