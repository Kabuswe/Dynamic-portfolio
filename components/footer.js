import LinkedinLogo from '../public/images/svg/linkedin.svg'
import MongoDBLogo from '../public/images/svg/MongoDB.svg'
import NextjsLogo from '../public/images/svg/Nextjs.svg'
import GithubLogo from '../public/images/svg/github.svg'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
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
                                    Built with the <a href="https://nextjs.org/"><strong>Next.js Framework</strong></a> <br/>
                                    Hosted by <a href="http://vercel.com/"><strong>Vercel</strong></a><br/>
                                    Version control managed by <a href="http://github.com/"><strong>Github</strong></a>
                                </p>
                            </div>
                       </div>
                    </div>
                   
                    <div className="col-sm-5">
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
                                    Site content powered by <a href="https://linkedin.com/"><strong>LinkedIn</strong></a> <br/>
                                    Data managed by <a href="https://www.mongodb.com/"><strong>MongoDB</strong></a> <br/>
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