import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: 'Auth'
}

export default function AuthLayout({ children }) {
    return (
        <div>
            {children}
            <Toaster></Toaster>
        </div>
    );
}