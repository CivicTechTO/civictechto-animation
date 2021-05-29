import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {CttoLogo as Logo} from './HelloWorld/CttoLogo';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          framesDelay: 10,
          logoColor: 'black',
        }}
      />
      <Composition
        id="Logo"
        component={Logo}
        durationInFrames={200}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
