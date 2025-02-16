import React, { useState, useCallback } from 'react';
import { Dialog, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { showMessage } from 'react-native-flash-message';

import { getUserPetsReference } from '@services/firebase/firestore';
import { captureException } from '@services/exceptionsHandler';

import Loading from '@components/loading';

interface Props {
	visible: boolean;
	setVisible: (visible: boolean) => void;
	petId: string;
}

const DeletePet: React.FC<Props> = (props: Props) => {
	const { pop } = useNavigation<NativeStackNavigationProp<AppRoutes>>();

	const [isLoading, setIsLoading] = useState(false);

	const hideDialog = useCallback(() => {
		props.setVisible(false);
	}, [props]);

	const handleDelete = useCallback(async () => {
		try {
			setIsLoading(true);

			const petsReference = await getUserPetsReference();

			if (petsReference) {
				await petsReference.doc(props.petId).delete();

				showMessage({
					message: 'Pet excluido com sucesso',
					type: 'success',
				});

				pop(2);
			}
		} catch (error) {
			captureException({
				error,
				showAlert: true,
			});
		} finally {
			setIsLoading(false);
		}
	}, [props, pop]);

	return (
		<Dialog visible={props.visible} onDismiss={hideDialog}>
			<Dialog.Title>Você tem certeza?</Dialog.Title>

			{isLoading && <Loading />}

			<Dialog.Content>
				<Text variant="bodyMedium">
					Você vai excluir esse pet, essa operação nao pode ser
					desfeita
				</Text>
			</Dialog.Content>
			<Dialog.Actions>
				<Button
					onPress={handleDelete}
					textColor="red"
					disabled={isLoading}
				>
					Apagar
				</Button>
				<Button onPress={hideDialog} disabled={isLoading}>
					Manter
				</Button>
			</Dialog.Actions>
		</Dialog>
	);
};

export default DeletePet;
