import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/services";

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="container py-20">
                <h1 className="text-3xl font-bold">Service not found</h1>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <div className="bg-primary-600 text-white py-16">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-100"
                    >
                        {service.shortDescription}
                    </motion.p>
                </div>
            </div>

            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>
                        <div className="prose prose-lg max-w-none">
                            {service.content.map((paragraph, index) => (
                                <p key={index} className="mb-4 text-gray-700">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {service.features && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6">
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <span className="text-primary-600 mt-1">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-bold mb-4">
                            Request Information
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn btn-primary"
                            >
                                Send Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
