import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { ExternalLink } from 'react-external-link'
import '../styles/nav.scss'

export function Nav() {
  return(
    <div className="nav">
      <div>
        <p>Dan's all time GitHub Repos</p>
      </div>
      <div className="icons">
      <ExternalLink href="https://github.com/dancosta-fed">
        <AiFillGithub className="icon-gh"/>
      </ExternalLink>

      <ExternalLink href="https://www.linkedin.com/in/daniel-costa-dev/">
        <AiFillLinkedin className="icon-lk"/>
      </ExternalLink>
      </div>
    </div>
  )
}