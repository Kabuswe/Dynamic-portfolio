import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(props){
    const [isNavCollapsed, setIsNavCollapsed] = useState(true)

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    const title = props.title

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-bg">
            <Link href="/"><a className="navbar-brand" ><span>Dynamic portfolio.</span></a></Link>
            <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
                
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link href="/">
                        <a className="nav-link active" >
                            {(title === "Home")?<div>Home</div>:<span>Home</span>}
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/experience">
                        <a className="nav-link active" >
                            {(title === "Experience")?<div>Experience</div>:<span>Experience</span>}
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/education">
                        <a className="nav-link active" >
                            {(title === "Education")?<div>Education</div>:<span>Education</span>}
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/skills">
                        <a className="nav-link active" >
                            {(title === "Skills")?<div>Skills</div>:<span>Skills</span>}
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/projects">
                        <a className="nav-link active" >
                            {(title === "Projects")?<div>Projects</div>:<span>Projects</span>}
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/certifications">
                        <a className="nav-link active" >
                            {(title === "Certifications")?<div>Certifications</div>:<span>Certifications</span>}
                        </a>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}