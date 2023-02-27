import { Linkedin,GitHub,Twitter } from "react-feather";

const Footer = () => {
    return(
        <div className="bg-gray-100 flex flex-col justify-center items-center mt-5 p-1 shadow-lg md:w-full">
            <h1 className="text-xl p-1">Made by Gaurav De 🫡</h1>
            <div className="flex flex-row gap-5 p-2">
                <a href="https://www.linkedin.com/in/gaurav-de-0007/" target={"_blank"}><Linkedin size={30} strokeWidth={1.5}/></a>
                <a href="https://github.com/GauravDe-git" target={"_blank"}><GitHub size={30} strokeWidth={1.5}/></a>
                <a href="https://twitter.com/Gaurav_De_" target={"_blank"}><Twitter size={30} strokeWidth={1.5}/></a>
            </div>
            <p className="text-lg p-1">©2023 Flare Stream</p>
        </div>
    )
}

export default Footer;