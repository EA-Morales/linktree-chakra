import {
	Container,
	Box,
	Avatar,
	Heading,
	VStack,
	HStack,
	Button,
	Image,
	Text,
} from '@chakra-ui/react';

import background from './assets/img/background.jpg';
import avatar from './assets/img/avatar.jpg';
import portfolio from './assets/img/portfolio.png';
import github from './assets/img/github.png';

function App() {
	return (
		<Container
			alignItems={'center'}
			backgroundImage={background}
			bgPosition={'center'}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			display={'flex'}
			height={'100vh'}
			justifyContent={'center'}
			minW={'full'}>
			<Box
				display={'flex'}
				justifyContent={'center'}
				padding={'4'}
				w={'80%'}>
				<VStack w={'full'}>
					<VStack>
						<Avatar
							name={'Agustin Morales'}
							size={'xl'}
							src={avatar}
						/>
						<Heading as={'h1'}>@l3gol4s</Heading>
						<Text fontSize={'md'}>Frontend Developer</Text>
					</VStack>
					<VStack w={'full'}>
						<HStack
							_hover={{
								background: 'white',
								color: 'teal.500',
							}}
							bg={'whiteAlpha.300'}
							direction='row'
							display={'flex'}
							justifyContent={'center'}
							padding={4}
							spacing={4}
							w={'full'}>
							<Image
								boxSize={8}
								src={github}
							/>

							<Text marginRight={0}>Github</Text>
						</HStack>
					</VStack>
				</VStack>
			</Box>
		</Container>
	);
}

export default App;
