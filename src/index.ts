import { SVGFactory } from 'react';

import _Metronome from './svgs/metronome.svg';
import _Pitch from './svgs/pitch.svg';
import _Gain from './svgs/gain.svg';
import _LeftRight from './svgs/left-right.svg';
import _Dragger from './svgs/dragger.svg';
import _Panning from './svgs/panning.svg';

const Metronome = _Metronome as SVGFactory;
const Pitch = _Pitch as SVGFactory;
const Gain = _Gain as SVGFactory;
const LeftRight = _LeftRight as SVGFactory;
const Dragger = _Dragger as SVGFactory;
const Panning = _Panning as SVGFactory;

export { Metronome, Pitch, Gain, LeftRight, Dragger, Panning };
