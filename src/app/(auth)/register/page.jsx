/* eslint-disable react/no-unescaped-entities */
'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";


const RegisterPage = () => {
    const router = useRouter();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const passwordValue = useWatch({ control, name: 'password', defaultValue: '' });

    const handleRegisterFunc = async(data) => {
        const {name, email, password, photoUrl} = data;
        // wire up BetterAuth registration here
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoUrl,
        });
        
        if(error){
            toast("Something went wrong. Please try again");
            return;
        }
        if(res){
            toast("Account created successfully!")
            router.push("/login");
        }
    };


    return (
        <div className="min-h-screen bg-white flex">

            {/* Left panel — decorative */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-stone-50 border-r border-stone-100 flex-col items-center justify-center p-16 overflow-hidden">

                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Radial glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                        className="w-125 h-125 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(214,211,209,0.5) 0%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Tile mosaic */}
                <div className="relative z-10 grid grid-cols-3 gap-3 mb-12 -rotate-6 opacity-90">
                    {[
                        'bg-stone-100', 'bg-stone-200', 'bg-stone-300',
                        'bg-stone-200', 'bg-stone-300', 'bg-stone-100',
                        'bg-stone-300', 'bg-stone-100', 'bg-stone-200',
                    ].map((color, i) => (
                        <div key={i} className={`${color} rounded-xl aspect-square w-20 shadow-sm border border-white/60`} />
                    ))}
                </div>

                <div className="relative z-10 text-center max-w-xs">
                    <p className="text-stone-700 text-lg font-medium leading-snug tracking-tight">
                        "Join a community that knows the beauty of detail."
                    </p>
                    <p className="text-stone-400 text-xs mt-3 tracking-widest uppercase">— Tilevo</p>
                </div>
            </div>

            {/* Right panel — form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 md:px-16 py-16 relative">

                {/* Logo */}
                <div className="absolute top-8 left-8 md:left-16">
                    <Link href="/" className="text-2xl font-medium text-stone-800 tracking-tight">
                        Tilevo
                    </Link>
                </div>

                <div className="w-full max-w-sm animate__animated animate__fadeInUp animate__faster">

                    {/* Header */}
                    <div className="mb-8">
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
                            Get started
                        </p>
                        <h1 className="text-3xl font-medium text-stone-900 tracking-tight mb-2">
                            Create your account
                        </h1>
                        <p className="text-sm text-stone-400">
                            Already have an account?{' '}
                            <Link href="/login" className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Google button */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-stone-200 rounded-full py-3 px-6 text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 shadow-sm"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-stone-100" />
                        <p className="text-xs text-stone-300 uppercase tracking-widest">or</p>
                        <div className="flex-1 h-px bg-stone-100" />
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterFunc)}>

                        {/* Full name */}
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

                        {/* Photo URL — optional, no required validation */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-stone-500 tracking-wide">
                                Photo URL
                                <span className="text-stone-300 font-normal ml-1">(optional)</span>
                            </label>
                            <input
                                type="url"
                                {...register('photoUrl')}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className={`text-xs font-medium ${errors.password ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Please enter a password',
                                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                                })}
                                placeholder="••••••••"
                                className={`w-full border ${errors.password ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all`}
                            />
                            {errors.password ? (
                                <p className="text-xs text-red-500">{errors.password.message}</p>
                            ) : passwordValue.length > 0 && (
                                <p className={`text-xs mt-0.5 ${passwordValue.length < 6 ? 'text-red-400'
                                        : passwordValue.length < 10 ? 'text-amber-400'
                                            : 'text-emerald-500'
                                    }`}>
                                    {passwordValue.length < 6
                                        ? 'Too short — use at least 6 characters'
                                        : passwordValue.length < 10
                                            ? 'Good — could be stronger'
                                            : 'Strong password ✓'}
                                </p>
                            )}
                        </div>

                        {/* Error slot — wire up on registration failure */}
                        {/* {error && (
                            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                                {error}
                            </p>
                        )} */}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-stone-900 text-white text-sm font-medium py-3 rounded-full hover:bg-stone-700 transition-colors duration-200 mt-1"
                        >
                            Create account
                        </button>

                    </form>

                    {/* Footer note */}
                    <p className="text-xs text-stone-400 text-center leading-relaxed mt-8">
                        By registering, you agree to our{' '}
                        <Link href="#" className="text-stone-600 underline underline-offset-2 hover:text-stone-900 transition-colors">
                            Terms
                        </Link>{' '}
                        and{' '}
                        <Link href="#" className="text-stone-600 underline underline-offset-2 hover:text-stone-900 transition-colors">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                {/* Back to home */}
                <div className="absolute bottom-8">
                    <Link
                        href="/"
                        className="text-xs text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1.5"
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;