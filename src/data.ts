export type Locale = 'en' | 'cn' | 'id';

export type { DataBundle, Experience } from './intl/data/types';

import enData from './intl/data/en';
import cnData from './intl/data/cn';
import idData from './intl/data/id';

export const dataByLocale = {
	en: enData,
	cn: cnData,
	id: idData
} as const;
