import React from "react"; 
import { Navigate } from "react-router-dom";
 
 
 
 const services = [
  {
    id: 1,
    name: "Pre-Wedding",
    path: "/services/pre-wedding",
    image: "/images/prewedding.jpg",
    description: "Romantic photoshoots & cinematic storytelling",
  },
  {
    id: 2,
    name: "Wedding",
    path: "/services/wedding",
    image: "/images/wedding.jpg",
    description: "Complete wedding planning & management",
  },
  {
    id: 3,
    name: "Reception",
    path: "/services/reception",
    image: "/images/reception.jpg",
    description: "Elegant reception & party arrangements",
  },
];

export default services;