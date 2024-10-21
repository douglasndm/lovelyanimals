import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import UnityView from '@azesmway/react-native-unity';

interface IMessage {
	gameObject: string;
	methodName: string;
	message: string;
}

const Unity: React.FC = () => {
	const unityRef = useRef<UnityView>(null);

	useEffect(() => {
		if (unityRef?.current) {
			const message: IMessage = {
				gameObject: 'gameObject',
				methodName: 'methodName',
				message: 'message',
			};
			unityRef.current.postMessage(
				message.gameObject,
				message.methodName,
				message.message
			);
		}
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<UnityView
				ref={unityRef}
				style={{ flex: 1 }}
				onUnityMessage={result => {
					console.log('onUnityMessage', result.nativeEvent.message);
				}}
			/>
		</View>
	);
};

export default Unity;
