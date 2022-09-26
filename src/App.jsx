import {
	Container,
	Box,
	Avatar,
	Heading,
	VStack,
	Text,
} from '@chakra-ui/react';

import avatar from './assets/img/avatar.jpg';

function App() {
	return (
		<Container
			alignItems={'center'}
			bg={'gray.200'}
			display={'flex'}
			height={'100vh'}
			justifyContent={'center'}
			minW={'full'}>
			<Box
				bg={'pink.200'}
				display={'flex'}
				justifyContent={'center'}
				padding={'4'}
				w={'80%'}>
				<VStack>
					<Avatar
						name={'Agustin Morales'}
						size={'xl'}
						src={avatar}
					/>
					<Heading as={'h1'}>@l3gol4s</Heading>
					<Text fontSize={'md'}>Frontend Developer</Text>
				</VStack>
			</Box>
		</Container>
	);
}

export default App;
