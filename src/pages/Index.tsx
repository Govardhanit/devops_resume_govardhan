
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AnimatedSphere = () => {
  return (
    <mesh scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#6366f1" 
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

const Index = () => {
  const navigate = useNavigate();
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/govardhan-p/", color: "#0077b5" },
    { icon: Github, href: "https://github.com/Govardhanit", color: "#333" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      
      <Navigation />
      
  <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-12 relative z-10 pt-24 sm:pt-28">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 max-w-2xl"
        >
          {/* Profile Image for Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 lg:hidden" // Show only on mobile/tablet
          >
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-30"></div>
              <Avatar className="relative w-full h-full border-2 border-indigo-400/50">
                <AvatarImage 
                  src="/uploads/profile.jpg"
                  alt="Govardhan P"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-gray-800 to-gray-900">
                  👨‍💻
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hi, I'm Govardhan <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <motion.h2
              className="text-2xl lg:text-3xl font-semibold text-indigo-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Software Engineer (2+ Yrs) | Cloud & DevOps Engineer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Background in software development, now driving expertise in Cloud Infrastructure, CI/CD, and Automation.
              Proficient with AWS, Terraform, Docker, and Python, building scalable and reliable solutions.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image for Desktop */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center max-w-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-96 h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
            <Avatar className="relative w-full h-full border-4 border-indigo-400/50">
              <AvatarImage 
                src="/uploads/profile.jpg" 
                alt="Govardhan P"
                className="object-cover"
              />
              <AvatarFallback className="text-8xl bg-gradient-to-br from-gray-800 to-gray-900">
                👨‍💻
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Index;
