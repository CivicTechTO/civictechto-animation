import {Img, useVideoConfig} from 'remotion';
import logo from '../../../ctto-logo.svg'

export const CivicTechTorontoLogo: React.FC = () => {
	const videoConfig = useVideoConfig();

  return (
    <div
      style={{
        position: 'absolute',
        width: videoConfig.width,
        height: videoConfig.height,
      }}
    >
      <Img src={logo} />
    </div>
  )
}
