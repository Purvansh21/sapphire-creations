import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Meteors } from '@/components/ui/meteors';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <Header />
            
            <main className="container mx-auto px-4 py-16 relative">
                <Meteors number={20} />
                
                {/* Back Button */}
                <div className="mb-8">
                    <Link to="/">
                        <Button className="bg-primary/20 text-white hover:bg-primary/30 border border-primary/30">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        About Sapphire Creations
                    </h1>
                    <p className="text-xl text-gray-300">
                        Where Creativity Meets Innovation
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        At Sapphire Creations, we're not just another digital agency. We're a team of passionate creators, 
                        innovators, and problem-solvers dedicated to bringing your vision to life. Our mission is to 
                        transform your ideas into stunning digital experiences that captivate and engage your audience.
                    </p>
                </motion.section>

                {/* Why Work With Us Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold mb-4">🎯 Tailored Solutions</h3>
                            <p className="text-gray-300">
                                We don't believe in one-size-fits-all. Every project is unique, and we craft solutions 
                                specifically designed for your needs.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold mb-4">💡 Creative Excellence</h3>
                            <p className="text-gray-300">
                                Our team of creative professionals brings fresh perspectives and innovative ideas to 
                                every project.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold mb-4">⚡ Fast Turnaround</h3>
                            <p className="text-gray-300">
                                We understand the importance of time. Our efficient workflow ensures quick delivery 
                                without compromising quality.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold mb-4">🤝 Client-Centric Approach</h3>
                            <p className="text-gray-300">
                                Your satisfaction is our priority. We maintain open communication and involve you in 
                                every step of the process.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Let's create something amazing together. Contact us today to discuss your vision.
                    </p>
                    <Link to="/#contact">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            Get in Touch
                        </Button>
                    </Link>
                </motion.div>
            </main>
            
            <Footer />
        </div>
    );
};

export default AboutUs; 