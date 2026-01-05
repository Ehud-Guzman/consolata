import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, School } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ]
  
  const isActive = (path) => location.pathname === path
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-navy-primary rounded-lg flex items-center justify-center">
              <School className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-primary">Our Lady Consolata</h1>
              <p className="text-xs text-text-muted">Primary School, Mundika</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-navy-primary border-b-2 border-gold-accent'
                    : 'text-text-body hover:text-navy-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background-card"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium ${
                    isActive(item.path)
                      ? 'bg-navy-primary text-white'
                      : 'hover:bg-background-card'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header