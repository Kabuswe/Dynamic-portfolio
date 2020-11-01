import LinkedinLogo from '../public/images/svg/linkedin.svg'
import MongoDBLogo from '../public/images/svg/MongoDB.svg'
import NextjsLogo from '../public/images/svg/Nextjs.svg'
import GithubLogo from '../public/images/svg/github.svg'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="row justify-content-left">
                            <div className="col-2">
                                <GithubLogo/>
                            </div>
                            <div className="col-2">
                                <MongoDBLogo/>
                            </div>
                        </div>
                       <div className="row justify-content-left">
                            <div className="col-10">
                                <p className="footer-text">
                                    Built with the <strong>Next.js Framework</strong> <br/>
                                    Hosted by <strong>Vercel</strong><br/>
                                    Version control managed by <strong>Github</strong>
                                </p>
                            </div>
                       </div>
                    </div>
                   
                    <div className="col-sm">
                        <div className="row justify-content-left">
                            <div className="col-2">
                                <NextjsLogo/>
                            </div>
                            <div className="col-2">
                                <LinkedinLogo/>
                            </div>
                        </div>
                        <div className="row justify-content-left">
                            <div className="col-10">
                                <p className="footer-text">
                                    Site content powered by <strong>LinkedIn</strong> <br/>
                                    Data managed by <strong>MongoDB</strong> <br/>
                                    <span className="copyright-text">© 2020 Dynamic portfolio.</span>
                                </p>
                            
                            </div>
                           
                       </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}