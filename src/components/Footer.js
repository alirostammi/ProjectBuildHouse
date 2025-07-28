import mainLogo from '../pics/logos/logo.png';
import logoUTurn from '../pics/logos/U-Turn.png';
import logoNextmove from '../pics/logos/Nextmove.png';
import logoPinopoint from '../pics/logos/Pinpoint.png';
import logoLeafe from '../pics/logos/Leafe.png';
import logoTerra from '../pics/logos/Terra.png';
import logoDune from '../pics/logos/Dune.png';

function Footer() {
	return (
		<footer className="container mt-5">
			<h2 className="fw-bold">Our Partners</h2>
			<div className="row my-5 justify-content-between brands">
				<img src={logoUTurn} />
				<img src={logoNextmove} />
				<img src={logoPinopoint} />
				<img src={logoLeafe} />
				<img src={logoTerra} />
				<img src={logoDune} />
			</div>
			<div className='row py-4 border-top justify-content-between'>
				<ul className='nav col-md-6'>
					<li className='nav-item'><a href='' className='nav-link text-dark'>About Us</a></li>
					<li className='nav-item'><a href='' className='nav-link text-dark'>How it Works</a></li>
					<li className='nav-item'><a href='' className='nav-link text-dark'>FAQ</a></li>
					<li className='nav-item'><a href='' className='nav-link text-dark'>Contact Us</a></li>
					<li className='nav-item'><a href='' className='nav-link text-dark'>Privacy Policy</a></li>
				</ul>
				<div className='col-md-6 text-center text-sm-end mt-3 mt-sm-0'><img src={mainLogo} width='20%' /></div>
			</div>
		</footer>
	)
}

export default Footer;