import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg';
import everythingImage from '../assets/images/trending/everything.jpg';
import infiniteImage from '../assets/images/trending/infinite.jpg';
import jokerImage from '../assets/images/trending/joker.jpg';
import lightyearImage from '../assets/images/trending/lightyear.jpg';
import morbiusImage from '../assets/images/trending/morbius.jpg';

const Trending = () => {
	return (
		<div>
			<Container >
				<br />
				<h1 className='text-white' id='trending'>TRENDING MOVIES</h1>
				<br />
				<Row>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={duneImage} alt='Dune Movie' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={everythingImage} alt='EVERYTHING' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={infiniteImage} alt='INFINITE' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={jokerImage} alt='JOKER' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={lightyearImage} alt='LIGHTYEAR' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
					<Col md={4} className='movieWrapper'>
						<Card className='movieImage' >
							<Image src={morbiusImage} alt='MORBIUS' className='images' />
							<div className='bg-dark'>
								<div className='text-white p-2 m-1'>
									<Card.Title className='text-center'>DUNE</Card.Title>
									<Card.Text className='bg-dark text-left'>
										This is a wider card .
									</Card.Text>
									<Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>

		</div >
	);
};

export default Trending;