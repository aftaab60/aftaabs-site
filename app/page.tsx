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
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
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
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Designing and building large-scale distributed systems that power modern applications. Specialized in microservices architecture, real-time data processing, and complex workflow orchestration.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="#contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="#experience" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-center"
                >
                  View Experience
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in Singapore, I specialize in transforming complex business requirements into scalable and resilient distributed backend systems. My expertise spans payments, e-commerce, and customer-facing data platforms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am passionate about solving challenging problems at scale, from migrating monolithic systems to microservices, to designing real-time data pipelines and orchestrating complex workflows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {/* Placeholder for an icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Distributed Systems Architecture</p>
                    <p className="text-gray-600 text-sm">Microservices, event-driven architecture, scalability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {/* Placeholder for an icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m16-10v10M8 7v10m8-10v10m-4-11v12"></path></svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Data Engineering</p>
                    <p className="text-gray-600 text-sm">Real-time & batch processing, CDC, Kafka, data pipelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {/* Placeholder for an icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Backend Development</p>
                    <p className="text-gray-600 text-sm">Java, Golang, payment systems, e-commerce platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {/* Placeholder for an icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                  </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Golang</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Data & Messaging</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Apache Kafka</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Debezium</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">CDC</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Event Streaming</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Workflow & Orchestration</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Temporal</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Microservices</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Event-Driven Architecture</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Distributed Systems</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Google Cloud Platform</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Infrastructure as Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Experience & Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monolith to Microservices Migration</h3>
                <p className="text-blue-600 mb-4">Large-scale System Transformation</p>
                <p className="text-gray-600 leading-relaxed">
                  Led the migration of a large monolithic system into microservices architecture using Change Data Capture (CDC), 
                  Debezium, and Apache Kafka. Designed event-driven patterns that enabled seamless data synchronization 
                  and improved system scalability while maintaining data consistency across services.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Kafka</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Debezium</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">GCP</span>
                </div>
                <Link href="#" className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  View Project →
                </Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complex Workflow Orchestration</h3>
                <p className="text-blue-600 mb-4">Temporal-based Systems</p>
                <p className="text-gray-600 leading-relaxed">
                  Implemented sophisticated business workflows using Temporal, enabling reliable execution of 
                  long-running processes with built-in retry mechanisms, compensation logic, and state management. 
                  Designed fault-tolerant systems that handle complex business scenarios across distributed services.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Golang</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Temporal</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Microservices</span>
                </div>
                <Link href="#" className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  View Project →
                </Link>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Domain-Specific Microservices</h3>
                <p className="text-blue-600 mb-4">E-commerce, Payments & Healthcare Systems</p>
                <p className="text-gray-600 mb-4">
                  Built and deployed microservices for e-commerce and healthcare, focusing on domain-driven design principles and clear API boundaries for business capabilities.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Golang</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">DDD</span>
                </div>
                <Link href="#" className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  View Details →
                </Link>
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
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Data Pipeline</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Building scalable real-time data processing pipelines using modern streaming technologies.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Batch Data Pipeline</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Designing efficient batch processing systems for large-scale data transformation and analytics.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Figma to Frontend Parser</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                An automated tool for converting Figma designs into functional frontend components.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                Read More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="https://github.com/aftaab60" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <span>View All on GitHub</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="mailto:aftaab60@gmail.com" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>Email Me</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aftaab-siddiki" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Aftaab Siddiki</p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/aftaab60" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/aftaab-siddiki" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aftaab Siddiki. All rights reserved.</p>
            <p>Designed with a passion for clean architecture and scalable systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
