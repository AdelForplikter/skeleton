// import type { PresetTheme } from './index.js';

const next = {
	name: 'next',
	properties: {
		// Typography ---

		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',

		// Borders / Radius

		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',

		'--theme-border-base': '1px',

		// Colors ---

		// Primary
		'--on-primary': '0 0 0',
		'--color-primary-contrast-dark': '0 0 0',
		'--color-primary-contrast-light': '255 255 255',
		'--color-primary-50': '219 245 236',
		'--color-primary-50-contrast': 'var(--color-primary-contrast-dark)',
		'--color-primary-100': '207 241 230',
		'--color-primary-100-contrast': 'var(--color-primary-contrast-dark)',
		'--color-primary-200': '195 238 224',
		'--color-primary-200-contrast': 'var(--color-primary-contrast-dark)',
		'--color-primary-300': '159 227 205',
		'--color-primary-300-contrast': 'var(--color-primary-contrast-dark)',
		'--color-primary-400': '87 207 167',
		'--color-primary-400-contrast': 'var(--color-primary-contrast-dark)',

		// '--color-primary-500': '15 186 129',
		'--color-primary-500': '236 72 153',

		'--color-primary-500-contrast': 'var(--color-primary-contrast-dark)',
		'--color-primary-600': '14 167 116',
		'--color-primary-600-contrast': 'var(--color-primary-contrast-light)',
		'--color-primary-700': '11 140 97',
		'--color-primary-700-contrast': 'var(--color-primary-contrast-light)',
		'--color-primary-800': '9 112 77',
		'--color-primary-800-contrast': 'var(--color-primary-contrast-light)',
		'--color-primary-900': '7 91 63',
		'--color-primary-900-contrast': 'var(--color-primary-contrast-light)',
		'--color-primary-950': '128 128 128',
		'--color-primary-950-contrast': 'var(--color-primary-contrast-light)',

		// Secondary
		'--on-secondary': '255 255 255',
		'--color-secondary-50': '229 227 251',
		'--color-secondary-100': '220 218 250',
		'--color-secondary-200': '211 209 249',
		'--color-secondary-300': '185 181 245',
		'--color-secondary-400': '132 126 237',
		'--color-secondary-500': '79 70 229',
		'--color-secondary-600': '71 63 206',
		'--color-secondary-700': '59 53 172',
		'--color-secondary-800': '47 42 137',
		'--color-secondary-900': '39 34 112',

		// Tertiary
		'--on-tertiary': '0 0 0',
		'--color-tertiary-50': '219 242 252',
		'--color-tertiary-100': '207 237 251',
		'--color-tertiary-200': '195 233 250',
		'--color-tertiary-300': '159 219 246',
		'--color-tertiary-400': '86 192 240',
		'--color-tertiary-500': '14 165 233',
		'--color-tertiary-600': '13 149 210',
		'--color-tertiary-700': '11 124 175',
		'--color-tertiary-800': '8 99 140',
		'--color-tertiary-900': '7 81 114',

		// Success
		'--on-success': '0 0 0',
		'--color-success-50': '237 247 220',
		'--color-success-100': '230 245 208',
		'--color-success-200': '224 242 197',
		'--color-success-300': '206 235 162',
		'--color-success-400': '169 219 92',
		'--color-success-500': '132 204 22',
		'--color-success-600': '119 184 20',
		'--color-success-700': '99 153 17',
		'--color-success-800': '79 122 13',
		'--color-success-900': '65 100 11',

		// Warning
		'--on-warning': '0 0 0',
		'--color-warning-50': '252 244 218',
		'--color-warning-100': '251 240 206',
		'--color-warning-200': '250 236 193',
		'--color-warning-300': '247 225 156',
		'--color-warning-400': '240 202 82',
		'--color-warning-500': '234 179 8',
		'--color-warning-600': '211 161 7',
		'--color-warning-700': '176 134 6',
		'--color-warning-800': '140 107 5',
		'--color-warning-900': '115 88 4',

		// Error
		'--on-error': '255 255 255',
		'--color-error-50': '249 221 234',
		'--color-error-100': '246 209 228',
		'--color-error-200': '244 198 221',
		'--color-error-300': '238 163 200',
		'--color-error-400': '225 94 159',
		'--color-error-500': '212 25 118',
		'--color-error-600': '191 23 106',
		'--color-error-700': '159 19 89',
		'--color-error-800': '127 15 71',
		'--color-error-900': '104 12 58',

		// Surface
		'--on-surface': '255 255 255',
		'--color-surface-50': '228 230 238',
		'--color-surface-100': '219 222 233',
		'--color-surface-200': '210 214 227',
		'--color-surface-300': '182 189 210',
		'--color-surface-400': '128 140 177',
		'--color-surface-500': '73 90 143',
		'--color-surface-600': '66 81 129',
		'--color-surface-700': '55 68 107',
		'--color-surface-800': '44 54 86',
		'--color-surface-900': '36 44 70'
	},
	properties_dark: {},
	enhancements: {
		"[data-theme='skeleton'] h1,\n[data-theme='skeleton'] h2,\n[data-theme='skeleton'] h3,\n[data-theme='skeleton'] h4,\n[data-theme='skeleton'] h5,\n[data-theme='skeleton'] h6":
			{ fontWeight: 'bold' },
		"[data-theme='skeleton']": {
			backgroundImage:
				'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\n\t\t\tradial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)',
			backgroundAttachment: 'fixed',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}
	}
}; // satisfies PresetTheme;

export default next;
