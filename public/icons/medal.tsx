// import React from 'react';

// // Definir los tipos para las props
// interface IconProps {
//   width?: string;
//   height?: string;
//   fill?: string;
//   className?: string;
// }

// const Medal: React.FC<IconProps> = () => (

//   <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64" height="64" >
// <path d="M0 0 C1.9375 1.3125 1.9375 1.3125 3 3 C3 3.99 3 4.98 3 6 C3.90363281 5.96519531 4.80726562 5.93039063 5.73828125 5.89453125 C6.91777344 5.86746094 8.09726562 5.84039063 9.3125 5.8125 C10.48425781 5.77769531 11.65601563 5.74289063 12.86328125 5.70703125 C16 6 16 6 17.67178345 7.21313477 C19.41377381 9.55665474 19.38023569 10.97729996 19.38818359 13.8828125 C19.39764008 14.87394043 19.40709656 15.86506836 19.4168396 16.88623047 C19.41076691 17.95502441 19.40469421 19.02381836 19.3984375 20.125 C19.40130768 21.22344238 19.40417786 22.32188477 19.40713501 23.45361328 C19.40917736 25.77702347 19.40363563 28.10045078 19.39111328 30.42382812 C19.37506278 33.98606712 19.39095698 37.54717142 19.41015625 41.109375 C19.40817385 43.36458585 19.40433024 45.61979598 19.3984375 47.875 C19.40754654 49.47819092 19.40754654 49.47819092 19.4168396 51.11376953 C19.40738312 52.10489746 19.39792664 53.09602539 19.38818359 54.1171875 C19.38579681 54.98972168 19.38341003 55.86225586 19.38095093 56.76123047 C18.91332019 59.50939927 18.25987787 60.396217 16 62 C13.02260864 62.29841479 10.25881789 62.42027068 7.28125 62.3984375 C6.42696411 62.40130768 5.57267822 62.40417786 4.69250488 62.40713501 C2.88695615 62.40917581 1.08138531 62.40364483 -0.72412109 62.39111328 C-3.48976012 62.37505944 -6.25393775 62.39096099 -9.01953125 62.41015625 C-10.77344073 62.40817382 -12.5273493 62.40433015 -14.28125 62.3984375 C-15.10943237 62.40451019 -15.93761475 62.41058289 -16.79089355 62.4168396 C-22.51151599 62.34666579 -22.51151599 62.34666579 -24.71780396 60.78091431 C-26.40288638 58.44040842 -26.38032807 56.98892909 -26.38818359 54.1171875 C-26.39764008 53.12605957 -26.40709656 52.13493164 -26.4168396 51.11376953 C-26.41076691 50.04497559 -26.40469421 48.97618164 -26.3984375 47.875 C-26.40130768 46.77655762 -26.40417786 45.67811523 -26.40713501 44.54638672 C-26.40917736 42.22297653 -26.40363563 39.89954922 -26.39111328 37.57617188 C-26.37506278 34.01393288 -26.39095698 30.45282858 -26.41015625 26.890625 C-26.40817385 24.63541415 -26.40433024 22.38020402 -26.3984375 20.125 C-26.40451019 19.05620605 -26.41058289 17.98741211 -26.4168396 16.88623047 C-26.40738312 15.89510254 -26.39792664 14.90397461 -26.38818359 13.8828125 C-26.38579681 13.01027832 -26.38341003 12.13774414 -26.38095093 11.23876953 C-25.91647114 8.50911823 -25.22377139 7.6136865 -23 6 C-19.86328125 5.70703125 -19.86328125 5.70703125 -16.3125 5.8125 C-14.54326172 5.85310547 -14.54326172 5.85310547 -12.73828125 5.89453125 C-11.38283203 5.94673828 -11.38283203 5.94673828 -10 6 C-9.87625 5.195625 -9.7525 4.39125 -9.625 3.5625 C-9.315625 2.2940625 -9.315625 2.2940625 -9 1 C-5.95016004 -0.52491998 -3.3576631 -0.23562548 0 0 Z M-6 3 C-6.185625 3.639375 -6.37125 4.27875 -6.5625 4.9375 C-8 7 -8 7 -11.625 7.75 C-12.73875 7.8325 -13.8525 7.915 -15 8 C-15.16687448 10.41645782 -15.16687448 10.41645782 -15 13 C-12.59170208 15.40829792 -12.00716444 15.25602579 -8.71875 15.265625 C-7.87699219 15.26820312 -7.03523438 15.27078125 -6.16796875 15.2734375 C-5.28753906 15.26570313 -4.40710937 15.25796875 -3.5 15.25 C-2.17935547 15.26160156 -2.17935547 15.26160156 -0.83203125 15.2734375 C0.00972656 15.27085938 0.85148437 15.26828125 1.71875 15.265625 C2.49154297 15.26336914 3.26433594 15.26111328 4.06054688 15.25878906 C6.23667061 15.16824373 6.23667061 15.16824373 8 13 C8.16687448 10.41645782 8.16687448 10.41645782 8 8 C6.88625 7.9175 5.7725 7.835 4.625 7.75 C1 7 1 7 -0.4375 4.9375 C-0.7159375 3.9784375 -0.7159375 3.9784375 -1 3 C-2.65 3 -4.3 3 -6 3 Z M10 8 C10 8.66 10 9.32 10 10 C11.65 10 13.3 10 15 10 C12.32357511 7.81509993 12.32357511 7.81509993 10 8 Z M-22 10 C-20.35 10 -18.7 10 -17 10 C-17 9.34 -17 8.68 -17 8 C-19.32357511 7.81509993 -19.32357511 7.81509993 -22 10 Z M-23 10 C-23.90894225 12.72682676 -24.13061972 14.34236958 -24.14526367 17.1484375 C-24.15164352 17.97939941 -24.15802338 18.81036133 -24.16459656 19.66650391 C-24.16570938 20.56030762 -24.1668222 21.45411133 -24.16796875 22.375 C-24.17129715 23.29587402 -24.17462555 24.21674805 -24.17805481 25.16552734 C-24.1831168 27.11229961 -24.18546336 29.05908054 -24.18530273 31.00585938 C-24.18749151 33.98842587 -24.20566114 36.97062385 -24.22460938 39.953125 C-24.22754295 41.84374873 -24.22952799 43.73437423 -24.23046875 45.625 C-24.23765427 46.51880371 -24.24483978 47.41260742 -24.25224304 48.33349609 C-24.24916641 49.16445801 -24.24608978 49.99541992 -24.24291992 50.8515625 C-24.24434494 51.58197754 -24.24576996 52.31239258 -24.24723816 53.06494141 C-24.10419076 55.32555374 -24.10419076 55.32555374 -22 58 C-22 42.16 -22 26.32 -22 10 C-22.33 10 -22.66 10 -23 10 Z M15 10 C15 25.84 15 41.68 15 58 C17.04486961 54.93269559 17.25125915 54.30807783 17.25878906 50.8515625 C17.26509338 50.02060059 17.27139771 49.18963867 17.27789307 48.33349609 C17.2738446 47.43969238 17.26979614 46.54588867 17.265625 45.625 C17.26753845 44.70412598 17.2694519 43.78325195 17.27142334 42.83447266 C17.27278421 40.88769253 17.26909463 38.94090331 17.26074219 36.99414062 C17.2500413 34.01151172 17.26064082 31.02948514 17.2734375 28.046875 C17.27211589 26.15624867 17.26955346 24.26562271 17.265625 22.375 C17.26967346 21.48119629 17.27372192 20.58739258 17.27789307 19.66650391 C17.27158875 18.83554199 17.26528442 18.00458008 17.25878906 17.1484375 C17.25719788 16.41802246 17.25560669 15.68760742 17.25396729 14.93505859 C17.10223245 12.67483007 17.10223245 12.67483007 15 10 Z M-19 12 C-20.94863925 13.94863925 -20.1291874 16.8980872 -20.13894653 19.49121094 C-20.1369223 20.40161133 -20.13489807 21.31201172 -20.1328125 22.25 C-20.13376923 23.17844727 -20.13472595 24.10689453 -20.13571167 25.06347656 C-20.13639355 27.03059965 -20.13453872 28.99772496 -20.13037109 30.96484375 C-20.12502295 33.98703026 -20.13031582 37.00906815 -20.13671875 40.03125 C-20.13605797 41.93750033 -20.13477681 43.84375057 -20.1328125 45.75 C-20.13483673 46.66040039 -20.13686096 47.57080078 -20.13894653 48.50878906 C-20.53891332 52.57663678 -20.53891332 52.57663678 -19 56 C-16.72052208 56.1002093 -14.43792865 56.13081303 -12.15625 56.1328125 C-11.47195923 56.13376923 -10.78766846 56.13472595 -10.0826416 56.13571167 C-8.63338123 56.1363933 -7.18411782 56.13454023 -5.73486328 56.13037109 C-3.50937072 56.12502252 -1.28407999 56.1303166 0.94140625 56.13671875 C2.34635461 56.13605797 3.75130285 56.1347768 5.15625 56.1328125 C6.44337891 56.13168457 7.73050781 56.13055664 9.05664062 56.12939453 C11.88826157 56.33686143 11.88826157 56.33686143 13 55 C13.08874135 51.89748799 13.11518455 48.8173188 13.09765625 45.71484375 C13.09553383 44.31861534 13.09553383 44.31861534 13.09336853 42.8941803 C13.08775172 39.90858809 13.0751964 36.92306971 13.0625 33.9375 C13.05748716 31.91862087 13.05292388 29.89974057 13.04882812 27.88085938 C13.03777683 22.92054428 13.02050095 17.96028468 13 13 C12.01 12.67 11.02 12.34 10 12 C9.67 13.32 9.34 14.64 9 16 C0.75 16 -7.5 16 -16 16 C-16.33 14.68 -16.66 13.36 -17 12 C-17.66 12 -18.32 12 -19 12 Z M-22 58 C-18.31025862 60.45982759 -16.43136906 60.25777165 -12.03125 60.265625 C-11.01617371 60.26849518 -11.01617371 60.26849518 -9.98059082 60.27142334 C-8.55167264 60.27278265 -7.12274201 60.26910394 -5.69384766 60.26074219 C-3.50785559 60.25003846 -1.32268528 60.26064544 0.86328125 60.2734375 C2.25260598 60.27211586 3.6419302 60.26955337 5.03125 60.265625 C6.29517578 60.26336914 7.55910156 60.26111328 8.86132812 60.25878906 C12.16216047 60.24177519 12.16216047 60.24177519 15 58 C2.79 58 -9.42 58 -22 58 Z " fill="#000000" transform="translate(29,1)"/>
// <path d="M0 0 C3.0625 0.1875 3.0625 0.1875 5.0625 2.1875 C6.46083227 5.89166256 6.14657283 9.76062832 6.046875 13.65625 C6.03037903 14.373573 6.01388306 15.090896 5.99688721 15.82995605 C5.95948452 17.34293366 5.91895074 18.85583669 5.87548828 20.36865234 C5.81272339 22.6792761 5.77129051 24.98967929 5.73046875 27.30078125 C5.69141859 28.77347294 5.65109657 30.24613157 5.609375 31.71875 C5.59984802 32.40739136 5.59032104 33.09603271 5.58050537 33.80554199 C5.43643775 37.85733359 4.89282679 40.22706492 2.0625 43.1875 C-0.3125 42.875 -0.3125 42.875 -2.9375 42.1875 C-5.3068926 38.6334111 -5.31565676 35.96712927 -5.421875 31.8515625 C-5.4459845 31.13519623 -5.47009399 30.41882996 -5.49493408 29.68075562 C-5.54318856 28.16622015 -5.58658944 26.65152337 -5.62548828 25.13671875 C-5.687103 22.82737952 -5.7702397 20.5195116 -5.85546875 18.2109375 C-5.89974264 16.73701779 -5.94275266 15.26305947 -5.984375 13.7890625 C-6.01029724 13.10244537 -6.03621948 12.41582825 -6.06292725 11.70840454 C-6.14683574 7.72829555 -5.74561233 4.74956462 -3.9375 1.1875 C-2.9375 0.1875 -2.9375 0.1875 0 0 Z M-1.9375 3.1875 C-2.2675 4.1775 -2.5975 5.1675 -2.9375 6.1875 C-0.9575 6.1875 1.0225 6.1875 3.0625 6.1875 C2.7325 5.1975 2.4025 4.2075 2.0625 3.1875 C0.7425 3.1875 -0.5775 3.1875 -1.9375 3.1875 Z M-3.9375 8.1875 C-3.9375 9.5075 -3.9375 10.8275 -3.9375 12.1875 C-1.2975 12.1875 1.3425 12.1875 4.0625 12.1875 C4.0625 10.8675 4.0625 9.5475 4.0625 8.1875 C1.4225 8.1875 -1.2175 8.1875 -3.9375 8.1875 Z M-2.9375 14.1875 C-2.9375 20.7875 -2.9375 27.3875 -2.9375 34.1875 C-2.2775 34.1875 -1.6175 34.1875 -0.9375 34.1875 C-0.9375 32.2075 -0.9375 30.2275 -0.9375 28.1875 C-0.2775 28.1875 0.3825 28.1875 1.0625 28.1875 C1.0625 30.1675 1.0625 32.1475 1.0625 34.1875 C1.7225 34.1875 2.3825 34.1875 3.0625 34.1875 C3.0625 27.5875 3.0625 20.9875 3.0625 14.1875 C1.0825 14.1875 -0.8975 14.1875 -2.9375 14.1875 Z M-0.9375 37.1875 C-0.9375 37.8475 -0.9375 38.5075 -0.9375 39.1875 C-0.2775 39.1875 0.3825 39.1875 1.0625 39.1875 C1.0625 38.5275 1.0625 37.8675 1.0625 37.1875 C0.4025 37.1875 -0.2575 37.1875 -0.9375 37.1875 Z " fill="#000000" transform="translate(55.9375,12.8125)"/>
// <path d="M0 0 C3.96 0 7.92 0 12 0 C12 0.66 12 1.32 12 2 C8.04 2 4.08 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(13,35)"/>
// <path d="M0 0 C3.3 0 6.6 0 10 0 C10 0.66 10 1.32 10 2 C6.7 2 3.4 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(13,25)"/>
// <path d="M0 0 C2.31 0 4.62 0 7 0 C7 0.66 7 1.32 7 2 C4.69 2 2.38 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(13,30)"/>
// <path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C4.02 2 2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(28,35)"/>
// <path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C4.02 2 2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(23,30)"/>
// <path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C4.02 2 2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(26,25)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.65 2 3.3 2 5 C1.34 5 0.68 5 0 5 C0 3.35 0 1.7 0 0 Z " fill="#000000" transform="translate(55,33)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(37,50)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(32,50)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(27,50)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(22,50)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(17,50)"/>
// <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(12,50)"/>
// </svg>

// );

// export default Medal;


