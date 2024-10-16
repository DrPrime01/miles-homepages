import { motion } from "framer-motion";

export default function AuthlayoutIcon1() {
	return (
		<motion.svg
			width="86"
			height="86"
			viewBox="0 0 86 86"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			// className="absolute hidden md:block"
		>
			<g filter="url(#filter0_dd_2060_16503)">
				<rect x="18" y="10" width="50" height="50" rx="17" fill="white" />
				<path
					d="M53.6253 34.166H32.792V36.2493H53.6253V34.166Z"
					fill="#E6ECEB"
				/>
				<path
					d="M32.3753 30H53.6253L55.0837 34.5833H30.917L32.3753 30Z"
					fill="#004537"
				/>
				<path
					d="M40.292 30H53.6253L55.0837 34.5833H40.292V30Z"
					fill="#004537"
				/>
				<path d="M40.709 30H39.459V34.5833H40.709V30Z" fill="white" />
				<path
					d="M54.0417 35.834H31.9583C31.4981 35.834 31.125 36.2071 31.125 36.6673V39.584C31.125 40.0442 31.4981 40.4173 31.9583 40.4173H54.0417C54.5019 40.4173 54.875 40.0442 54.875 39.584V36.6673C54.875 36.2071 54.5019 35.834 54.0417 35.834Z"
					fill="#004537"
				/>
				<path d="M40.709 35.834H39.459V40.4173H40.709V35.834Z" fill="white" />
			</g>
			<defs>
				<filter
					id="filter0_dd_2060_16503"
					x="0"
					y="0"
					width="86"
					height="86"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0.270588 0 0 0 0 0.215686 0 0 0 0.8 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2060_16503"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology
						radius="6"
						operator="erode"
						in="SourceAlpha"
						result="effect2_dropShadow_2060_16503"
					/>
					<feOffset dy="8" />
					<feGaussianBlur stdDeviation="12" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_2060_16503"
						result="effect2_dropShadow_2060_16503"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_2060_16503"
						result="shape"
					/>
				</filter>
			</defs>
		</motion.svg>
	);
}
