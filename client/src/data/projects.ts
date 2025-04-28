export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  color: string;
}

// Import project images
import weatherAppImage from '@/assets/weather-app.png';
import ecommerceAppImage from '@/assets/ecommerce-app.png';
import jobPortalAppImage from '@/assets/job-portal-app.png';

export const projectsList: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    summary: "Developed a full-stack e-commerce platform using the MERN stack, featuring real-time inventory management, secure payment integration, and a user-friendly interface.",
    description: "Developed a full-stack e-commerce platform using the MERN stack, featuring real-time inventory management, secure payment integration, and a user-friendly interface. The application includes user authentication, product management, shopping cart, and checkout functionality.",
    image: ecommerceAppImage,
    features: [
      "Implemented key functionalities including dynamic product listings, user authentication, and a streamlined order processing system.",
      "Optimized for scalability and performance, ensuring smooth and secure transactions for both customers and sellers.",
      "Responsive design with modern UI components and intuitive navigation.",
      "Product search, filtering, and sorting capabilities.",
      "User profiles with order history and saved payment methods."
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
    color: "primary"
  },
  {
    id: "jobportal",
    title: "Job Portal Website",
    summary: "Designed a MERN stack-based job portal facilitating seamless job searching, application management, and recruiter-candidate interactions.",
    description: "Designed a MERN stack-based job portal facilitating seamless job searching, application management, and recruiter-candidate interactions. The application provides a platform for job seekers to find opportunities and for employers to post jobs and manage applications.",
    image: jobPortalAppImage,
    features: [
      "Integrated features such as role-based access control, resume uploads, real-time job postings, and application tracking.",
      "Engineered smooth user workflows for job applications and recruiter interactions, ensuring intuitive navigation and clear process visibility.",
      "Advanced search functionality with filters for industry, experience level, and location.",
      "Integrated authentication system with Clerk API for secure user management.",
      "Resume and profile image uploads using Cloudinary integration."
    ],
    technologies: ["MERN Stack", "Clerk API", "Cloudinary"],
    color: "secondary"
  },
  {
    id: "weather",
    title: "Weather Forecasting App",
    summary: "Developed a responsive weather application that provides current conditions and weekly forecasts with detailed metrics including temperature, humidity, and wind speed.",
    description: "Developed a responsive weather application that provides current conditions and weekly forecasts with detailed metrics including temperature, humidity, and wind speed. The application offers a clean, intuitive interface for users to quickly check weather conditions for any location.",
    image: weatherAppImage,
    features: [
      "Location-based weather forecast with search functionality.",
      "Detailed current conditions including temperature, humidity, wind speed, and cloud coverage.",
      "Weekly forecast with daily temperature ranges and weather conditions.",
      "Hourly forecast for the current day.",
      "Responsive design that works seamlessly on desktop and mobile devices."
    ],
    technologies: ["JavaScript", "Weather API", "Responsive Design"],
    color: "primary"
  }
];
