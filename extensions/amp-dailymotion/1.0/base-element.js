import {BentoDailymotion} from './component';

import {BentoVideoBaseElement} from '../../amp-video/1.0/base-element';

export class BaseElement extends BentoVideoBaseElement {}

/** @override */
BaseElement['Component'] = BentoDailymotion;

/** @override */
BaseElement['props'] = {
  'autoplay': {attr: 'autoplay', type: 'boolean'},
  'videoId': {attr: 'data-videoid'},
  'start': {attr: 'data-start'},
  'uiHighlight': {attr: 'data-ui-highlight'},
  'implicitParams': {attrPrefix: 'data-param-'},
};

/** @override */
BaseElement['layoutSizeDefined'] = true;

/** @override */
BaseElement['usesShadowDom'] = true;
