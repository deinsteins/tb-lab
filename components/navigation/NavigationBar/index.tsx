import TBlabLogo from "../../../public/images/bitmap/tblab.png";
import Image from "next/image";
import Link from "../Link";
import { When } from "react-if";
import { useRouter } from "next/router";


const NavigationBar = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <div className="sticky top-0 left-0 right-0 z-50">
            <div className="flex justify-between px-8 py-12 text-white text-lg font-bold tracking-widest">
                <div className="flex">
                    <Link href="/">
                        <Image width={100} height={100} src={TBlabLogo} alt="logo" />
                    </Link>
                </div>
                <div className="flex gap-8 px-12 my-auto">
                    <Link href="/" focus={pathname === "/" ? true : false}>
                       Home
                    </Link>
                    <Link href="/predict" focus={pathname === "/predict" ? true : false}>
                       Predict
                    </Link>
                    <Link href="/about" focus={pathname === "/about" ? true : false}>
                        About
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;