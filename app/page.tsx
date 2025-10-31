"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Aftaab Siddiki
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <Link 
                href="#about" 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="#projects" 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#blog" 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Aftaab Siddiki
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
                Senior Software Engineer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Designing and building large-scale distributed systems that power modern applications. 
                Specialized in microservices architecture, real-time data processing, and complex workflow orchestration.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="#contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="#projects" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-center"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mx-auto flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Aftaab Siddiki"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Background</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in Singapore, I'm a Senior Software Engineer with deep expertise in building 
                backend systems across diverse domains including payments, e-commerce, and customer-facing 
                data-oriented systems. I specialize in transforming complex business requirements into 
                scalable, resilient distributed architectures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My passion lies in solving challenging problems at scale, whether it's migrating 
                monolithic systems to microservices, designing real-time data pipelines, or 
                orchestrating complex workflows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Distributed Systems Architecture</p>
                    <p className="text-gray-600 text-sm">Microservices, event-driven architecture, scalability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Data Engineering</p>
                    <p className="text-gray-600 text-sm">Real-time & batch processing, CDC, Kafka, data pipelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Backend Development</p>
                    <p className="text-gray-600 text-sm">Java, Golang, payment systems, e-commerce platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Cloud & DevOps</p>
                    <p className="text-gray-600 text-sm">GCP, infrastructure automation, workflow orchestration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="space-y-2">
                <span className="block text-gray-600">Java</span>
                <span className="block text-gray-600">Golang</span>
                <span className="block text-gray-600">Python</span>
                <span className="block text-gray-600">TypeScript</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Data & Messaging</h3>
              <div className="space-y-2">
                <span className="block text-gray-600">Apache Kafka</span>
                <span className="block text-gray-600">Debezium</span>
                <span className="block text-gray-600">CDC</span>
                <span className="block text-gray-600">Event Streaming</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Workflow & Orchestration</h3>
              <div className="space-y-2">
                <span className="block text-gray-600">Temporal</span>
                <span className="block text-gray-600">Microservices</span>
                <span className="block text-gray-600">Event-Driven Architecture</span>
                <span className="block text-gray-600">Distributed Systems</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Cloud & Infrastructure</h3>
              <div className="space-y-2">
                <span className="block text-gray-600">Google Cloud Platform</span>
                <span className="block text-gray-600">Kubernetes</span>
                <span className="block text-gray-600">Docker</span>
                <span className="block text-gray-600">Infrastructure as Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience Highlights</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monolith to Microservices Migration</h3>
              <p className="text-blue-600 mb-4">Large-scale System Transformation</p>
              <p className="text-gray-600 leading-relaxed">
                Led the migration of a large monolithic system into microservices architecture using Change Data Capture (CDC), 
                Debezium, and Apache Kafka. Designed event-driven patterns that enabled seamless data synchronization 
                and improved system scalability while maintaining data consistency across services.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complex Workflow Orchestration</h3>
              <p className="text-blue-600 mb-4">Temporal-based Systems</p>
              <p className="text-gray-600 leading-relaxed">
                Implemented sophisticated business workflows using Temporal, enabling reliable execution of 
                long-running processes with built-in retry mechanisms, compensation logic, and state management. 
                Designed fault-tolerant systems that handle complex business scenarios across distributed services.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain-Specific Microservices</h3>
              <p className="text-blue-600 mb-4">E-commerce & Healthcare Systems</p>
              <p className="text-gray-600 leading-relaxed">
                Built multiple microservices using Java and Golang for diverse domains including e-commerce platforms 
                and healthcare systems. Focused on domain-driven design principles, API design, and service 
                boundaries that align with business capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monolith Migration Framework</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive migration strategy and tooling for transforming monolithic applications 
                into microservices using CDC patterns and event-driven architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Java</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Kafka</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Debezium</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GCP</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Temporal Workflow Engine</h3>
              <p className="text-gray-600 mb-4">
                Scalable workflow orchestration system handling complex business processes 
                with reliability, observability, and fault tolerance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Golang</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Temporal</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Personal Projects & Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Data Pipeline</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Building scalable real-time data processing pipelines using modern streaming technologies.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Batch Data Pipeline</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Designing efficient batch processing systems for large-scale data transformation and analytics.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Figma to Frontend Parser</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Automated tool for converting Figma designs into functional frontend components.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="#" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Projects on GitHub</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Interested in discussing distributed systems, architecture patterns, or potential collaborations?
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="mailto:your.email@example.com" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Email
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/yourusername" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Aftaab Siddiki. Based in Singapore. Building the future, one distributed system at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
