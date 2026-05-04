'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            name: user?.name ?? '',
            image: user?.image ?? '',
        }
    });

    const handleUpdateFunc = async (data) => {
        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
        });

        if (error) {
            toast.error(error.message ?? 'Something went wrong. Try again.');
            return;
        }

        toast.success('Profile updated successfully!');
        router.push('/my-profile');
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Page header */}
            <div className="border-b border-stone-100 px-6 md:px-16 py-10">
                <div className="max-w-4xl mx-auto animate__animated animate__fadeInLeft">
                    <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
                        Account
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h1 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
                            Update information
                        </h1>
                        <Link
                            href="/my-profile"
                            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors w-fit"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to profile
                        </Link>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-4xl mx-auto px-6 md:px-16 py-12">
                <div className="max-w-md animate__animated animate__fadeInUp">

                    {/* Current avatar preview */}
                    <div className="flex items-center gap-4 mb-10 p-5 bg-stone-50 border border-stone-100 rounded-2xl">
                        <div className="w-14 h-14 rounded-full bg-stone-200 border border-stone-200 overflow-hidden flex items-center justify-center shrink-0">
                            {user?.image ? (
                                <Image width={56} height={56} src={user.image} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-lg font-medium text-stone-400">
                                    {user?.name?.[0]?.toUpperCase() ?? 'U'}
                                </span>
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-stone-800">{user?.name}</p>
                            <p className="text-xs text-stone-400">{user?.email}</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleUpdateFunc)}>

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

                        {/* Image URL */}
                        <div className="flex flex-col gap-1.5">
                            <label className={`text-xs font-medium ${errors.image ? 'text-red-500' : 'text-stone-500'} tracking-wide`}>
                                Image URL
                                <span className="text-stone-300 font-normal ml-1">(optional)</span>
                            </label>
                            <input
                                type="url"
                                {...register('image')}
                                placeholder="https://example.com/photo.jpg"
                                className={`w-full border ${errors.image ? 'border-red-500' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 bg-white focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all`}
                            />
                            {errors.image && <p className="text-xs text-red-500">{errors.image.message}</p>}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-stone-900 text-white text-sm font-medium py-3 rounded-full hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isSubmitting ? 'Updating...' : 'Update information'}
                            </button>
                            <Link
                                href="/my-profile"
                                className="px-6 py-3 border border-stone-200 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition-colors text-center"
                            >
                                Cancel
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;