import React, { useState } from 'react';
import {
    Rocket, Sparkles, Home, Info, Users, Book, Award, Mail, // Existing icons
    Hospital, ClipboardList, BriefcaseMedical, FlaskConical,  Stethoscope,  GraduationCap, DollarSign,  Facebook, Phone, MessageSquareText
} from 'lucide-react'; // Importing all necessary icons


// --- Home Page Component ---
const HomePage = ({ setCurrentPage }) => {
    // Direct paths relative to the public folder root
    const localHomePageImages = [
        '/img/homepage/homepage-visual-1.jpg', // Ensure this file exists in public/img/homepage/
        '/img/homepage/homepage-visual-2.jpg', // Ensure this file exists in public/img/homepage/
        '/img/homepage/homepage-visual-3.jpg', // Ensure this file exists in public/img/homepage/
        '/img/homepage/homepage-visual-4.jpg', // Added fourth visual
    ];

    const flipBackTexts = ["RM", "Hospital", "Management", "Study Center"]; // New array for front-of-card text

    return (
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12">
            {/* Logo added here */}
            <img
                src="/img/logo/logo.png" // Assumes your logo is in public/img/logo/logo.png
                alt="Institute Logo"
                className="w-32 h-32 md:w-80 md:h-80 object-contain mb-6 rounded-lg" // Adjust size and rounding as needed
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/160x160/cccccc/333333?text=LOGO"; }}
            />

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-down text-center">
                Welcome to RM Hospital Management Study Center
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up text-center">
                Discover powerful solutions designed to elevate your experience and streamline your daily tasks. Join us on a journey of efficiency and creativity.
            </p> */}
            <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up delay-200">
                <button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center group"
                >
                    <Rocket className="mr-2 h-5 w-5 text-white group-hover:animate-bounce-icon" />
                    Get Started
                </button>
                <button
                    onClick={() => setCurrentPage('about')}
                    className="bg-white border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center group"
                >
                    <Sparkles className="mr-2 h-5 w-5 text-blue-600 group-hover:animate-spin-slow" />
                    Learn More
                </button>
            </div>

            {/* Displaying local images as larger boxes with flip effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {localHomePageImages.map((imgSrc, index) => (
                    <div key={index} className="homepage-flip-card-container h-64">
                        <div className="homepage-flip-card-inner bg-blue-200 rounded-xl shadow-lg border border-blue-300">
                            <div className="homepage-flip-card-front flex items-center justify-center"> {/* Now displaying text */}
                                <span className="text-blue-800 text-2xl font-bold">{flipBackTexts[index]}</span>
                            </div>
                            <div className="homepage-flip-card-back flex items-center justify-center"> {/* Now displaying image */}
                                <img
                                    src={imgSrc}
                                    alt={`Homepage visual ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/e0e7ff/4338ca?text=Visual+${index + 1}`; }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- About Us Page Component ---
const AboutUsPage = () => (
    <div className="p-8 md:p-12 flex-1 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="mr-3 text-blue-600" size={32} /> About Us
        </h2>
        <p className="text-gray-700 text-lg mb-4">
            With over fifteen years of dedicated experience, RM Hospital Management Coaching has unequivocally established itself as a preeminent institution in the sphere of management education. We proudly specialize in delivering unparalleled, high-quality coaching for the Bachelor of Business Administration (BBA) in Hospital Management, meticulously guiding students in cultivating an exceptionally robust foundation for their burgeoning professional careers. At RM, our mission extends far beyond mere exam preparation; we are committed to shaping the future vanguard of healthcare and business leadership, instilling within our students the requisite skills, unwavering confidence, and core values essential for flourishing in an intensely competitive global landscape. Our comprehensive pedagogical approach also encompasses rigorous instruction for advanced specializations, including the Master in Hospital Administration, Bachelor of Medical Laboratory Technology, Master of Business Administration (MBA) in Healthcare, and foundational programs suchs as the Bachelor of Business Administration (BBA) and the Master of Business Administration (MBA).
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Vision</h3>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Online Classes & Offline Classes</li>
                    <li>Practice Materials</li>
                    <li>Guaranteed Results</li>
                    <li>100% Common in exam</li>
                    <li>Concept Clearing Extra classes</li>
                    <li>Dedicated and experienced faculty</li>
                    <li>How to Write Proper Notes</li>
                    <li>Free admission related guidance</li>
                    <li>Placement and Internship Support</li>
                    <li>Provide Study Materials</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Values</h3>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Excellence in Education</li>
                    <li>Student-Centric Approach</li>
                    <li>Innovation & Adaptability</li>
                    <li>Integrity & Trust</li>
                </ul>
            </div>
        </div>
    </div>
);

// --- Tutors Page Component ---
const TutorsPage = () => {
    // Direct paths relative to the public folder root
    // IMPORTANT: For best quality, replace these with your actual high-resolution tutor images.
    // Images should ideally be at least 300x300px for a sharp display at 160x160px.
    const tutors = [
        { name: "Mr. Ritwik Sarkar", title: "Founder", qualification: "(BBA in HM, MHA, BA.LLb)", img: `/img/tutors/ritwik-sarkar.jpg`, alt: "Ritwik Sarkar" },
        { name: "Dr. Mohit Sarkar", title: "", qualification: "(B.Sc, M.Sc, P.hd)", img: `/img/tutors/mohit-sarkar.jpg`, alt: "Dr. Mohit Sarkar" },
        { name: "Mr. Samarjit Bose", title: "", qualification: "(B.Pharm, M.Pharm)", img: `/img/tutors/samarjit-bose.jpg`, alt: "Samarjit Bose" },
        { name: "Mr. Sayandip Biswas", title: "", qualification: "(B.Com)", img: `/img/tutors/sayandip-biswas.jpg`, alt: "Sayandip Biswas" },
        { name: "Mrs. Shreyasi Bose", title: "", qualification: "(B.Sc in Physiology, M.Sc in Physiology)", img: `/img/tutors/shreyasi-bose.jpg`, alt: "Shreyasi Bose" },
        { name: "Dr. Prasad Ghosh", title: "", qualification: "(B.Com, M.Com, BA.LLb, P.hd)", img: `/img/tutors/prasad-ghosh.jpg`, alt: "Prasad Ghosh" },
    ];
    return (
        <div className="p-8 md:p-12 flex-1 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Users className="mr-3 text-blue-600" size={32} /> Our Tutors
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
                Meet our team of highly qualified and passionate tutors dedicated to your academic success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {tutors.map((tutor, index) => (
                    <div key={index} className="flip-card-container bg-transparent transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                        <div className="flip-card-inner bg-white rounded-xl shadow-lg border border-gray-200">
                            <div className="flip-card-front p-6 flex flex-col items-center justify-center text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{tutor.name}</h3>
                                {tutor.title && <p className="text-blue-600 text-base font-medium mb-1">{tutor.title}</p>}
                            </div>
                            <div className="flip-card-back p-6 flex flex-col items-center justify-center text-center bg-blue-600 text-white">
                                <div className="w-64 h-64 overflow-hidden rounded-lg mb-4 border-2 border-blue-400">
                                    <img
                                        src={tutor.img}
                                        alt={tutor.alt}
                                        className="w-full h-full object-cover" // Always in color
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x600/cccccc/333333?text=Image%0AMissing`; }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{tutor.name}</h3>
                                <p className="text-blue-200 text-base font-medium mb-1">{tutor.qualification}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Subjects Page Component ---
const SubjectsPage = () => {
    const subjects = [
        { name: "BBA in Hospital Management (BBA in HM) (MAKAUT)", description: "Specialized coaching for hospital management.", icon: Hospital },
        { name: "Bachelor of Hospital Administration (BHA) (WBUHS)", description: "Comprehensive program for hospital administration.", icon: ClipboardList },
        { name: "Master in Hospital Administration (MHA)", description: "Advanced studies in hospital administration for leadership roles.", icon: BriefcaseMedical },
        { name: "Master in Hospital Management (MHM)", description: "Master's level program in hospital management.", icon: BriefcaseMedical },
        { name: "Bachelor of Medical Laboratory Technology (MAKAUT)", description: "Hands-on training for skilled medical laboratory professionals.", icon: FlaskConical },
        { name: "MBA in Healthcare", description: "Strategic business management tailored for the evolving healthcare sector.", icon: Stethoscope },
        { name: "BBA", description: "Foundational Bachelor of Business Administration course.", icon: GraduationCap },
        { name: "MBA", description: "Master of Business Administration for various specializations.", icon: DollarSign },
    ];

    return (
        <div className="p-8 md:p-12 flex-1 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Book className="mr-3 text-blue-600" size={32} /> Our Programs
            </h2>
            <p className="text-gray-700 text-lg mb-8">
                We offer a wide range of programs designed to shape future healthcare and business leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200 ease-in-out">
                        {subject.icon && <subject.icon className="text-blue-600 mb-4" size={32} />}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Success Stories Page Component ---
const SuccessStoriesPage = () => {
    const stories = [
        { name: "Bidhidiptya Mondal", img: "/img/success_stories/bidhidiptya-mondal.jpg" }, 
        { name: "Debjit Ghosh", img: "/img/success_stories/debjit-ghosh.jpg" },       
        { name: "Toppers", img: "/img/success_stories/toppers.jpg" },             
        { name: "Soumyadip Guin", img: "/img/success_stories/Soumyadip_guin.jpg"},
        { name: "Kohima Roy", img: "/img/success_stories/kohima_roy.jpg"},
        { name: "Soumyadip Guin", img: "/img/success_stories/Soumyadip_guin_new.jpg"},
        { name: "Tandrima Das", img: "/img/success_stories/Tandrima_Das.jpg"},
        { name: "Sreetama Saha", img:"/img/success_stories/Sreetama_Saha.jpeg"},
        { name: "Smriti Biswas", img:"/img/success_stories/smriti_biswas.jpeg"},
        { name: "Arpita Mondal", img:"/img/success_stories/arpita_modal.jpeg"}
        
    ];
    return (
        <div className="p-8 md:p-12 flex-1 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="mr-3 text-blue-600" size={32} /> Success Stories
            </h2>
            <p className="text-gray-700 text-lg mb-8">
                Hear from our students who have achieved their academic goals with our support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between items-center text-center transition-transform hover:scale-[1.02] duration-200 ease-in-out">
                        <div className="w-75 h-75 overflow-hidden rounded-lg mb-4 border-2 border-blue-400 flex-shrink-0"> {/* Square container, flex-shrink-0 to prevent image from shrinking */}
                            <img
                                src={story.img}
                                alt={story.name}
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" // Grayscale and hover effect
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/cccccc/333333?text=Image%0AMissing`; }} // Adjusted fallback size
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-auto">{story.name}</h3> {/* mt-auto pushes it to the bottom */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Contact Us Page Component ---
const ContactUsPage = () => {
    const subjectOptions = [
        "BBA in Hospital Management (BBA in HM) (MAKAUT)",
        "Bachelor of Hospital Administration (BHA) (WBUHS)",
        "Master in Hospital Administration (MHA)",
        "Master in Hospital Management (MHM)",
        "Bachelor of Medical Laboratory Technology (MAKAUT)",
        "MBA in Healthcare",
        "BBA",
        "MBA",
        "General Inquiry"
    ];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleWhatsAppSend = () => {
        const { name, phone, subject, message } = formData;
        const recipientPhone = "918001912542"; // Primary WhatsApp number for the business

        let whatsappMessage = `Hello RM Hospital Management Study Center,\n\n`;
        whatsappMessage += `My name is ${name}.\n`;
        if (phone) {
            whatsappMessage += `My phone number is: ${phone}\n`;
        }
        if (subject) {
            whatsappMessage += `Regarding: ${subject}\n\n`;
        }
        whatsappMessage += `Message: ${message}\n\n`;
        whatsappMessage += `Please get back to me soon.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${recipientPhone}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank'); // Open WhatsApp Web in a new tab
    };

    return (
        <div className="p-8 md:p-12 flex-1 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="mr-3 text-blue-600" size={32} /> Contact Us
            </h2>
            <p className="text-gray-700 text-lg mb-8">
                Have questions or want to get started? Reach out to us using the information below or send us a message via WhatsApp.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                    <p className="text-gray-700 mb-2 flex items-center">
                        <Mail size={20} className="mr-2 text-gray-600" /> <a href="mailto:sarkar.ritwik4@gmail.com" className="text-blue-600 hover:underline">sarkar.ritwik4@gmail.com</a>
                    </p>
                    <p className="text-gray-700 mb-2 flex items-center">
                        <Phone size={20} className="mr-2 text-gray-600" /> <a href="tel:+918001912542" className="text-blue-600 hover:underline">+91 8001912542</a>
                    </p>
                    <p className="text-gray-700 mb-2 flex items-center">
                        <Phone size={20} className="mr-2 text-gray-600" /> <a href="tel:+918918480355" className="text-blue-600 hover:underline">+91 8918480355</a>
                    </p>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Follow Us:</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1FTGNtmcgH/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200" aria-label="Facebook">
                                <Facebook size={24} /> {/* Facebook icon */}
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No (for reply)</label>
                            <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., +91 9876543210" value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <select
                                id="subject"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.subject}
                                onChange={handleInputChange}
                            >
                                <option value="">Select a Subject</option>
                                {subjectOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <button
                            type="button" // Changed to type="button" to prevent default form submission
                            onClick={handleWhatsAppSend}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 flex items-center justify-center"
                        >
                            <MessageSquareText size={20} className="mr-2" /> Send WhatsApp Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'about':
                return <AboutUsPage />;
            case 'tutors':
                return <TutorsPage />;
            case 'subjects':
                return <SubjectsPage />;
            case 'success':
                return <SuccessStoriesPage />;
            case 'contact':
                return <ContactUsPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    const NavItem = ({ page, icon: Icon, label }) => (
        <button
            onClick={() => setCurrentPage(page)}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                ${currentPage === page
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
        >
            {Icon && <Icon className="mr-2 h-5 w-5" />}
            <span className="font-medium">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-inter antialiased flex flex-col">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }

                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-right {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
                .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }

                /* Icon animations */
                @keyframes bounce-icon {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .group:hover .animate-bounce-icon {
                    animation: bounce-icon 0.6s infinite ease-in-out;
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .group:hover .animate-spin-slow {
                    animation: spin-slow 2s linear infinite;
                }

                /* Flip Card Specific CSS for Tutors */
                .flip-card-container {
                    perspective: 1000px; /* Defines the 3D space */
                    width: 100%; /* Ensure container takes full grid cell width */
                    height: 350px; /* Increased height for bigger image boxes */
                    cursor: pointer;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 1.0s; /* Increased transition duration */
                    transform-style: preserve-3d; /* Ensures children are positioned in 3D space */
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    border-radius: 0.75rem; /* Equivalent to rounded-xl */
                }

                .flip-card-container:hover .flip-card-inner {
                    transform: rotateY(-180deg); /* Flip from the right side */
                }

                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden; /* Hide the back of the front side */
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.75rem; /* Equivalent to rounded-xl */
                    padding: 1.5rem; /* Equivalent to p-6 */
                }

                .flip-card-front {
                    background-color: white;
                    color: black;
                    z-index: 2;
                }

                .flip-card-back {
                    background-color: #2563eb; /* A darker blue from your palette */
                    color: white;
                    transform: rotateY(-180deg); /* Initially hidden, rotated to show on flip */
                }


                /* Flip Card Specific CSS for Homepage Visuals */
                .homepage-flip-card-container {
                    perspective: 1000px;
                    width: 256px; /* Set width equal to height for square */
                    height: 256px; /* h-64 */
                    cursor: pointer;
                    /* Ensure responsive centering within grid */
                    margin-left: auto;
                    margin-right: auto;
                }

                .homepage-flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    border-radius: 0.75rem; /* rounded-xl */
                    background-color: #bfdbfe; /* bg-blue-200 */
                    border: 2px solid #60a5fa; /* border-blue-300 */
                }

                .homepage-flip-card-container:hover .homepage-flip-card-inner {
                    transform: rotateY(-180deg); /* Flip from the right side */
                }

                .homepage-flip-card-front, .homepage-flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column; /* Changed to column to stack text/image */
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.75rem; /* rounded-xl */
                    overflow: hidden; /* Hide overflow from images */
                }

                .homepage-flip-card-front {
                    background-color: #bfdbfe; /* Set background for the front face */
                    color: #2563eb; /* Text color for the front face */
                    font-size: 2rem; /* Larger font size for prominence */
                    font-weight: bold;
                    z-index: 2;
                }

                .homepage-flip-card-back {
                    background-color: #3b82f6; /* A slightly different blue for contrast */
                    color: white;
                    transform: rotateY(-180deg);
                }

                .homepage-flip-card-front img, .homepage-flip-card-back span {
                    /* Styles for content inside flip cards */
                }
                `}
            </style>

            {/* Navigation Bar */}
            <nav className="w-full bg-white rounded-xl shadow-lg p-4 mb-6 flex justify-center items-center flex-wrap">
                <div className="flex flex-wrap justify-center gap-2">
                    <NavItem page="home" icon={Home} label="Home" />
                    <NavItem page="about" icon={Info} label="About Us" />
                    <NavItem page="tutors" icon={Users} label="Tutors" />
                    <NavItem page="subjects" icon={Book} label="Subjects" />
                    <NavItem page="success" icon={Award} label="Success Stories" />
                    <NavItem page="contact" icon={Mail} label="Contact Us" />
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden md:flex md:items-center flex-grow">
                {renderPage()}
            </div>
        </div>
    );
};

export default App;
