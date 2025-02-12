import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Content, Button, Icon, MaterialIcons } from './styles';

interface Props {
	currentRoute: string | undefined;
}

const TabMenu: React.FC<Props> = (props: Props) => {
	const { navigate } = useNavigation<NativeStackNavigationProp<AppRoutes>>();

	const insets = useSafeAreaInsets();

	const navigateDog = useCallback(() => {
		navigate('DogsView', {});
	}, [navigate]);

	const navigateCat = useCallback(() => {
		navigate('CatsView', {});
	}, [navigate]);

	const navigatePlaces = useCallback(() => {
		navigate('PlacesList', {});
	}, [navigate]);

	const navigatePetList = useCallback(() => {
		navigate('PetList', {});
	}, [navigate]);

	const navigateMenu = useCallback(() => {
		navigate('Menu', {});
	}, [navigate]);

	return (
		<Container>
			<Content style={{ paddingBottom: Math.max(insets.bottom, 25) }}>
				<Button onPress={navigateDog}>
					<Icon
						source={require('@assets/images/dog-head.png')}
						isSelected={props.currentRoute === 'DogsView'}
					/>
				</Button>
				<Button onPress={navigateCat}>
					<Icon
						source={require('@assets/images/cat-head.png')}
						isSelected={props.currentRoute === 'CatsView'}
					/>
				</Button>

				<Button onPress={navigatePlaces}>
					<Icon
						source={require('@assets/images/pets-hospital.png')}
						isSelected={props.currentRoute === 'PlacesList'}
					/>
				</Button>

				{auth().currentUser && (
					<Button onPress={navigatePetList}>
						<MaterialIcons
							name="needle"
							isSelected={props.currentRoute === 'PetList'}
						/>
					</Button>
				)}

				<Button onPress={navigateMenu}>
					<Icon
						source={require('@assets/images/navigation-menu-1.png')}
						isSelected={props.currentRoute === 'Menu'}
					/>
				</Button>
			</Content>
		</Container>
	);
};

export default TabMenu;
