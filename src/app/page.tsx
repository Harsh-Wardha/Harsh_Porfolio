  'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Smartphone, Zap, Globe, Cpu, Server, Layers, Sparkles, Award, Users, Briefcase, Download, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = '/api/download-cv'
    link.download = 'Harsh-Wardhan-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Harsh Wardhan
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-primary transition-colors hover:scale-105 transform duration-200">About</a>
              <a href="#skills" className="hover:text-primary transition-colors hover:scale-105 transform duration-200">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors hover:scale-105 transform duration-200">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors hover:scale-105 transform duration-200">Contact</a>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              asChild
            >
              <a href="/api/download-cv" download="Harsh-Wardhan-CV.pdf" onClick={handleDownloadCV}>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <motion.div 
            className="container mx-auto max-w-4xl text-center relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="mb-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 px-6 py-2 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies, clean architecture, and pixel-perfect design
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl" asChild>
                <a href="#projects">
                  <Briefcase className="h-5 w-5 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 hover:border-primary/30" asChild>
                <a href="/api/download-cv" download="Harsh-Wardhan-CV.pdf" onClick={handleDownloadCV}>
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 justify-center mt-10"
            >
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all" asChild>
                <a href="https://github.com/Harsh-Wardha" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all" asChild>
                <a href="https://www.linkedin.com/in/harsh-wardhan-93879a285" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all" asChild>
                <a href="mailto:wharsh225@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">About Me</h2>
              <p className="text-center text-muted-foreground mb-12">Passionate developer building the future of web</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded">4+ years of experience</span> building web applications and digital solutions that make a difference.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Throughout my career, I've worked with startups and established companies, delivering high-quality software that scales and performs. I specialize in modern JavaScript frameworks, cloud technologies, and creating seamless user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                      <span className="text-muted-foreground font-medium">Experience</span>
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gradient-to-r from-primary/20 to-purple-600/20">4+ Years</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                      <span className="text-muted-foreground font-medium">Projects Completed</span>
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gradient-to-r from-primary/20 to-purple-600/20">25+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                      <span className="text-muted-foreground font-medium">Happy Clients</span>
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gradient-to-r from-primary/20 to-purple-600/20">15+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                      <span className="text-muted-foreground font-medium">Technologies</span>
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gradient-to-r from-primary/20 to-purple-600/20">10+</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                What clients say about working with me
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Carousel
                plugins={[autoplayPlugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                onMouseEnter={() => autoplayPlugin.current.stop()}
                onMouseLeave={() => autoplayPlugin.current.play()}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {/* Testimonial 1 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-green-600">
                            R
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">ramiarqoub</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇵🇸</span> Palestinian Territories
                            </p>
                            <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/30">
                              Repeat Client
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            This is second time i do tasks with harsh, he is so professional at work.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  {/* Testimonial 2 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-purple-500/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-purple-600">
                            J
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">jinnanalmu</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇸🇦</span> Saudi Arabia
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            Thanks to Harsh he is very smart and polite. I recommend anyone to work with him 👍👍👍
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  {/* Testimonial 3 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-pink-500/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-pink-600">
                            S
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">sahan_497</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇱🇰</span> Sri Lanka
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            I have been working with him for two projects and so far I experienced a good service from him
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  {/* Testimonial 4 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-amber-500/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-amber-600">
                            M
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">mjubil1</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇺🇸</span> United States
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            Did great work for me
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  {/* Testimonial 5 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-blue-500/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-blue-600">
                            A
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">alextech_uk</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇬🇧</span> United Kingdom
                            </p>
                            <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/30">
                              Repeat Client
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            Harsh delivered exceptional quality work ahead of schedule. His attention to detail and communication throughout the project was outstanding. Highly recommended!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  {/* Testimonial 6 */}
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-indigo-500/5">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 text-xl font-bold text-indigo-600">
                            D
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">dev_maria</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <span>🇨🇦</span> Canada
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            Working with Harsh was a pleasure. He understood the requirements perfectly and delivered a clean, modern solution. Will definitely work with him again!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                
                <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 hover:bg-primary/20 border-primary/30" />
                <CarouselNext className="hidden md:flex -right-12 bg-primary/10 hover:bg-primary/20 border-primary/30" />
              </Carousel>
            </motion.div>
          </div>
        </section>

        <Separator />

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Skills & Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Code2 className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Frontend Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">React</Badge>
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">Next.js</Badge>
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">TypeScript</Badge>
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">Tailwind CSS</Badge>
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">Vue.js</Badge>
                      <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">HTML/CSS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-purple-500/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Server className="h-7 w-7 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">Node.js</Badge>
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">Express</Badge>
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">Python</Badge>
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">PostgreSQL</Badge>
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">MongoDB</Badge>
                      <Badge className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30">REST APIs</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-blue-500/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Database className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">PostgreSQL</Badge>
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">MongoDB</Badge>
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">MySQL</Badge>
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">Redis</Badge>
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">Prisma ORM</Badge>
                      <Badge className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30">SQLite</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-pink-500/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Layout className="h-7 w-7 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl">UI/UX Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/30">Figma</Badge>
                      <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/30">shadcn/ui</Badge>
                      <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/30">Responsive Design</Badge>
                      <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/30">Accessibility</Badge>
                      <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/30">Design Systems</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-orange-500/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Cloud className="h-7 w-7 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Cloud & DevOps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">AWS</Badge>
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">Vercel</Badge>
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">Netlify</Badge>
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">Docker</Badge>
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">CI/CD</Badge>
                      <Badge className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/30">Git</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-gradient-to-br from-background to-green-500/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <Zap className="h-7 w-7 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Tools & Others</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">Git</Badge>
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">VS Code</Badge>
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">Jest</Badge>
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">Webpack</Badge>
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">API Integration</Badge>
                      <Badge className="bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30">Authentication</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A selection of my recent work and personal projects
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Project 1 - TRUECARAT */}
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-primary/20">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Globe className="h-20 w-20 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">TRUECARAT</CardTitle>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">Fine Jewelry</Badge>
                    </div>
                    <CardDescription className="text-base">
                      Premium e-commerce platform for fine jewelry featuring elegant design and exceptional user experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary/10">Next.js</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">React</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Tailwind CSS</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Stripe</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90" asChild>
                        <a href="https://heroic-tiramisu-0990b8.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 2 - Brew Haven */}
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-primary/20">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Cpu className="h-20 w-20 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Brew Haven</CardTitle>
                      <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30">E-Commerce</Badge>
                    </div>
                    <CardDescription className="text-base">
                      Premium coffee shop website with subscription services, product catalog, and seamless shopping experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary/10">React</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Next.js</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">TypeScript</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Prisma</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90" asChild>
                        <a href="https://magenta-fudge-7025f8.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 3 - Saveur */}
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-primary/20 md:col-span-2 lg:col-span-1">
                  <div className="aspect-video bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-900/20 dark:to-red-900/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Layers className="h-20 w-20 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Saveur</CardTitle>
                      <Badge className="bg-gradient-to-r from-rose-500/20 to-red-500/20 border-rose-500/30">Restaurant</Badge>
                    </div>
                    <CardDescription className="text-base">
                      Fine dining restaurant website with reservation system, gallery, and chef showcase features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary/10">Next.js</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">React</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Tailwind CSS</Badge>
                      <Badge variant="outline" className="hover:bg-primary/10">Responsive</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-rose-500 to-red-600 hover:opacity-90" asChild>
                        <a href="https://dulcet-peony-19406a.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Let's Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="max-w-2xl mx-auto shadow-xl border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <a href="mailto:wharsh225@gmail.com" className="flex items-center gap-4 p-5 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 border border-transparent hover:border-primary/20 group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-primary transition-colors">Email</p>
                        <p className="text-muted-foreground">wharsh225@gmail.com</p>
                      </div>
                    </a>

                    <a href="https://github.com/Harsh-Wardha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 border border-transparent hover:border-primary/20 group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-primary transition-colors">GitHub</p>
                        <p className="text-muted-foreground">github.com/Harsh-Wardha</p>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/harsh-wardhan-93879a285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 border border-transparent hover:border-primary/20 group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-primary transition-colors">LinkedIn</p>
                        <p className="text-muted-foreground">linkedin.com/in/harsh-wardhan-93879a285</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-gradient-to-b from-background to-muted/30 py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                © {new Date().getFullYear()} Harsh Wardhan. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all" asChild>
                <a href="https://github.com/Harsh-Wardha" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all" asChild>
                <a href="https://www.linkedin.com/in/harsh-wardhan-93879a285" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all" asChild>
                <a href="mailto:wharsh225@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Cloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3-1.3-3-3a3 3 0 0 1 5.2-2.1L6 13a3 3 0 0 1 3-3c.6 0 1.2.2 1.7.5a5 5 0 0 1 9.3 2.5 3 3 0 0 1 1 2.5 3 3 0 0 1-2.5 3.5" />
    </svg>
  )
}
