import './style.css'

export default function Header() {
  return (
      <header className='header'>
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>
                      Hi, my Name is <em>Anastasia</em>
                  </strong>
                  <br />a frontend developer
              </h1>
              <div className="header__text">
                  <p>With passion for learning and creating</p>
              </div>
              <a className='btn' href="#!">Download CV</a>
          </div>
          
    </header>
  )
}
