import { Button } from "@heroui/react";
import Link from "next/link";

const links = {
    
}

const NavBar = () => {
    return (

        <div>
            <div className="max-lg:collapse bg-base-200 lg:mb-1 shadow-sm w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Link href="/" className="font-bold text-3xl">Tilevo</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li><button>Home</button></li>
                            <li><button>All Tiles</button></li>
                            <li><button>My profile</button></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            <Button variant="outline">Login</Button>
                        </div>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <li><button>Home</button></li>
                        <li><button>All Tiles</button></li>
                        <li><button>My profile</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;