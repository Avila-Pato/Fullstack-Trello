import React from 'react';

const SyncTaskIcon: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg
        height="45px"
        width="45px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 504.123 504.123"
        xmlSpace="preserve"
        className="h-6 w-6 mr-2" // Ajusta el tamaño del ícono y margen
      >
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="83.4322"
          y1="598.915"
          x2="-101.1777"
          y2="598.915"
          gradientTransform="matrix(7.8769 0 0 -7.8769 364.0537 4969.6694)"
        >
          <stop offset="0.012" style={{ stopColor: '#E0B386' }} />
          <stop offset="0.519" style={{ stopColor: '#DA498C' }} />
          <stop offset="1" style={{ stopColor: '#961484' }} />
        </linearGradient>
        <path
          style={{ fill: 'url(#SVGID_1_)' }}
          d="M252.062,0C112.853,0,0,112.853,0,252.062s112.853,252.062,252.062,252.062
	S504.123,391.27,504.123,252.062S391.27,0,252.062,0z M294.613,386.276c-97.627,0-176.766-79.147-176.766-176.766
	c0-97.634,79.147-176.766,176.766-176.766c97.634,0,176.766,79.139,176.766,176.766
	C471.387,307.129,392.247,386.276,294.613,386.276z"
        />
        {/* Resto del SVG aquí... */}
        <linearGradient
          id="SVGID_4_"
          gradientUnits="userSpaceOnUse"
          x1="-7.0143"
          y1="606.1196"
          x2="16.9717"
          y2="630.1066"
          gradientTransform="matrix(7.8769 0 0 -7.8769 364.0537 4969.6694)"
        >
          <stop offset="0" style={{ stopColor: '#29D3DA' }} />
          <stop offset="0.519" style={{ stopColor: '#0077FF' }} />
          <stop offset="0.999" style={{ stopColor: '#064093' }} />
          <stop offset="1" style={{ stopColor: '#084698' }} />
        </linearGradient>
        <path
          style={{ fill: 'url(#SVGID_4_)' }}
          d="M327.806,266.145c49.609,0,89.821-40.22,89.821-89.836s-40.212-89.828-89.821-89.828
	s-89.836,40.212-89.836,89.828S278.197,266.145,327.806,266.145z M312.635,128.48c34.8,0,63,28.199,63,63s-28.199,63-63,63
	c-34.792,0-63.008-28.199-63.008-63S277.843,128.48,312.635,128.48z"
        />
      </svg>
      <span className="text-xl font-extrabold">SyncTask</span>
    </div>
  );
};

export default SyncTaskIcon;
