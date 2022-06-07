const Plus = (props) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="32" height="32" viewBox="0 0 32 32">
      <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
    </svg>
  )
}

const CartDefault = (props) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="20px" height="22px" viewBox="0 0 20 22" >
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="icon/reward/24px/shopping-white" transform="translate(-2.000000, -1.000000)">
                <g>
                    <rect id="ic_category_shopping" x="0" y="0" width="24" height="24"></rect>
                    <g id="Group-6" transform="translate(1.900000, 2.000000)" stroke={`${props.stroke ?? 'currentColor'}`}>
                        <path d="M2.90254295,5.1 C2.63489801,5.1 2.40361713,5.33408857 2.3731717,5.63375376 L1.0022275,19.1989712 C0.975727288,19.4611854 1.22142963,19.7 1.53159875,19.7 L18.6684012,19.7 C18.9779724,19.7 19.2242542,19.4604066 19.1977725,19.1989712 L17.8268617,5.63408331 C17.7963817,5.33447347 17.5648285,5.1 17.297457,5.1 L15.2410407,5.1 C14.7921216,5.1 14.7921216,5.1 13.5081923,5.1 C11.9459262,5.1 11.9459262,5.1 10.1053234,5.1 C8.22927512,5.1 8.22927512,5.1 6.64795548,5.1 C5.36136445,5.1 5.36136445,5.1 4.95895925,5.1 L2.90254295,5.1 Z" id="Shape" fillRule="nonzero"></path>
                        <path d="M10.1,7.73326896 L10.1,5.18518519 C10.1139408,1.72839506 11.5139408,-1.77635684e-14 14.3,-1.77635684e-14" id="Path-6-Copy-3" transform="translate(12.200000, 3.866634) scale(-1, 1) translate(-12.200000, -3.866634) "></path>
                        <path d="M5.9,7.6 L5.9,5.18518519 C5.91394083,1.72839506 7.31394083,-1.77635684e-14 10.1,-1.77635684e-14" id="Path-6-Copy-4"></path>
                        <circle id="Oval-3-Copy-4" strokeLinecap="round" strokeLinejoin="round" cx="5.9" cy="8.8" r="1.2"></circle>
                        <circle id="Oval-3-Copy-4" strokeLinecap="round" strokeLinejoin="round" cx="14.3" cy="8.8" r="1.2"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

const GeoIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`}  width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
            <path fill="#F7F7F7" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z"/>
            <g transform="translate(5 5)">
                <circle cx="7" cy="7" r="5.727" stroke="#00B14F" strokeLinecap="square"/>
                <path stroke="#00B14F" strokeLinecap="square" d="M7 0v2.545M14 7h-2.545M7 14v-2.545M0 7h2.545"/>
                <circle cx="7" cy="7" r="1" stroke="#00B14F" strokeLinecap="square" strokeWidth="2"/>
                <circle cx="7" cy="7" r="1" fill="#FFF" fillRule="nonzero"/>
            </g>
        </g>
    </svg>
  )
}

const CevronRight = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="8" height="12" viewBox="0 0 8 12">
        <g fill="none" fillRule="evenodd">
            <path d="M-4-2h16v16H-4z"/>
            <path fill="#676767" fillRule="nonzero" d="M6.195 6L.862 11.333l.471.472L7.138 6 1.333.195.862.667z"/>
        </g>
    </svg>
  )
}

export {
  Plus,
  CartDefault,
  GeoIcon,
  CevronRight
}