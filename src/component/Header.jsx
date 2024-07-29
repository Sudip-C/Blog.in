import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
const Header =()=>{

    return(
        <div className="border-2 border-gray-200 p-4 flex justify-around "
        >
            <div className=" h-12 flex-2    ">
                <img src="/Blog.in.png" className="h-full"  alt="logo"/>
            </div>
            <nav id="nav_items" className="flex items-center w-3/12 justify-between p-3 gap-3 ">
                <ul className="flex items-center justify-between font-bold w-4/5 text-xl pb-3 gap-4 ">
                    <Link to='/'><li className="hover:underline underline-offset-8 decoration-orange-500">Home</li></Link>
                    <Link to='/about'><li className="hover:underline underline-offset-8 decoration-orange-500">About</li></Link>
                    <Link to='/blog'><li className="hover:underline underline-offset-8 decoration-orange-500">Blog</li></Link>
                </ul>
                <div>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header