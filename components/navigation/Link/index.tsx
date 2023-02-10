import Link_ from "next/link";

interface Props {
    children: React.ReactNode;
    href: string;
    focus?: boolean;
}

const Link: React.FC<Props> = ({ children, href, focus }) => {
    return (
        <Link_ href={href} legacyBehavior>
            <a className={focus? "p-1 border-[1px] border-white" : "p-1"}>{children}</a>
        </Link_>
    );
};

Link.defaultProps = {
    href: "#",
};

export default Link;
