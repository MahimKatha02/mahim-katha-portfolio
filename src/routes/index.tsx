import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Check,
  Star,
  ExternalLink,
} from "lucide-react";

// SVG Icons
function Github({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.7-1.49-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.9.12 2.77.36 2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.57 5.16-5.02 5.43.4.34.75 1.02.75 2.06 0 1.49-.01 2.68-.01 3.05 0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.44C23.01 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

import { Navbar } from "@/components/portfolio/Navbar";
import { Section, Card, AnchorButton, Button, fadeUp } from "@/components/portfolio/ui";
import { OrderForm } from "@/components/portfolio/OrderForm";
import {
  SOCIALS,
  SKILL_GROUPS,
  PROJECTS,
  SERVICES,
  PRICING,
  CERTIFICATIONS,
  TIMELINE,
  NAV_LINKS,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--pearl)] text-[var(--eerie)]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Pricing />
      <Order />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}



function Hero() {
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [image1Error, setImage1Error] = useState(false);
  const [image2Error, setImage2Error] = useState(false);

  // Preload images on mount
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const loadImages = async () => {
      try {
        await Promise.all([
          preloadImage('/profile.jpg'),
          preloadImage('/profile2.jpg'),
        ]);
        setImage1Loaded(true);
        setImage2Loaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        setImage1Error(true);
        setImage2Error(true);
      }
    };

    loadImages();
  }, []);

  return (
    <section id="home" className="pt-16 md:pt-20 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-40%] right-[-20%] w-[500px] h-[500px] rounded-full bg-[var(--burgundy)]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--umber)]/5 blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            className="lg:col-span-3 text-center lg:text-left"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--umber)] mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-px bg-[var(--umber)]" />
              Machine Learning Engineer · Bangladesh
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] sm:leading-[1.05] text-[var(--burgundy)]">
              Mahim Chowdhury
              <br className="block sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Katha
            </h1>
            
            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[var(--umber)] tracking-wide max-w-2xl mx-auto lg:mx-0">
              Machine Learning · Artificial Intelligence · Data Science · Web Development · Networking · Entrepreneur
            </p>
            
            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-[var(--eerie)]/75 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              BSc in Computer Science & Engineering (Data Science) graduate from East West University with hands-on experience in machine learning, deep learning, and computer vision. Completed five AI/ML research projects and three certifications.
            </p>
            
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <AnchorButton href="#projects" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                View Projects <ArrowRight size={16} className="inline-block" />
              </AnchorButton>
              <AnchorButton href="#order" variant="outline" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Hire Me
              </AnchorButton>
              <AnchorButton
                href="/Mahim_Chowdhury_Katha_Updated_CV_.pdf"
                download
                variant="ghost"
                className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Download size={16} className="inline-block mr-1" />
                Download CV
              </AnchorButton>
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-4 sm:gap-5 text-[var(--burgundy)] justify-center lg:justify-start">
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--umber)] transition">
                <Linkedin size={20} />
              </a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--umber)] transition">
                <Github size={20} />
              </a>
              <a href={SOCIALS.email} aria-label="Email" className="hover:text-[var(--umber)] transition">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Images - Right Side */}
          <motion.div 
            className="lg:col-span-2 flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              {/* First Image - Profile */}
              <motion.div 
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glowing background effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--burgundy)]/20 to-[var(--umber)]/20 blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Image Container - Mobile Responsive */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[var(--pearl)] shadow-2xl">
                  {!image1Loaded && !image1Error && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[var(--pearl)] via-[var(--platinum)] to-[var(--pearl)]"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  
                  {/* Fallback if image fails to load */}
                  {image1Error ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--burgundy)] to-[var(--umber)]">
                      <span className="text-2xl sm:text-3xl font-display text-[var(--pearl)]">MCK</span>
                    </div>
                  ) : (
                    <img 
                      src="/profile.jpg"
                      alt="Mahim Chowdhury Katha"
                      className="w-full h-full object-cover"
                      onLoad={() => setImage1Loaded(true)}
                      onError={() => setImage1Error(true)}
                      style={{ opacity: image1Loaded ? 1 : 0 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy)]/10 to-transparent" />
                </div>

                {/* Decorative rings - Hidden on mobile */}
                <motion.div 
                  className="absolute -inset-4 rounded-full border border-[var(--umber)]/10 hidden sm:block"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -inset-8 rounded-full border border-[var(--tuscany)]/5 hidden sm:block"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating badges - Smaller on mobile */}
                <motion.div 
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[var(--pearl)] rounded-full p-1.5 sm:p-2 shadow-lg border border-[var(--border)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-[10px] sm:text-xs font-medium text-[var(--burgundy)]">AI</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-[var(--pearl)] rounded-full p-1.5 sm:p-2 shadow-lg border border-[var(--border)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <span className="text-[10px] sm:text-xs font-medium text-[var(--umber)]">ML</span>
                </motion.div>
              </motion.div>

              {/* Second Image - profile2 - Hidden on mobile */}
              <motion.div 
                className="relative flex-shrink-0 hidden sm:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {/* Glowing effect for second image */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--umber)]/10 to-[var(--burgundy)]/10 blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Second Image Container */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-[var(--pearl)] shadow-xl">
                  {!image2Loaded && !image2Error && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[var(--pearl)] via-[var(--platinum)] to-[var(--pearl)]"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  )}
                  
                  {/* Fallback if image fails to load */}
                  {image2Error ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--umber)] to-[var(--tuscany)]">
                      <span className="text-xl sm:text-2xl font-display text-[var(--pearl)]">WORK</span>
                    </div>
                  ) : (
                    <img 
                      src="/profile2.jpg"
                      alt="Mahim Chowdhury Katha - Work"
                      className="w-full h-full object-cover"
                      onLoad={() => setImage2Loaded(true)}
                      onError={() => setImage2Error(true)}
                      style={{ opacity: image2Loaded ? 1 : 0 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy)]/10 to-transparent" />
                </div>

                {/* Decorative corner badge */}
                <motion.div 
                  className="absolute -top-2 -right-2 bg-[var(--burgundy)] text-[var(--pearl)] text-[10px] font-medium px-2 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  ✦
                </motion.div>
              </motion.div>
            </div>

            {/* Labels below images - Hidden on mobile */}
            <motion.div 
              className="hidden sm:flex gap-8 md:gap-12 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-[10px] text-[var(--umber)] tracking-wider">Profile</span>
              <span className="text-[10px] text-[var(--umber)] tracking-wider">Work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





// function About() {
//   return (
//     <Section id="about" eyebrow="About" title="A calm, methodical builder of intelligent systems." subtitle="BSc in Computer Science & Engineering (Data Science) graduate from East West University with hands-on experience in machine learning, deep learning, and computer vision. Completed five AI/ML research projects and three certifications.">
//       <div className="grid lg:grid-cols-5 gap-10">
//         <div className="lg:col-span-3 space-y-5 text-[var(--eerie)]/80 leading-relaxed">
//           <p>
//             I hold a BSc in Computer Science & Engineering from <strong className="text-[var(--burgundy)]">East West University</strong>,
//             with a major in Data Science (CGPA: 3.01/4.00). Coursework includes Machine Learning, Deep Learning, Computer Vision, Data Structures & Algorithms, Computer Networks, Probability & Statistics, Linear Algebra, Discrete Mathematics, and Database Systems.
//           </p>
//           <p>
//             My work sits at the intersection of applied AI research and production software — building models that are accurate, explainable and useful. I've completed <strong className="text-[var(--burgundy)]">five AI/ML research projects</strong> including Tomato Leaf Disease Classification, Wall Crack Detection, and Rice Varieties Classification using PyTorch, CNNs, and Scikit-learn.
//           </p>
//           <p>
//             Alongside engineering, I am the <strong className="text-[var(--burgundy)]">Founder of Purple Daze & Arctic Daze</strong> (Sep 2023 - Present), self-funded e-commerce businesses where I manage product importing, supplier negotiation, inventory, financial budgeting, accounts, monthly P&L tracking, and marketing strategy. This entrepreneurial experience has developed my leadership, client communication, and operational coordination skills.
//           </p>
//           <p>
//             I care about craft — clean data pipelines, disciplined evaluation, thoughtful interfaces, and networks that are as reliable in stress as they are on paper.
//           </p>
//         </div>
//         <div className="lg:col-span-2 space-y-4">
//           {TIMELINE.map((t, i) => (
//             <motion.div
//               key={t.title}
//               custom={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative pl-6 border-l-2 border-[var(--tuscany)] py-2"
//             >
//               <div className="text-xs uppercase tracking-widest text-[var(--umber)]">{t.year}</div>
//               <div className="mt-1 font-medium text-[var(--burgundy)]">{t.title}</div>
//               <div className="mt-1 text-sm text-[var(--eerie)]/70 leading-relaxed">{t.body}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }



// function About() {
//   return (
//     <Section id="about" eyebrow="About" title="A calm, methodical builder of intelligent systems." subtitle="BSc in Computer Science & Engineering (Data Science) graduate from East West University with hands-on experience in machine learning, deep learning, and computer vision. Completed five AI/ML research projects and three certifications.">
//       <div className="grid lg:grid-cols-5 gap-10">
//         <div className="lg:col-span-3 space-y-5 text-[var(--eerie)]/80 leading-relaxed">
//           <p>
//             I hold a BSc in Computer Science & Engineering from <strong className="text-[var(--burgundy)]">East West University</strong>,
//             with a major in Data Science (CGPA: 3.01/4.00). Coursework includes Machine Learning, Deep Learning, Computer Vision, Data Structures & Algorithms, Computer Networks, Probability & Statistics, Linear Algebra, Discrete Mathematics, and Database Systems.
//           </p>
//           <p>
//             My work sits at the intersection of applied AI research and production software — building models that are accurate, explainable and useful. I've completed <strong className="text-[var(--burgundy)]">five AI/ML research projects</strong> including Tomato Leaf Disease Classification, Wall Crack Detection, and Rice Varieties Classification using PyTorch, CNNs, and Scikit-learn.
//           </p>
//           <p>
//             Alongside engineering, I am the <strong className="text-[var(--burgundy)]">Founder & Owner</strong> of two successful e-commerce ventures:
//           </p>
//           <ul className="space-y-3 pl-4">
//             <li className="flex items-start gap-2">
//               <span className="text-[var(--burgundy)] font-semibold">•</span>
//               <div>
//                 <strong className="text-[var(--burgundy)]">Purple Daze</strong>
//                 <a 
//                   href="https://purple-daze.vercel.app" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="ml-2 text-[var(--umber)] hover:text-[var(--burgundy)] transition underline"
//                 >
//                   purple-daze.vercel.app
//                 </a>
//                 <span className="text-sm text-[var(--eerie)]/70 block mt-1">
//                   Self-funded online retail business specializing in Women's curated products
//                 </span>
//               </div>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[var(--burgundy)] font-semibold">•</span>
//               <div>
//                 <strong className="text-[var(--burgundy)]">Arctic Daze</strong>
//                 <a 
//                   href="https://arctic-daze.vercel.app" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="ml-2 text-[var(--umber)] hover:text-[var(--burgundy)] transition underline"
//                 >
//                   arctic-daze.vercel.app
//                 </a>
//                 <span className="text-sm text-[var(--eerie)]/70 block mt-1">
//                   Self-funded e-commerce platform with a focus on Men's fasion,quality products and customer satisfaction
//                 </span>
//               </div>
//             </li>
//           </ul>
//           <p className="mt-3">
//             Since <strong className="text-[var(--burgundy)]">September 2023</strong>, I have managed product importing, supplier negotiation, inventory, financial budgeting, accounts, monthly P&L tracking, and marketing strategy for both businesses. Leading a small team has developed my leadership, client communication, and operational coordination skills.
//           </p>
//           <p>
//             I care about craft — clean data pipelines, disciplined evaluation, thoughtful interfaces, and networks that are as reliable in stress as they are on paper.
//           </p>
//         </div>
//         <div className="lg:col-span-2 space-y-4">
//           {TIMELINE.map((t, i) => (
//             <motion.div
//               key={t.title}
//               custom={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative pl-6 border-l-2 border-[var(--tuscany)] py-2"
//             >
//               <div className="text-xs uppercase tracking-widest text-[var(--umber)]">{t.year}</div>
//               <div className="mt-1 font-medium text-[var(--burgundy)]">{t.title}</div>
//               <div className="mt-1 text-sm text-[var(--eerie)]/70 leading-relaxed">{t.body}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }



function About() {
  return (
    <Section id="about" eyebrow="About" title="A calm, methodical builder of intelligent systems.
    
    " subtitle=""> 

    {/* BSc in Computer Science & Engineering (Data Science) graduate from East West University with hands-on experience in machine learning, deep learning, and computer vision. Completed five AI/ML research projects and three certifications. */}

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5 text-[var(--eerie)]/80 leading-relaxed">
          <p>
            I hold a BSc in Computer Science & Engineering from <strong className="text-[var(--burgundy)]">East West University</strong>,
            with a major in Data Science (CGPA: 3.01/4.00). Coursework includes Machine Learning, Deep Learning, Computer Vision, Data Structures & Algorithms, Computer Networks, Probability & Statistics, Linear Algebra, Discrete Mathematics, and Database Systems.
          </p>
          <p>
            My work sits at the intersection of applied AI research and production software — building models that are accurate, explainable and useful. I've completed <strong className="text-[var(--burgundy)]">five AI/ML research projects</strong> including Tomato Leaf Disease Classification, Wall Crack Detection, and Rice Varieties Classification using PyTorch, CNNs, and Scikit-learn.
          </p>
          <p>
            Alongside engineering, I am the <strong className="text-[var(--burgundy)]">Founder & Owner</strong> of two successful e-commerce ventures:
          </p>
          
          {/* Purple Daze with Animation */}
          <motion.div 
            className="bg-[var(--pearl)] border border-[var(--border)] rounded-lg p-4 transition-all hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white border border-[var(--border)] flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/purple-daze-logo.png"
                  alt="Purple Daze Logo"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2">
                  <strong className="text-[var(--burgundy)] text-lg">Purple Daze</strong>
                  <a 
                    href="https://purple-daze.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[var(--umber)] hover:text-[var(--burgundy)] transition underline text-sm"
                  >
                    purple-daze.vercel.app
                  </a>
                </div>
                <span className="text-sm text-[var(--eerie)]/70 block mt-1">
                  Self-funded online retail business specializing in Women's curated products
                </span>
              </div>
            </div>
          </motion.div>

          {/* Arctic Daze with Animation */}
          <motion.div 
            className="bg-[var(--pearl)] border border-[var(--border)] rounded-lg p-4 transition-all hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white border border-[var(--border)] flex items-center justify-center"
                whileHover={{ rotate: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/arctic-daze-logo.png"
                  alt="Arctic Daze Logo"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2">
                  <strong className="text-[var(--burgundy)] text-lg">Arctic Daze</strong>
                  <a 
                    href="https://arctic-daze.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[var(--umber)] hover:text-[var(--burgundy)] transition underline text-sm"
                  >
                    arctic-daze.vercel.app
                  </a>
                </div>
                <span className="text-sm text-[var(--eerie)]/70 block mt-1">
                  Self-funded e-commerce platform with a focus on Men's fashion, quality products and customer satisfaction
                </span>
              </div>
            </div>
          </motion.div>

          <p className="mt-3">
            Since <strong className="text-[var(--burgundy)]">September 2023</strong>, I have managed product importing, supplier negotiation, inventory, financial budgeting, accounts, monthly P&L tracking, and marketing strategy for both businesses. Leading a small team has developed my leadership, client communication, and operational coordination skills.
          </p>
          <p>
            I care about craft — clean data pipelines, disciplined evaluation, thoughtful interfaces, and networks that are as reliable in stress as they are on paper.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-[var(--tuscany)] py-2"
            >
              <div className="text-xs uppercase tracking-widest text-[var(--umber)]">{t.year}</div>
              <div className="mt-1 font-medium text-[var(--burgundy)]">{t.title}</div>
              <div className="mt-1 text-sm text-[var(--eerie)]/70 leading-relaxed">{t.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}





function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A disciplined, cross-disciplinary toolkit." subtitle="Programming, machine learning, data analytics, networking, and digital skills.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div key={g.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <h3 className="text-xl mb-5">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--eerie)]/85">{s.name}</span>
                      <span className="text-[var(--umber)] text-xs tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--pearl)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[var(--umber)] rounded-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// function Projects() {
//   return (
//     <Section id="projects" eyebrow="Featured Projects" title="Selected work across AI, vision, data and networks." subtitle="A curated view of research-grade and applied projects built with clean methodology.">
//       <div className="grid md:grid-cols-2 gap-6">
//         {PROJECTS.map((p, i) => (
//           <motion.div key={p.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Card className="h-full flex flex-col">
//               <div className="aspect-[16/9] rounded-lg bg-[var(--pearl)] border border-[var(--border)] mb-6 flex items-center justify-center overflow-hidden">
//                 <div className="font-display text-4xl text-[var(--tuscany)] opacity-70">
//                   {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
//                 </div>
//               </div>
//               <h3 className="text-2xl mb-3">{p.title}</h3>
//               <p className="text-[var(--eerie)]/70 leading-relaxed mb-5">{p.description}</p>
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {p.tech.map((t) => (
//                   <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[var(--pearl)] border border-[var(--border)] text-[var(--umber)]">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <ul className="text-sm text-[var(--eerie)]/70 space-y-1.5 mb-6">
//                 {p.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <Check size={14} className="text-[var(--umber)] mt-1" /> {f}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-auto flex gap-3">
//                 <AnchorButton href={p.github} variant="outline" className="!py-2 !px-4 text-xs">
//                   <Github size={14} /> GitHub
//                 </AnchorButton>
//                 <AnchorButton href={p.details} className="!py-2 !px-4 text-xs">
//                   Details <ExternalLink size={14} />
//                 </AnchorButton>
//               </div>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </Section>
//   );
// }



function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work across AI, vision, data and networks." subtitle="A curated view of research-grade and applied projects built with clean methodology.">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div 
            key={p.title} 
            custom={i} 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="h-full flex flex-col group relative overflow-hidden">
              {/* Image Container with hover effect */}
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-[var(--pearl)] border border-[var(--border)]">
                <img 
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View project button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[var(--pearl)] text-[var(--burgundy)] px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Project →
                  </span>
                </div>
                
                {/* Tech stack badges overlay */}
                <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
                  {p.tech.slice(0, 2).map((t) => (
                    <span key={t} className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--pearl)]/90 backdrop-blur-sm text-[var(--umber)] font-medium shadow-sm border border-[var(--border)]">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 2 && (
                    <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--pearl)]/90 backdrop-blur-sm text-[var(--umber)] font-medium shadow-sm border border-[var(--border)]">
                      +{p.tech.length - 2}
                    </span>
                  )}
                </div>

                {/* Project type badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--burgundy)]/80 backdrop-blur-sm text-[var(--pearl)] font-medium shadow-sm">
                    {p.tech.includes("PyTorch") ? "AI/ML" : 
                     p.tech.includes("HTML") ? "Web App" : 
                     "Research"}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl mb-3 group-hover:text-[var(--burgundy)] transition-colors">
                {p.title}
              </h3>
              <p className="text-[var(--eerie)]/70 leading-relaxed mb-5">{p.description}</p>
              
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[var(--pearl)] border border-[var(--border)] text-[var(--umber)]">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="text-sm text-[var(--eerie)]/70 space-y-1.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-[var(--umber)] mt-1 flex-shrink-0" /> 
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto flex gap-3">
                <AnchorButton href={p.github} variant="outline" className="!py-2 !px-4 text-xs">
                  <Github size={14} /> GitHub
                </AnchorButton>
                <AnchorButton href={p.details} className="!py-2 !px-4 text-xs">
                  Details <ExternalLink size={14} />
                </AnchorButton>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}






function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Services delivered with consultancy-grade rigor." subtitle="From research prototypes to production deployments — clearly scoped and dependable.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-3">0{i + 1}</div>
              <h3 className="text-xl mb-4">{s.title}</h3>
              <ul className="text-sm text-[var(--eerie)]/75 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--umber)] mt-2" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="Transparent packages in Bangladeshi Taka." subtitle="Clear scope, clear timelines. Custom quotes available for anything outside these tiers.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING.map((p, i) => (
          <motion.div key={p.tier} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[var(--umber)] text-[var(--pearl)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1">
                <Star size={10} /> Most Popular
              </div>
            )}
            <Card className={`h-full flex flex-col ${p.popular ? "ring-1 ring-[var(--umber)]" : ""}`}>
              <div className="text-sm uppercase tracking-widest text-[var(--umber)]">{p.tier}</div>
              <div className="mt-3 font-display text-4xl text-[var(--burgundy)]">{p.price}</div>
              <div className="text-xs text-[var(--eerie)]/60 mt-1">Delivery: {p.delivery}</div>
              <div className="h-px bg-[var(--border)] my-6" />
              <ul className="space-y-3 text-sm text-[var(--eerie)]/80 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-[var(--umber)] mt-1" /> {f}
                  </li>
                ))}
              </ul>
              <AnchorButton
                href="#order"
                variant={p.popular ? "primary" : "outline"}
                className="mt-auto w-full"
              >
                Choose {p.tier}
              </AnchorButton>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Order() {
  return (
    <Section id="order" eyebrow="Order Project" title="Let's build your project." subtitle="Share the essentials and I'll reply with a tailored plan within 24 hours.">
      <OrderForm />
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous, verifiable learning.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div key={c.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg leading-snug">{c.title}</h3>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap ${
                    c.status === "Completed"
                      ? "bg-[var(--umber)] text-[var(--pearl)]"
                      : "bg-[var(--pearl)] text-[var(--umber)] border border-[var(--border)]"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// function Contact() {
//   return (
//     <Section id="contact" eyebrow="Contact" title="Let's start a conversation.">
//       <div className="grid lg:grid-cols-2 gap-8">
//         <Card>
//           <div className="space-y-5">
//             <ContactRow icon={<Mail size={18} />} label="Email" value="sinthiyakotha870@gmail.com" href={SOCIALS.email} />
//             <ContactRow icon={<Phone size={18} />} label="Phone" value={SOCIALS.phone} href={`tel:${SOCIALS.phone}`} />
//             <ContactRow icon={<MapPin size={18} />} label="Location" value="Aftabnagar, Dhaka, Bangladesh" />
//             <ContactRow icon={<Linkedin size={18} />} label="LinkedIn" value="mahim-chowdhury-katha02" href={SOCIALS.linkedin} />
//             <ContactRow icon={<Github size={18} />} label="GitHub" value="MahimKatha02" href={SOCIALS.github} />
//             <ContactRow icon={<ExternalLink size={18} />} label="Portfolio" value="mahim-katha-portfolio-1.vercel.app" href="https://mahim-katha-portfolio-1.vercel.app" />
//           </div>
//           <div className="mt-8 flex gap-3">
//             <AnchorButton href={SOCIALS.email}>
//               <Mail size={16} /> Send Email
//             </AnchorButton>
//             <AnchorButton href="#order" variant="outline">Start a Project</AnchorButton>
//           </div>
//         </Card>
//         <Card className="!p-0 overflow-hidden">
//           <iframe
//             title="Location"
//             src="https://www.google.com/maps?q=Aftabnagar,Dhaka,Bangladesh&output=embed"
//             className="w-full h-full min-h-[360px] border-0"
//             loading="lazy"
//           />
//         </Card>
//       </div>
//     </Section>
//   );
// }



function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's start a conversation.">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <div className="space-y-5">
            <ContactRow icon={<Mail size={18} />} label="Email" value="sinthiyakotha870@gmail.com" href={SOCIALS.email} />
            <ContactRow icon={<Phone size={18} />} label="Phone" value={SOCIALS.phone} href={`tel:${SOCIALS.phone}`} />
            <ContactRow icon={<MapPin size={18} />} label="Location" value="Aftabnagar, Dhaka, Bangladesh" />
            <ContactRow icon={<Linkedin size={18} />} label="LinkedIn" value="mahim-chowdhury-katha02" href={SOCIALS.linkedin} />
            <ContactRow icon={<Github size={18} />} label="GitHub" value="MahimKatha02" href={SOCIALS.github} />
            <ContactRow icon={<ExternalLink size={18} />} label="Portfolio" value="mahim-katha-portfolio-1.vercel.app" href="https://mahim-katha-portfolio-1.vercel.app" />
            
            {/* Business Links */}
            <div className="pt-2 border-t border-[var(--border)]">
              <div className="text-[10px] uppercase tracking-widest text-[var(--umber)] mb-2">Businesses</div>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://purple-daze.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--pearl)] border border-[var(--border)] flex items-center justify-center text-[var(--umber)] group-hover:bg-[var(--umber)] group-hover:text-[var(--pearl)] transition flex-shrink-0">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--umber)]">Purple Daze</div>
                    <div className="text-sm text-[var(--eerie)] group-hover:text-[var(--burgundy)] transition">purple-daze.vercel.app</div>
                  </div>
                </a>
                <a 
                  href="https://arctic-daze.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--pearl)] border border-[var(--border)] flex items-center justify-center text-[var(--umber)] group-hover:bg-[var(--umber)] group-hover:text-[var(--pearl)] transition flex-shrink-0">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--umber)]">Arctic Daze</div>
                    <div className="text-sm text-[var(--eerie)] group-hover:text-[var(--burgundy)] transition">arctic-daze.vercel.app</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <AnchorButton href={SOCIALS.email}>
              <Mail size={16} /> Send Email
            </AnchorButton>
            <AnchorButton href="#order" variant="outline">Start a Project</AnchorButton>
          </div>
        </Card>
        <Card className="!p-0 overflow-hidden">
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Aftabnagar,Dhaka,Bangladesh&output=embed"
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
          />
        </Card>
      </div>
    </Section>
  );
}





function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-[var(--pearl)] border border-[var(--border)] flex items-center justify-center text-[var(--umber)] group-hover:bg-[var(--umber)] group-hover:text-[var(--pearl)] transition">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-[var(--umber)]">{label}</div>
        <div className="text-sm text-[var(--eerie)]">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

// function Footer() {
//   return (
//     <footer className="border-t border-[var(--border)] py-14 mt-10">
//       <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-10">
//         <div>
//           <div className="font-display text-xl text-[var(--burgundy)]">Mahim Chowdhury Katha</div>
//           <div className="text-sm text-[var(--eerie)]/70 mt-2">
//             Machine Learning Engineer · AI Developer · Data Science Graduate
//           </div>
//           <div className="text-xs text-[var(--eerie)]/50 mt-2">
//             BSc in CSE (Data Science) · East West University
//           </div>
//         </div>
//         <div>
//           <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Quick Links</div>
//           <ul className="grid grid-cols-2 gap-y-2 text-sm">
//             {NAV_LINKS.slice(0, 8).map((l) => (
//               <li key={l.id}>
//                 <a href={`#${l.id}`} className="text-[var(--eerie)]/75 hover:text-[var(--burgundy)]">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Social</div>
//           <div className="flex gap-3">
//             <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
//               <Linkedin size={16} />
//             </a>
//             <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
//               <Github size={16} />
//             </a>
//             <a href={SOCIALS.email} className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
//               <Mail size={16} />
//             </a>
//           </div>
//           <div className="mt-4 text-xs text-[var(--eerie)]/50">
//             <p>📧 sinthiyakotha870@gmail.com</p>
//             <p>📱 +880 1309 295455</p>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-[1200px] mx-auto px-6 mt-10 pt-6 border-t border-[var(--border)] text-xs text-[var(--eerie)]/60 flex flex-wrap justify-between gap-2">
//         <div>© 2026 Mahim Chowdhury Katha. All Rights Reserved.</div>
//         <div>Built with care in Dhaka, Bangladesh.</div>
//       </div>
//     </footer>
//   );
// }

// // Suppress unused Button import warning; used indirectly via named export re-use
// export { Button };




function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-xl text-[var(--burgundy)]">Mahim Chowdhury Katha</div>
          <div className="text-sm text-[var(--eerie)]/70 mt-2">
            Machine Learning Engineer · AI Developer · Data Science Graduate
          </div>
          <div className="text-xs text-[var(--eerie)]/50 mt-2">
            BSc in CSE (Data Science) · East West University
          </div>
          <div className="mt-3 space-y-1">
            <div className="text-xs text-[var(--eerie)]/60">
              <span className="text-[var(--umber)]">Founder:</span>
              <a 
                href="https://purple-daze.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1 hover:text-[var(--burgundy)] transition"
              >
                Purple Daze
              </a>
              <span className="mx-1">·</span>
              <a 
                href="https://arctic-daze.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[var(--burgundy)] transition"
              >
                Arctic Daze
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Quick Links</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {NAV_LINKS.slice(0, 8).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-[var(--eerie)]/75 hover:text-[var(--burgundy)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Social</div>
          <div className="flex gap-3">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Linkedin size={16} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Github size={16} />
            </a>
            <a href={SOCIALS.email} className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Mail size={16} />
            </a>
          </div>
          <div className="mt-4 text-xs text-[var(--eerie)]/50 space-y-1">
            <p> sinthiyakotha870@gmail.com</p>
            <p> +880 1309 295455</p>
          
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-10 pt-6 border-t border-[var(--border)] text-xs text-[var(--eerie)]/60 flex flex-wrap justify-between gap-2">
        <div>© 2026 Mahim Chowdhury Katha. All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="https://purple-daze.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[var(--burgundy)] transition">
            Purple Daze
          </a>
          <a href="https://arctic-daze.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[var(--burgundy)] transition">
            Arctic Daze
          </a>
          <span>Built with care in Dhaka, Bangladesh.</span>
        </div>
      </div>
    </footer>
  );
}


// At the very bottom of your file
export { Button };