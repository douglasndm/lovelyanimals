import React, { useState, useCallback, useEffect } from 'react';
import { Text, Platform } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
	appleAuth,
	appleAuthAndroid,
	AppleButton,
} from '@invertase/react-native-apple-authentication';
import { showMessage } from 'react-native-flash-message';

import {
	signInWithApple,
	signInWithAppleAndroid,
} from '@utils/auth/login/apple';
import { signInWithGoogle } from '@utils/auth/login/google';

import GoogleButtonSVG from '@assets/images/buttons/signin/google_pt-br.svg';

import Header from '@components/header';

import {
	Container,
	PageContent,
	TextTitle,
	TextDescription,
	LoginContainer,
	LoginButton,
	Loading,
} from './styles';

const Login: React.FC = () => {
	const [isSigning, setIsSigning] = useState(false);
	const [cUser, setCUser] = useState('');

	const signInGoogle = useCallback(async () => {
		try {
			setIsSigning(true);

			await signInWithGoogle();
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				showMessage({
					message: error.message,
					type: 'warning',
				});
			}
		} finally {
			setIsSigning(false);
		}
	}, []);

	const signInApple = useCallback(async () => {
		try {
			setIsSigning(true);

			if (Platform.OS === 'android') {
				await signInWithAppleAndroid();
			} else {
				await signInWithApple();
			}
		} catch (error) {
			if (error instanceof Error) {
				showMessage({
					message: error.message,
					type: 'warning',
				});
			}
		} finally {
			setIsSigning(false);
		}
	}, []);

	useEffect(() => {
		auth().onAuthStateChanged(user => {
			if (user) {
				setCUser(JSON.stringify(user));
			}
			console.log('current user: ' + user);
		});
	}, []);

	return (
		<Container>
			<Header />
			<PageContent>
				<TextTitle>
					Faça login para ativar as notificações de lembretes!
				</TextTitle>
				<TextDescription>
					Ao entrar na sua conta, você habilita as funções de
					notificações personalizadas, como lembretes de vacinas,
					medicamentos e cuidados importantes para o seu pet. Nunca
					mais perca uma data crucial e mantenha a saúde do seu animal
					de estimação em dia.
				</TextDescription>

				<TextDescription>
					Se ainda não tem uma conta, cadastre-se agora e comece a
					usufruir de todos os benefícios!
				</TextDescription>

				{isSigning ? (
					<Loading />
				) : (
					<LoginContainer>
						{(appleAuthAndroid.isSupported ||
							appleAuth.isSupported) && (
							<AppleButton
								buttonStyle={AppleButton.Style.BLACK}
								buttonType={AppleButton.Type.CONTINUE}
								style={{
									width: 160,
									height: 45,
								}}
								onPress={signInApple}
							/>
						)}

						<LoginButton onPress={signInGoogle}>
							<GoogleButtonSVG width={160} height={45} />
						</LoginButton>
					</LoginContainer>
				)}

				<Text>{cUser}</Text>
			</PageContent>
		</Container>
	);
};

export default Login;
