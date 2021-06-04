import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

import _Metronome from './svgs/metronome.svg';
import _Pitch from './svgs/pitch.svg';
import _Gain from './svgs/gain.svg';
import _LeftRight from './svgs/left-right.svg';
import _Dragger from './svgs/dragger.svg';
import _Panning from './svgs/panning.svg';
import _ArrowDown from './svgs/arrow-down.svg';
import _ArrowLeft from './svgs/arrow-left.svg';
import _ArrowRight from './svgs/arrow-right.svg';
import _ArrowUp from './svgs/arrow-up.svg';
import _DotMenu from './svgs/dot-menu.svg';
import _ColorGoogle from './svgs/color/google.svg';
import _ColorMicrosoft from './svgs/color/microsoft.svg';
import _ColorClever from './svgs/color/clever.svg';
import _Play from './svgs/play.svg';
import _Pause from './svgs/pause.svg';
import _Stop from './svgs/stop.svg';

export interface SvgProps extends Partial<XmlProps> {
  size?: number;
}
const svg = (contents: string | React.SVGFactory): React.FC<SvgProps> => {
  return ({ size = 16, ...props }) => (
    <SvgXml xml={contents as string} width={size} height={size} {...props} />
  );
};

const Metronome = svg(_Metronome);
const Pitch = svg(_Pitch);
const Gain = svg(_Gain);
const LeftRight = svg(_LeftRight);
const Dragger = svg(_Dragger);
const Panning = svg(_Panning);
const ArrowDown = svg(_ArrowDown);
const ArrowLeft = svg(_ArrowLeft);
const ArrowRight = svg(_ArrowRight);
const ArrowUp = svg(_ArrowUp);
const DotMenu = svg(_DotMenu);
const ColorGoogle = svg(_ColorGoogle);
const ColorMicrosoft = svg(_ColorMicrosoft);
const ColorClever = svg(_ColorClever);
const Play = svg(_Play);
const Pause = svg(_Pause);
const Stop = svg(_Stop);

export {
  Metronome,
  Pitch,
  Gain,
  LeftRight,
  Dragger,
  Panning,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  DotMenu,
  ColorGoogle,
  ColorMicrosoft,
  ColorClever,
  Play,
  Pause,
  Stop,
};
