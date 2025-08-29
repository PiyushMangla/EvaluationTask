import Globe from "@/assets/images/globe.png";
import DraftGradient from "@/assets/images/draft-gradient.png"
import Rectangle from "@/assets/images/Rectangle.svg";
import Stars from "@/assets/images/stars.png";
import Image from "next/image";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient Blur Elements */}
      <div className="absolute -left-[688px] top-[1464px] w-[2813px] h-[628px] rounded-[321.5px] opacity-25 bg-gradient-to-r from-transparent via-[#059AF4] to-white blur-[83px]" />
      <div className="absolute -left-[687px] top-[3713px] w-[2813px] h-[714px] rounded-[1110.923px] opacity-20 bg-gradient-to-r from-transparent via-[#059AF4] to-white blur-[83px]" />

      {/* Background Blur Shape */}
      <svg
        className="absolute -left-[249px] -top-[357px] w-[1941px] h-[1558px] blur-[182px]"
        width="1440"
        height="1565"
        viewBox="0 0 1440 1565"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_178)">
          <path d="M-249 -357L721.5 860.514L1692 -357V1201H-249V-357Z" fill="#06070F" />
        </g>
        <defs>
          <filter id="filter0_f_1_178" x="-613" y="-721" width="2669" height="2286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="182" result="effect1_foregroundBlur_1_178" />
          </filter>
        </defs>
      </svg>

      {/* Light Rays */}
      <svg
        className="absolute left-40 -top-6 w-[1120px] h-[709px]"
        width="1209"
        height="729"
        viewBox="0 0 1209 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_179)">
          <path d="M48.2055 76.1764L502.375 684.171L427.916 591.2L44 79.3358L48.2055 76.1764Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter1_f_1_179)">
          <path d="M109.025 7.56037L542.922 588.416L471.644 499.703L104.819 10.7197L109.025 7.56037Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter2_f_1_179)">
          <path d="M239.305 31.8472L608.42 525.98L547.305 450.872L235.099 35.0065L239.305 31.8472Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter3_f_1_179)">
          <path d="M310.434 -22L679.55 472.133L618.434 397.025L306.229 -18.8407L310.434 -22Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter4_f_1_179)">
          <path d="M1159.89 76.1764L725.997 657.032L797.275 568.319L1164.1 79.3358L1159.89 76.1764Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter5_f_1_179)">
          <path d="M1099.07 7.56037L665.177 588.416L736.455 499.703L1103.28 10.7197L1099.07 7.56037Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter6_f_1_179)">
          <path d="M968.795 31.8472L599.679 525.98L660.794 450.872L973 35.0065L968.795 31.8472Z" fill="#059AF4" />
        </g>
        <g filter="url(#filter7_f_1_179)">
          <path d="M897.665 -22L528.55 472.133L589.665 397.025L901.87 -18.8407L897.665 -22Z" fill="#059AF4" />
        </g>
        <defs>
          {[0,1,2,3,4,5,6,7].map(i => (
            <filter key={i} id={`filter${i}_f_1_179`} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_1_179" />
            </filter>
          ))}
        </defs>
      </svg>

      {/* Decorative Background Images */}
      <Image src={Globe} alt="" aria-hidden width={680} height={680} className="absolute bottom-[280px] right-[350px] w-[215px] h-[215px] max-w-none hidden md:block" />
      <Image src={DraftGradient} alt="" aria-hidden width={520} height={520} className="absolute w-[1920px] h-[550px] max-w-none hidden md:block" />
      <Image src={Rectangle} alt="" aria-hidden width={460} height={460} className="absolute  w-[1800px]  max-w-none hidden md:block"/>
      <Image src={Stars} alt="" aria-hidden width={920} height={920} className="absolute left-1/2 -translate-x-1/2 -top-8 w-[1920px] h-auto max-w-none" />

      {/* Bottom Shadows */}
      <svg
        className="absolute left-0 top-[885px] w-full h-[268px]"
        width="1440"
        height="536"
        viewBox="0 0 1440 536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_249)">
          <ellipse cx="1289" cy="268" rx="151" ry="134" fill="#080411" />
        </g>
        <g filter="url(#filter1_f_1_249)">
          <ellipse cx="151" cy="268" rx="151" ry="134" fill="#080411" />
        </g>
        <defs>
          <filter id="filter0_f_1_249" x="1004" y="0" width="570" height="536" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_1_249" />
          </filter>
          <filter id="filter1_f_1_249" x="-134" y="0" width="570" height="536" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_1_249" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundEffects;
