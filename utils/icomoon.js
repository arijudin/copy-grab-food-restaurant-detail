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

const PreveredIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="nonzero">
            <path fill="#00B14F" d="M5.377 14.332a2.896 2.896 0 0 1-3.71-3.71 2.896 2.896 0 0 1 0-5.245 2.896 2.896 0 0 1 3.71-3.71 2.896 2.896 0 0 1 5.246 0 2.896 2.896 0 0 1 3.71 3.71 2.896 2.896 0 0 1 0 5.246 2.896 2.896 0 0 1-3.71 3.71 2.896 2.896 0 0 1-5.246 0z"/>
            <path fill="#FFF" d="M9.888 5.078l1.26.815-3.694 5.701L4.861 9.49l.945-1.165 1.297 1.053z"/>
        </g>
    </svg>
  )
}

const StarIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z"/>
            <path fill="#F7C942" stroke="#F7C942" strokeLinecap="square" strokeLinejoin="round" d="M8 2l1.854 3.66L14 6.249l-3 2.849.708 4.023L8 11.22l-3.708 1.9L5 9.097l-3-2.85 4.146-.586z"/>
        </g>
    </svg>
  )
}

const PromoTagIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="24" height="24" viewBox="0 0 24 24">
        <g fill="#00B14F" fillRule="nonzero">
            <path d="M12.746 2.53l-9.95 9.383a.972.972 0 0 0-.062 1.333l3.739 3.984 3.73 3.974c.376.379.937.393 1.315.06l10.139-9.56a.5.5 0 1 1 .686.727l-10.152 9.572c-.784.692-1.946.663-2.708-.105l-3.74-3.984-3.751-3.997c-.685-.788-.656-1.953.106-2.72l10.139-9.56a.5.5 0 0 1 .417-.131l8.701 1.303a.5.5 0 0 1 .424.455l.504 6.374a.5.5 0 0 1-.997.079l-.472-5.978-8.068-1.209z"/>
            <path d="M15.622 9.934c-.88-.072-1.545-.812-1.466-1.667.078-.851.86-1.467 1.737-1.395.88.072 1.544.812 1.466 1.666-.078.851-.861 1.467-1.737 1.396zm.19-2.066c-.344-.028-.634.2-.66.49-.027.286.212.551.551.579.344.028.634-.2.66-.49.026-.285-.212-.55-.552-.579z"/>
        </g>
    </svg>
  )
}

const InfoIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z"/>
            <circle cx="7" cy="7" r="7" stroke="#9A9A9A" transform="translate(1 1)"/>
            <path fill="#9A9A9A" d="M7 4h2v2H7zM7 7h2v5H7z"/>
        </g>
    </svg>
  )
}

const ClockIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.fill ?? 'currentColor'}`} className={`${props.className ?? ''}`} width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" stroke="#676767" strokeLinecap="square"/>
            <path fill="#676767" fillRule="nonzero" d="M17.41 11.5v1H11.5V6.59h1v4.91z"/>
        </g>
    </svg>
  )
}

const CalendarIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={`${props.className ?? ''}`} width="24" height="24" viewBox="0 0 24 24" >
      <rect opacity="0.01" width="24" height="24" fill="#D8D8D8"/>
      <rect x="3" y="5" width="18" height="15" rx="1.5" stroke="#676767" strokeWidth="2" strokeLinecap="square"/>
      <path d="M8 3V7" stroke="#676767" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 3V7" stroke="#676767" strokeWidth="2" strokeLinecap="round"/>
      <rect x="6" y="10" width="2" height="2" fill="#676767"/>
      <rect x="11" y="10" width="2" height="2" fill="#676767"/>
      <rect x="16" y="10" width="2" height="2" fill="#676767"/>
      <rect x="6" y="14" width="2" height="2" fill="#676767"/>
    </svg>
  )
}

export {
  Plus,
  CartDefault,
  GeoIcon,
  CevronRight,
  PreveredIcon,
  StarIcon,
  PromoTagIcon,
  InfoIcon,
  ClockIcon,
  CalendarIcon
}