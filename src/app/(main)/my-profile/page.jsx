import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { title } from 'node:process';

export const metadata = {
    title: 'Profile'
}

const MyProfilePage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) redirect('/login');

    const user = session.user;

    const joinedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });

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
                            My Profile
                        </h1>
                        <Link
                            href="/my-profile/update"
                            className="inline-flex items-center gap-2 text-sm font-medium bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-700 transition-colors w-fit"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Edit profile
                        </Link>
                    </div>
                </div>
            </div>

            {/* Profile content */}
            <div className="max-w-4xl mx-auto px-6 md:px-16 py-12">
                <div className="animate__animated animate__fadeInUp flex flex-col gap-8">

                    {/* Avatar + name card */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 border border-stone-100 rounded-2xl">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center shrink-0">
                            {user.image ? (
                                <Image
                                    width={80}
                                    height={80}
                                    src={user.image}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-2xl font-medium text-stone-400">
                                    {user.name?.[0]?.toUpperCase() ?? 'U'}
                                </span>
                            )}
                        </div>

                        {/* Name + email */}
                        <div className="text-center sm:text-left">
                            <h2 className="text-xl font-medium text-stone-900 tracking-tight mb-1">
                                {user.name}
                            </h2>
                            <p className="text-sm text-stone-400 mb-3">{user.email}</p>
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                Active account
                            </span>
                        </div>
                    </div>

                    {/* Account info grid */}
                    <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-4">
                            Account information
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { label: 'Full name', value: user.name },
                                { label: 'Email address', value: user.email },
                                { label: 'Member since', value: joinedDate },
                                { label: 'Email verified', value: user.emailVerified ? 'Verified' : 'Not verified' },
                            ].map((item, i) => (
                                <div key={i} className="bg-stone-50 border border-stone-100 rounded-xl px-5 py-4">
                                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                                    <p className="text-sm font-medium text-stone-800">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Profile image preview */}
                    {user.image && (
                        <div>
                            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-4">
                                Profile image
                            </p>
                            <div className="bg-stone-50 border border-stone-100 rounded-xl px-5 py-4">
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1.5">Image URL</p>
                                <p className="text-sm text-stone-500 break-all">{user.image}</p>
                            </div>
                        </div>
                    )}

                    {/* Update CTA bottom */}
                    <div className="border-t border-stone-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-stone-700 mb-1">Want to update your info?</p>
                            <p className="text-xs text-stone-400">You can change your name and profile image anytime.</p>
                        </div>
                        <Link
                            href="/my-profile/update"
                            className="inline-flex items-center gap-2 text-sm border border-stone-200 text-stone-600 px-6 py-2.5 rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all shrink-0"
                        >
                            Update information
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;