/* eslint-disable react/no-unescaped-entities */
'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useState } from 'react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleContactFunc = (data) => {
        console.log(data);
        setSubmitted(true);
        reset();
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Page header */}
            <div className="border-b border-stone-100 px-6 md:px-16 py-10">
                <div className="max-w-6xl mx-auto animate__animated animate__fadeInLeft">
                    <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
                        Get in touch
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h1 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
                            Contact us
                        </h1>
                        <p className="text-sm text-stone-400">
                            We usually respond within 24 hours
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — info */}
                    <div className="animate__animated animate__fadeInLeft">

                        {/* Intro */}
                        <p className="text-sm text-stone-500 leading-relaxed mb-12 max-w-sm">
                            Have a question about a tile, need help with your order, or just want to say hello? We'd love to hear from you.
                        </p>

                        {/* Contact details */}
                        <div className="flex flex-col gap-6 mb-12">
                            {[
                                {
                                    label: 'Email',
                                    value: 'hello@tilevo.com',
                                    sub: 'For general enquiries',
                                    icon: (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    label: 'Phone',
                                    value: '+88 01912345678',
                                    sub: 'Mon–Fri, 9am–6pm',
                                    icon: (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    )
                                },
                                {
                                    label: 'Address',
                                    value: '123 Tilevo Street',
                                    sub: 'Dhaka, Bangladesh',
                                    icon: (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0 text-stone-400">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                        <p className="text-sm font-medium text-stone-800">{item.value}</p>
                                        <p className="text-xs text-stone-400">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-stone-100 mb-8" />

                        {/* Social links */}
                        <div>
                            <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">Follow us</p>
                            <div className="flex gap-3">
                                {['Instagram', 'Facebook', 'Twitter / X'].map((s, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        className="text-xs text-stone-500 border border-stone-200 rounded-full px-4 py-2 hover:bg-stone-50 hover:border-stone-300 transition-all"
                                    >
                                        {s}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="animate__animated animate__fadeInUp">
                        {submitted ? (
                            /* Success state */
                            <div className="border border-stone-100 rounded-2xl p-10 text-center flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-medium text-stone-900 tracking-tight">Message sent</h2>
                                <p className="text-sm text-stone-400 max-w-xs">
                                    Thanks for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-2 text-xs text-stone-500 border border-stone-200 px-5 py-2 rounded-full hover:bg-stone-50 transition-all"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            /* Form */
                            <div className="border border-stone-100 rounded-2xl p-8">
                                <h2 className="text-base font-medium text-stone-900 mb-1">Send a message</h2>
                                <p className="text-xs text-stone-400 mb-8">Fill in the form and we'll be in touch shortly.</p>

                                <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleContactFunc)}>

                                    {/* Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-xs font-medium ${errors.name ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            {...register('name', { required: 'Please enter your name' })}
                                            placeholder="Your name"
                                            className={`w-full border ${errors.name ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all`}
                                        />
                                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-xs font-medium ${errors.email ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email', { required: 'Please enter your email' })}
                                            placeholder="you@email.com"
                                            className={`w-full border ${errors.email ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-xs font-medium ${errors.subject ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            {...register('subject', { required: 'Please enter a subject' })}
                                            placeholder="What's this about?"
                                            className={`w-full border ${errors.subject ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all`}
                                        />
                                        {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-xs font-medium ${errors.message ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                            Message
                                        </label>
                                        <textarea
                                            {...register('message', { required: 'Please enter your message' })}
                                            placeholder="Tell us how we can help..."
                                            rows={5}
                                            className={`w-full border ${errors.message ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all resize-none`}
                                        />
                                        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-stone-900 text-white text-sm font-medium py-3 rounded-full hover:bg-stone-700 transition-colors duration-200 mt-1 cursor-pointer"
                                    >
                                        Send message
                                    </button>

                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;