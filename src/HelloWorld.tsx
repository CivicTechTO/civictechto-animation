import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {CttoLogo as Logo} from './HelloWorld/CttoLogo';

export const HelloWorld: React.FC<{
	framesDelay: number;
	logoColor: string;
}> = ({framesDelay, logoColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Logo framesDelay={framesDelay} logoColor={logoColor} />
				</Sequence>
			</div>
		</div>
	);
};
