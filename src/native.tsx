import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

import _Metronome from './svgs/metronome.svg';
import _Pitch from './svgs/pitch.svg';
import _Gain from './svgs/gain.svg';
import _LeftRight from './svgs/left-right.svg';
import _Dragger from './svgs/dragger.svg';
import _Panning from './svgs/panning.svg';

const svg = (contents: string | React.SVGFactory): React.FC<Partial<XmlProps>> => {
  return (props) => <SvgXml xml={contents as string} {...props} />;
};

const Metronome = svg(_Metronome);
const Pitch = svg(_Pitch);
const Gain = svg(_Gain);
const LeftRight = svg(_LeftRight);
const Dragger = svg(_Dragger);
const Panning = svg(_Panning);

export { Metronome, Pitch, Gain, LeftRight, Dragger, Panning };
