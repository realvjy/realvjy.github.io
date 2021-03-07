import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"


const Logo = () => {
    return (
      <Link to={`/`} className="brand">
        <svg width="86" height="17" viewBox="0 0 86 17" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="paint0_linear"  gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint1_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint2_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint3_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint4_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint5_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
            <linearGradient id="paint6_linear" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AB1F1"/>
              <stop offset="0.328125" stop-color="#566CEC"/>
              <stop offset="0.65625" stop-color="#D749AF"/>
              <stop offset="1" stop-color="#FF7C51"/>
            </linearGradient>
          </defs>
          <g class="native-logo">
            <path d="M6.2531 16.488L5.04572 11.0229H4.11697V16.488H0.936005V0.488007H5.44044C6.49302 0.488007 7.28246 0.681806 7.80875 1.0694C8.35052 1.4415 8.71428 1.99963 8.90003 2.74382C9.08578 3.4725 9.17866 4.4725 9.17866 5.74382C9.17866 6.93762 9.09352 7.89886 8.92325 8.62754C8.75298 9.35622 8.42018 9.92211 7.92485 10.3252L9.55016 16.488H6.2531ZM4.90641 8.20894C5.24695 8.20894 5.48688 8.16243 5.62619 8.0694C5.7655 7.96088 5.85838 7.75157 5.90482 7.4415C5.95125 7.11591 5.97447 6.56553 5.97447 5.79033C5.97447 5.03064 5.95125 4.49576 5.90482 4.18568C5.85838 3.8601 5.7655 3.6508 5.62619 3.55777C5.48688 3.44925 5.24695 3.39498 4.90641 3.39498H4.11697V8.20894H4.90641Z"/>
            <path d="M15.2137 16.488V0.488007H21.6221V3.39498H18.3947V6.95312H21.2274V9.8601H18.3947V13.581H21.6221V16.488H15.2137Z" />
            <path d="M33.2732 16.488L32.8785 13.302H30.4869L30.0922 16.488H26.9112L29.3028 0.488007H34.1091L36.5006 16.488H33.2732ZM31.764 3.62754H31.6014L30.7888 10.488H32.5766L31.764 3.62754Z"/>
            <path d="M42.0685 16.488V0.488007H45.2495V13.5345H48.1751V16.488H42.0685Z"/>
            <path d="M54.4532 16.488L52.2939 0.488007H55.498L56.8215 13.1857H57.0537L58.2843 0.488007H61.442L59.2827 16.488H54.4532Z" />
            <path d="M66.2973 13.7671C66.932 13.7671 67.3654 13.7128 67.5975 13.6043C67.8452 13.4958 68 13.2632 68.0619 12.9066C68.1393 12.55 68.178 11.8989 68.178 10.9531V0.488007H71.3822V9.18568C71.3822 11.6818 71.2893 13.395 71.1036 14.3252C70.9178 15.2399 70.4999 15.8291 69.8498 16.0927C69.2151 16.3562 68.031 16.488 66.2973 16.488V13.7671Z" />
            <path d="M79.6902 16.488V10.9299L76.6485 0.488007H79.8527L81.269 7.41824H81.5012L82.8247 0.488007H85.936L82.8943 10.9299V16.488H79.6902Z" />
          </g>
          <g class="gradient-logo">
            <path d="M6.2531 16.488L5.04572 11.0229H4.11697V16.488H0.936005V0.488007H5.44044C6.49302 0.488007 7.28246 0.681806 7.80875 1.0694C8.35052 1.4415 8.71428 1.99963 8.90003 2.74382C9.08578 3.4725 9.17866 4.4725 9.17866 5.74382C9.17866 6.93762 9.09352 7.89886 8.92325 8.62754C8.75298 9.35622 8.42018 9.92211 7.92485 10.3252L9.55016 16.488H6.2531ZM4.90641 8.20894C5.24695 8.20894 5.48688 8.16243 5.62619 8.0694C5.7655 7.96088 5.85838 7.75157 5.90482 7.4415C5.95125 7.11591 5.97447 6.56553 5.97447 5.79033C5.97447 5.03064 5.95125 4.49576 5.90482 4.18568C5.85838 3.8601 5.7655 3.6508 5.62619 3.55777C5.48688 3.44925 5.24695 3.39498 4.90641 3.39498H4.11697V8.20894H4.90641Z" fill="url(#paint0_linear)"/>
            <path d="M15.2137 16.488V0.488007H21.6221V3.39498H18.3947V6.95312H21.2274V9.8601H18.3947V13.581H21.6221V16.488H15.2137Z" fill="url(#paint1_linear)"/>
            <path d="M33.2732 16.488L32.8785 13.302H30.4869L30.0922 16.488H26.9112L29.3028 0.488007H34.1091L36.5006 16.488H33.2732ZM31.764 3.62754H31.6014L30.7888 10.488H32.5766L31.764 3.62754Z" fill="url(#paint2_linear)"/>
            <path d="M42.0685 16.488V0.488007H45.2495V13.5345H48.1751V16.488H42.0685Z" fill="url(#paint3_linear)"/>
            <path d="M54.4532 16.488L52.2939 0.488007H55.498L56.8215 13.1857H57.0537L58.2843 0.488007H61.442L59.2827 16.488H54.4532Z" fill="url(#paint4_linear)"/>
            <path d="M66.2973 13.7671C66.932 13.7671 67.3654 13.7128 67.5975 13.6043C67.8452 13.4958 68 13.2632 68.0619 12.9066C68.1393 12.55 68.178 11.8989 68.178 10.9531V0.488007H71.3822V9.18568C71.3822 11.6818 71.2893 13.395 71.1036 14.3252C70.9178 15.2399 70.4999 15.8291 69.8498 16.0927C69.2151 16.3562 68.031 16.488 66.2973 16.488V13.7671Z" fill="url(#paint5_linear)"/>
            <path d="M79.6902 16.488V10.9299L76.6485 0.488007H79.8527L81.269 7.41824H81.5012L82.8247 0.488007H85.936L82.8943 10.9299V16.488H79.6902Z" fill="url(#paint6_linear)"/>
          </g>
          <use class="gradient-logo"/>
        </svg>
      </Link>
    )
}

export default Logo
