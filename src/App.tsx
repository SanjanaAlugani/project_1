import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene3D from './components/Scene3D';

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Scene3D />
        </motion.div>
        <motion.div 
          className="container mx-auto px-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            SANJANA ALUGANI
          </motion.h1>
          <motion.div 
            className="flex flex-wrap gap-6 text-sm"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: Mail, text: "asanjana1502@gmail.com", href: "mailto:asanjana1502@gmail.com" },
              { icon: Phone, text: "+91-8019785445", href: "tel:+918019785445" },
              { icon: MapPin, text: "Hyderabad, India" },
              { icon: Github, text: "github.com/SanjanaAlugani", href: "https://github.com/SanjanaAlugani" },
              { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/sanjana-alugani-a37b5b215" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={16} className="text-blue-200" />
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-blue-200" size={24} />
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Objective */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Objective</h2>
          <motion.p 
            className="text-gray-600 text-lg leading-relaxed bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.01 }}
          >
            Dedicated graduate with a strong command of Python, DSA and proficiency in software development tools and IDEs.
          </motion.p>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Technology in EIE",
                school: "VNR Vignana Jyothi Institute of Engineering & Technology, JNTUH, Hyderabad",
                duration: "Dec 2020 - April 2024",
                grade: "CGPA: 7.36/10"
              },
              {
                degree: "High School",
                school: "St. Andrews School",
                grade: "GPA: 9.2/10"
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{edu.degree}</h3>
                <p className="text-gray-700 text-lg mb-2">{edu.school}</p>
                {edu.duration && <p className="text-gray-500 mb-2">{edu.duration}</p>}
                <p className="text-gray-600 font-medium">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Academic Projects</h2>
          <div className="grid gap-8">
            {[
              {
                title: "Enhancing Pedestrian Clothing Recognition",
                duration: "Aug 2023-April 2024",
                role: "Team Lead",
                team: "3",
                description: [
                  "Developed an advanced pedestrian detection system using Mask R-CNN and YOLOv5",
                  "Enhanced surveillance by assisting law enforcement",
                  "Achieved 82% accuracy through data augmentation and testing"
                ]
              },
              {
                title: "Land Surface Temperature Estimation Algorithm",
                duration: "Sep 2023-April 2024",
                organization: "ADRIN, DOS, Hyderabad",
                description: [
                  "Designed LST retrieval algorithm using Landsat-8 TIRS data",
                  "Analyzed climate change through spatial and temporal monitoring",
                  "Leveraged modern satellite platforms and processing techniques"
                ]
              },
              {
                title: "OCR-Based Document Processing System",
                duration: "Jan 2023-May 2023",
                role: "Developer",
                team: "2",
                description: [
                  "Implemented an OCR system using Tesseract and OpenCV for document digitization",
                  "Developed pre-processing pipeline for image enhancement and text extraction",
                  "Achieved 95% accuracy in text recognition for structured documents",
                  "Integrated PDF generation and automated document classification features",
                  "Reduced manual data entry time by 70% in testing environment"
                ],
                technologies: ["Python", "Tesseract", "OpenCV", "PyPDF2", "NumPy"]
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedProject === index ? 'ring-2 ring-blue-500' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">{project.title}</h3>
                <div className="text-gray-600 mb-4 flex flex-wrap gap-4">
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700">{project.duration}</span>
                  {project.role && (
                    <span className="bg-green-100 px-3 py-1 rounded-full text-green-700">Role: {project.role}</span>
                  )}
                  {project.team && (
                    <span className="bg-purple-100 px-3 py-1 rounded-full text-purple-700">Team Size: {project.team}</span>
                  )}
                </div>
                {project.organization && (
                  <p className="text-gray-700 mb-4 font-medium">{project.organization}</p>
                )}
                <AnimatePresence>
                  {selectedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <motion.ul 
                        className="list-disc list-inside text-gray-600 space-y-2 mt-4"
                      >
                        {project.description.map((point, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {point}
                          </motion.li>
                        ))}
                      </motion.ul>
                      {project.technologies && (
                        <motion.div 
                          className="mt-4 flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { skill: "C Language", duration: "2 years", color: "blue" },
              { skill: "C#", duration: "2 years", color: "purple" },
              { skill: "Python", duration: "2 years", color: "green" },
              { skill: "SQL", duration: "6 months", color: "orange" },
              { skill: "Power BI", duration: "6 months", color: "yellow" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-${skill.color}-500`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{skill.skill}</h3>
                <p className="text-gray-600">{skill.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { language: "English", level: "Proficient", color: "blue" },
              { language: "Telugu", level: "Native", color: "green" },
              { language: "Hindi", level: "Fluent", color: "yellow" },
              { language: "Kannada", level: "Basic", color: "purple" },
              { language: "French", level: "Basic", color: "pink" }
            ].map((lang, index) => (
              <motion.div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-${lang.color}-500`}
                whileHover={{ scale: 1.05, x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{lang.language}</h3>
                <p className="text-gray-600">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">© 2024 Sanjana Alugani. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;