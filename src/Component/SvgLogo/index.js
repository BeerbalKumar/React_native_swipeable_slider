import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={137}
      height={120}
      viewBox="0 0 137 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M30.1 102.006l-7.273-17.4a3.05 3.05 0 01-.29-1.182 2.423 2.423 0 012.47-2.435 2.564 2.564 0 012.498 1.73l5.605 14.516 5.673-14.676a2.554 2.554 0 012.372-1.57 2.376 2.376 0 012.435 2.39c-.015.37-.1.733-.25 1.07l-7.344 17.557a2.892 2.892 0 01-2.788 1.954h-.32a2.898 2.898 0 01-2.788-1.954z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M43.224 93.676a2.354 2.354 0 012.346-2.341h5.574a2.342 2.342 0 110 4.678H45.57a2.35 2.35 0 01-2.346-2.337z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M55.577 92.46v-.063c0-6.377 4.963-11.595 11.76-11.595 3.393 0 5.636.772 7.656 2.18a2.465 2.465 0 011.026 1.99 2.443 2.443 0 01-3.942 1.922 7.84 7.84 0 00-4.906-1.539c-3.567 0-6.444 3.17-6.444 6.984v.067c0 4.098 2.823 7.112 6.797 7.112a7.893 7.893 0 004.646-1.338v-3.206h-3.335a2.117 2.117 0 01-2.145-2.114 2.145 2.145 0 012.145-2.144h5.64a2.444 2.444 0 012.467 2.466v5.449a3.33 3.33 0 01-1.73 3.122 14.934 14.934 0 01-7.849 2.229c-6.983.014-11.786-4.892-11.786-11.523z"
          fill="url(#prefix__paint2_linear)"
        />
        <Path
          d="M78.57 92.46v-.063c0-6.377 5.03-11.595 11.95-11.595 6.922 0 11.889 5.16 11.889 11.537v.067c0 6.372-5.03 11.594-11.95 11.594-6.922 0-11.89-5.164-11.89-11.54zm18.68 0v-.063c0-3.849-2.818-7.05-6.792-7.05-3.973 0-6.729 3.121-6.729 6.983v.067c0 3.844 2.818 7.046 6.792 7.046 3.973 0 6.716-3.13 6.716-6.984h.013z"
          fill="url(#prefix__paint3_linear)"
        />
        <Path
          d="M98.191 44.868a1.267 1.267 0 100 2.529h6.141a1.265 1.265 0 00.846-2.133 1.265 1.265 0 00-.846-.396h-6.141z"
          fill="url(#prefix__paint4_linear)"
        />
        <Path
          d="M108.791 47.397h.932a1.27 1.27 0 001.191-1.265 1.268 1.268 0 00-1.191-1.264h-.932a1.269 1.269 0 00-1.191 1.264 1.268 1.268 0 001.191 1.265z"
          fill="url(#prefix__paint5_linear)"
        />
        <Path
          d="M13.658 39.231a1.267 1.267 0 100 2.529h3.452a1.266 1.266 0 000-2.529h-3.452z"
          fill="url(#prefix__paint6_linear)"
        />
        <Path
          d="M9.262 41.76a1.266 1.266 0 000-2.529H5.805a1.267 1.267 0 000 2.529h3.457z"
          fill="url(#prefix__paint7_linear)"
        />
        <Path
          d="M108.091 51.428a3.687 3.687 0 00-3.461 2.426h-4.785a1.275 1.275 0 00-.892.37l-6.907 6.912h-8.74a27.65 27.65 0 003.754-6.243h4.727a.632.632 0 00.482-1.097.632.632 0 00-.482-.165h-4.214a27.106 27.106 0 001.534-6.243h4.86a1.266 1.266 0 000-2.529h-4.695c.035-1.55-.076-3.1-.33-4.629h15.581a.634.634 0 000-1.266H88.71a23.988 23.988 0 00-1.338-4.219l7.046-7.001c.21-.09.402-.22.567-.38L104.349 18h7.889a3.69 3.69 0 006.099.338 3.691 3.691 0 000-4.466 3.693 3.693 0 00-4.305-1.191 3.69 3.69 0 00-1.794 1.529h-8.656a1.896 1.896 0 00-1.338.553l-5.525 5.507a7.857 7.857 0 00-1.725 1.605l-9.25 9.33a27.617 27.617 0 00-3.281-4.46l3.487-3.487a.634.634 0 00-.892-.892l-3.474 3.487a25.088 25.088 0 00-3.3-2.778l10.43-10.43a.623.623 0 000-.893.633.633 0 00-.891 0l-10.52 10.534a.511.511 0 00-.067.102c-8.999-5.703-20.799-5.284-29.405.647l-4.045-4.08a1.275 1.275 0 00-.892-.37h-9.27a3.693 3.693 0 100 2.528h8.722l3.46 3.46a25.385 25.385 0 00-5.039 5.797H25.502a.64.64 0 000 1.28h14.512a27.797 27.797 0 00-2.676 6.828c-.04.258-.067.517-.107.776H21.44a1.266 1.266 0 000 2.528h15.483c-.24 2.466-.348 5.017-.379 7.608h-7.68a.633.633 0 100 1.266h7.671v3.171H27.13l-4.695-4.722a1.271 1.271 0 00-.892-.366h-9.25a3.693 3.693 0 100 2.528h8.723l3.595 3.603-3.777 3.778a3.684 3.684 0 101.783 1.783l4.103-4.098h9.855c.098 4.906.259 9.847.076 14.471h20.281c5.7.245 11.104.2 16.054-1.927a24.78 24.78 0 007.987-5.212H91.23l4.731 4.695c.237.237.558.37.892.37h4.785a3.69 3.69 0 004.106 2.368 3.688 3.688 0 10-4.106-4.896h-4.259l-3.411-3.412 6.408-6.408h4.263a3.69 3.69 0 006.487.846 3.683 3.683 0 00-1.113-5.266 3.687 3.687 0 00-1.913-.534h-.009zm7.304-36.496a1.156 1.156 0 011.071.716 1.155 1.155 0 01-.251 1.263 1.16 1.16 0 11-.82-1.979zM30.163 21.01a1.16 1.16 0 110-2.318 1.16 1.16 0 010 2.318zM8.833 51.16a1.16 1.16 0 110-2.319 1.16 1.16 0 010 2.32zm11.278 11.644a1.16 1.16 0 11-1.643-1.636 1.16 1.16 0 011.643 1.636zm84.979 3.505a1.16 1.16 0 11-.001 2.321 1.16 1.16 0 01.001-2.321zm-36.889.87c-8.86 1.288-19.273.16-28.428.517.32-8.964-.656-18.872.37-27.613 4.46-21.253 32.973-25.646 43.23-6.662-1.807 2.198-4.144 4.08-6.07 6.243-1.855-3.465-5.057-6.011-7.773-8.834l-5.77 5.85c-2.007-1.605-3.68-3.754-5.628-5.48-.66-.655-1.757-1.815-3.037-.959a2.087 2.087 0 00-.517 2.676l6.44 6.368c-1.664 2.033-3.854 3.768-5.637 5.744-2.003-1.601-3.68-3.75-5.628-5.477-.66-.66-1.748-1.819-3.033-.963a2.052 2.052 0 00-.593 2.52l6.515 6.51c-1.712 2.119-4.013 3.885-5.85 5.923 3.75 3.915 7.527 8.414 13.472 9.106 10.626 2.194 20.651-8.553 18.283-19.024L68.112 53.988c-1.73 1.716-4.432 5.864-6.586 2.367l-5.628-5.623a1.868 1.868 0 01.976-2.582c1.9-1.088 5.057 3.951 6.663 5.106 4.602-4.365 9.048-9.026 13.619-13.472v-.075c.522.53 1.289 2.862 1.338 3.848 2.27-1.869 4.223-4.294 6.44-6.288v-.076h.075C89.36 50.126 81.446 63.905 68.2 67.18zm39.89-10.904a1.156 1.156 0 01-1.071-.715 1.155 1.155 0 01.251-1.264 1.16 1.16 0 11.82 1.98z"
          fill="url(#prefix__paint8_linear)"
        />
        <Path
          d="M11.26 33.368a2.372 2.372 0 002.278-1.717h8.776a.634.634 0 000-1.267h-8.776a2.373 2.373 0 10-2.279 3.006v-.022zm0-3.483a1.11 1.11 0 11-1.111 1.11 1.117 1.117 0 011.11-1.128v.018z"
          fill="url(#prefix__paint9_linear)"
        />
        <Path
          d="M89.923 11.177a.624.624 0 00.446-.182l3.987-3.987h4.553a2.377 2.377 0 100-1.262h-4.82a.601.601 0 00-.223.044.744.744 0 00-.21.139l-4.165 4.17a.63.63 0 000 .891.614.614 0 00.432.187zm11.265-5.913a1.114 1.114 0 11.01 2.229 1.114 1.114 0 01-.01-2.229z"
          fill="url(#prefix__paint10_linear)"
        />
        <Path
          d="M86.81 21.519a.63.63 0 00.892 0l2.23-2.23a.633.633 0 00-.688-1.03.627.627 0 00-.204.138l-2.23 2.23a.633.633 0 000 .892z"
          fill="url(#prefix__paint11_linear)"
        />
        <Path
          d="M110.958 39.606a.633.633 0 00-.628-.633h-2.89a.634.634 0 000 1.266h2.89a.63.63 0 00.628-.633z"
          fill="url(#prefix__paint12_linear)"
        />
        <Path
          d="M118.017 37.23a2.37 2.37 0 00-2.278 1.743h-2.77a.633.633 0 100 1.267h2.77a2.364 2.364 0 001.839 1.684 2.37 2.37 0 002.798-2.106 2.37 2.37 0 00-2.359-2.589zm0 3.487a1.108 1.108 0 01-1.063-1.34 1.108 1.108 0 012.01-.385 1.103 1.103 0 01.1 1.044 1.116 1.116 0 01-1.047.68z"
          fill="url(#prefix__paint13_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={22.537}
          y1={92.474}
          x2={42.841}
          y2={94.863}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={43.224}
          y1={93.674}
          x2={52.6}
          y2={96.338}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={55.577}
          y1={92.392}
          x2={76.184}
          y2={94.832}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={78.57}
          y1={92.401}
          x2={101.481}
          y2={95.424}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={96.849}
          y1={46.132}
          x2={103.956}
          y2={49.257}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={107.6}
          y1={46.132}
          x2={110.751}
          y2={46.663}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear"
          x1={12.317}
          y1={40.496}
          x2={17.675}
          y2={42.121}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint7_linear"
          x1={4.614}
          y1={40.496}
          x2={9.862}
          y2={42.052}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint8_linear"
          x1={5.132}
          y1={41.361}
          x2={110.22}
          y2={67.167}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint9_linear"
          x1={8.879}
          y1={31.018}
          x2={20.893}
          y2={35.591}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint10_linear"
          x1={89.305}
          y1={7.589}
          x2={102.406}
          y2={10.934}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint11_linear"
          x1={86.627}
          y1={19.957}
          x2={89.983}
          y2={20.387}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint12_linear"
          x1={106.807}
          y1={39.606}
          x2={110.255}
          y2={41.057}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint13_linear"
          x1={112.336}
          y1={39.597}
          x2={119.849}
          y2={41.237}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#60B45E" />
          <Stop offset={1} stopColor="#3CA874" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent