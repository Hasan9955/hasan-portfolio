


const Navbar = () => {

    const links = <>
    <li><a href="/">Home</a></li>
    <li><a href="#skill">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#education">Education</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <svg
                    className="looka-1j8o68f"
                    height="43.08038283220664"
                    viewBox="0 0 355 78.42838925863259"
                    width="195.00000000000003"
                >
                    <defs id="SvgjsDefs1879" />
                    <g 
                        fill="#f8b500"
                        id="SvgjsG1880"
                        transform="matrix(0.15089472388553915,0,0,0.15089472388553915,-3.1225161588752504,-7.596686266471606)"
                    >
                        <metadata xmlns="http://www.w3.org/2000/svg">
                            Created by potrace 1.14, written by Peter Selinger 2001-2017
                        </metadata>
                        <g
                            fill="#f8b500"
                            stroke="none"
                            transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3160 5494 c-413 -40 -538 -58 -1080 -155 -155 -28 -278 -43 -395 -50 -93 -6 -180 -14 -193 -20 -60 -24 -71 -138 -43 -444 30 -320 43 -400 117 -725 123 -538 223 -920 259 -995 31 -64 95 -145 114 -145 4 0 7 69 7 153 l-1 152 -107 325 c-219 667 -274 863 -318 1130 -37 217 -49 440 -28 480 l14 25 149 -3 c114 -3 223 4 450 27 611 62 636 63 949 62 323 -2 380 -8 585 -61 132 -35 148 -36 177 -12 36 29 51 64 53 123 3 86 -10 96 -144 114 -109 15 -478 27 -565 19z" />
                            <path d="M4148 5382 c-76 -39 -361 -236 -506 -349 -170 -133 -958 -880 -1028 -976 -40 -54 -84 -150 -84 -182 0 -17 16 -20 25 -5 3 5 38 25 78 43 110 52 170 105 368 327 266 298 500 549 635 680 252 245 578 477 637 454 7 -2 44 -64 83 -137 43 -78 131 -214 218 -334 211 -293 458 -646 481 -690 11 -21 66 -122 122 -224 114 -206 139 -266 189 -449 19 -69 43 -133 53 -143 41 -42 138 -29 199 26 31 29 28 56 -19 165 -151 353 -337 629 -790 1172 -303 363 -324 390 -409 525 -34 55 -72 108 -84 117 -34 28 -87 22 -168 -20z" />
                            <path d="M1182 4845 c-69 -78 -232 -321 -287 -428 -134 -257 -244 -526 -449 -1092 -42 -115 -115 -290 -163 -387 -98 -202 -98 -206 -19 -274 45 -39 299 -167 522 -262 239 -102 1292 -421 1444 -437 100 -11 240 21 184 41 -10 4 -39 23 -64 42 -100 76 -163 96 -540 176 -636 134 -854 189 -1060 264 -304 111 -479 200 -495 251 -4 14 17 56 71 142 45 73 114 207 169 328 270 601 329 722 482 975 140 233 165 266 303 410 101 106 110 118 110 153 -1 51 -16 76 -70 112 -64 43 -90 41 -138 -14z" />
                            <path d="M3692 3829 c-90 -15 -90 -20 0 -78 132 -87 164 -97 535 -176 668 -141 871 -192 1108 -281 262 -98 455 -200 455 -242 0 -10 -32 -69 -72 -132 -39 -63 -107 -194 -151 -290 -323 -714 -342 -753 -510 -1030 -131 -217 -174 -274 -324 -431 -87 -90 -94 -105 -72 -167 13 -39 93 -92 137 -92 27 0 39 9 77 58 95 119 244 352 302 472 149 305 205 442 389 950 80 218 139 364 195 473 43 87 79 170 79 184 0 51 -82 114 -262 201 -353 173 -466 215 -1008 377 -657 197 -766 222 -878 204z" />
                            <path d="M2881 3290 c-65 -23 -101 -46 -101 -63 0 -7 -22 -29 -49 -50 -64 -47 -98 -106 -118 -203 -14 -70 -14 -80 1 -111 9 -18 16 -44 16 -57 0 -56 32 -126 81 -180 59 -65 105 -95 151 -101 18 -2 60 -13 93 -25 70 -26 133 -22 217 11 75 29 218 175 241 245 27 81 32 159 13 188 -9 14 -16 38 -16 54 0 16 -7 49 -16 75 -28 81 -148 197 -204 197 -15 0 -47 9 -71 20 -58 26 -165 26 -238 0z" />
                            <path d="M4095 2688 l1 -153 106 -320 c102 -308 214 -669 257 -825 74 -273 124 -709 91 -796 l-11 -27 -147 6 c-116 5 -196 1 -382 -18 -711 -72 -676 -70 -1020 -67 -345 2 -354 3 -582 59 -140 35 -147 36 -172 20 -38 -25 -57 -60 -62 -115 -6 -62 8 -100 42 -112 42 -16 329 -41 474 -41 284 0 564 34 1227 152 211 37 325 52 449 58 192 11 209 18 232 92 22 72 2 407 -43 719 -18 123 -125 591 -230 1010 -79 313 -112 400 -179 473 -19 20 -39 37 -43 37 -4 0 -8 -69 -8 -152z" />
                            <path d="M466 2402 c-68 -39 -74 -57 -46 -134 41 -114 167 -366 234 -467 176 -269 310 -443 710 -920 101 -121 212 -266 256 -335 43 -67 87 -131 98 -143 33 -35 92 -31 177 13 110 56 477 317 610 434 194 171 844 793 908 869 46 56 86 134 94 187 6 37 5 38 -13 23 -10 -8 -59 -34 -107 -58 -107 -52 -149 -91 -446 -424 -117 -130 -289 -319 -384 -419 -316 -334 -728 -646 -793 -601 -6 5 -42 66 -81 138 -40 74 -132 216 -214 330 -183 253 -392 551 -446 635 -22 36 -92 160 -156 275 -113 208 -167 341 -207 513 -17 74 -44 103 -100 108 -36 3 -55 -2 -94 -24z" />
                        </g>
                    </g>
                    <g 
                        fill="#393e46"
                        id="SvgjsG1881"
                        transform="matrix(1.6299386624156678,0,0,1.6299386624156678,104.47841959110926,-3.5592608401267327)"
                    >
                        <path d="M0.32 12 l6.96 0 l0 9.24 l-1.48 0 l0 -7.76 l-4.04 0 l0 25.04 l4.04 0 l0 -7.72 l1.48 0 l0 9.2 l-6.96 0 l0 -28 z M3.08 14.64 l1.44 0 l0 7.84 l12.2 0 l0 -10.48 l1.4 0 l0 11.88 l-15.04 0 l0 -9.24 z M22.4 13.48 l-1.36 0 l0 10.52 l-1.44 0 l0 -12 l4.2 0 l0 28 l-1.4 0 l0 -26.52 z M16.72 29.52 l-12.2 0 l0 8.04 l-1.48 0 l0 -9.52 l15.08 0 l0 10.48 l1.48 0 l0 -11.8 l-16.56 0 l0 -1.4 l18 0 l0 14.68 l-4.32 0 l0 -10.48 z M35.605000000000004 37.52 l1.76 0 l1.4 -3.36 l10.44 0.04 l2.56 5.8 l7.36 -0.04 l-12.6 -27.96 l-2.56 0 l-12.52 27.96 l7.8 0 l1.36 -3.2 l7.96 0 l-0.6 -1.36 l-8.24 0 l-1.28 3.16 l-4.76 0 l11.08 -25.2 l0.96 0 l11.12 25.2 l-4.24 0 l-2.56 -5.72 l-12.4 0 z M40.365 30.48 l4.88 -11.64 l8.2 18.64 l1.64 0 l-9.84 -21.92 l-7.2 16.16 l11.6 0 l-4.4 -9.72 l-3.04 7.32 l1.56 0 l1.48 -3.64 l2.2 4.8 l-7.08 0 z M72.49000000000001 33.4 c1.96 0.88 3.68 1.32 5.12 1.32 c0.72 0 1.16 -0.04 1.36 -0.16 c0.92 -0.24 1.56 -0.76 1.96 -1.56 l0.04 -0.08 c0.2 -0.36 0.28 -0.8 0.28 -1.36 c0 -0.28 -0.08 -0.6 -0.24 -1 l-0.08 -0.16 c-0.52 -1.08 -1.68 -1.8 -3.8 -2.48 l-0.4 -0.12 l-0.12 -0.04 c-3.24 -0.96 -5.32 -2.48 -6.32 -4.6 c-0.4 -0.8 -0.6 -1.68 -0.6 -2.64 c0 -1 0.2 -1.96 0.6 -2.96 l0.08 -0.16 c0.92 -1.84 2.4 -3.04 4.36 -3.64 c1.4 -0.2 2.2 -0.32 2.4 -0.32 c2.72 0 5.88 1.12 9.44 3.32 l0.76 -1.24 c-3.88 -2.36 -7.24 -3.52 -10.16 -3.52 c-1.16 0 -2.12 0.12 -2.8 0.4 c-2.36 0.64 -4.12 2.08 -5.28 4.36 l-0.12 0.28 c-0.48 1.16 -0.72 2.32 -0.72 3.48 c0 1.24 0.24 2.32 0.72 3.28 c1.24 2.48 3.64 4.24 7.24 5.32 l0.48 0.16 c1.64 0.52 2.6 1.08 2.96 1.72 l0.04 0.08 c0.08 0.12 0.12 0.28 0.12 0.48 c0 0.36 -0.04 0.6 -0.16 0.8 c-0.28 0.64 -0.96 0.96 -2.04 0.96 c-1.72 0 -4.2 -0.88 -6.12 -2.12 l-0.6 -0.36 l-3.52 5.68 l0.6 0.36 c2.84 1.92 6.6 3.12 9.64 3.12 c1 0 1.92 -0.12 2.76 -0.36 c2.36 -0.68 4.12 -2.16 5.28 -4.4 l0.16 -0.28 c0.48 -1.24 0.72 -2.4 0.72 -3.48 c0 -0.96 -0.32 -2.16 -0.92 -3.64 c-1.08 -2.16 -3.36 -3.8 -6.92 -4.92 l-0.56 -0.16 c-1.12 -0.36 -1.88 -0.72 -2.24 -1 c-0.48 -0.4 -0.76 -0.68 -0.88 -0.84 l-0.08 -0.44 c0 -0.4 0.08 -0.76 0.28 -1.04 c0.32 -0.6 0.64 -0.76 1.92 -0.76 c1.72 0 4.2 0.88 6.12 2.12 l0.6 0.36 l2.16 -3.44 l-0.64 -0.36 c-2.44 -1.6 -5.76 -2.72 -8.2 -2.72 c-1.08 0 -1.76 0.08 -2.12 0.28 c-1.64 0.48 -2.88 1.52 -3.68 3.08 c-0.36 0.68 -0.52 1.48 -0.52 2.48 c0 0.76 0.16 1.48 0.48 2.16 c0.84 1.8 2.72 3.12 5.64 4 l0.52 0.16 l1.08 0.4 c0.6 0.24 1.24 0.56 1.96 0.96 c1.28 0.76 1.92 1.84 1.92 3.28 c0 0.8 -0.2 1.56 -0.56 2.24 c-0.84 1.48 -2.28 2.24 -4.28 2.24 c-1.36 0 -3.28 -0.52 -5.76 -1.52 l-0.68 1.16 l-0.04 0.08 c2.28 1.16 4.44 1.72 6.52 1.72 c1.16 0 2.24 -0.24 3.2 -0.72 c1.88 -0.92 3.04 -2.84 3.04 -5.24 c0 -3.8 -2.92 -4.92 -6 -6 l-0.52 -0.16 c-2.52 -0.76 -4.08 -1.8 -4.72 -3.2 c-0.24 -0.48 -0.36 -1 -0.36 -1.6 c0 -0.76 0.12 -1.36 0.4 -1.88 c0.64 -1.16 1.56 -1.92 2.76 -2.28 l1.6 -0.2 c2.12 0 4.44 0.72 6.96 2.12 l-0.64 1 c-2.6 -1.28 -4.68 -1.92 -6.2 -1.92 c-0.76 0 -1.2 0.04 -1.4 0.16 c-0.88 0.24 -1.52 0.76 -1.96 1.6 l-0.04 0.08 c-0.2 0.36 -0.28 0.84 -0.28 1.44 c0 0.44 0.08 0.76 0.2 0.96 c0.52 1.08 1.88 1.96 4.04 2.6 l0.52 0.16 l1 0.32 c0.12 0.04 0.76 0.32 1.92 0.88 c1.56 0.88 2.68 2 3.32 3.32 c0.4 0.8 0.6 1.68 0.6 2.64 c0 1.16 -0.2 2.16 -0.64 3 l-0.08 0.16 c-0.92 1.84 -2.4 3.04 -4.36 3.64 c-1.4 0.2 -2.2 0.32 -2.4 0.32 c-2.04 0 -4.68 -0.76 -7.12 -1.92 l-1.12 -0.6 l2 -3.24 z M98.935 37.52 l1.76 0 l1.4 -3.36 l10.44 0.04 l2.56 5.8 l7.36 -0.04 l-12.6 -27.96 l-2.56 0 l-12.52 27.96 l7.8 0 l1.36 -3.2 l7.96 0 l-0.6 -1.36 l-8.24 0 l-1.28 3.16 l-4.76 0 l11.08 -25.2 l0.96 0 l11.12 25.2 l-4.24 0 l-2.56 -5.72 l-12.4 0 z M103.69500000000001 30.48 l4.88 -11.64 l8.2 18.64 l1.64 0 l-9.84 -21.92 l-7.2 16.16 l11.6 0 l-4.4 -9.72 l-3.04 7.32 l1.56 0 l1.48 -3.64 l2.2 4.8 l-7.08 0 z M149.5 28.6 l-16.36 -16.6 l-2 0 l19.8 20.12 l0 -17.32 l-1.44 0 l0 13.8 z M148.18 25.4 l0 -12 l4.08 0 l0 25.16 l-0.68 0 l-0.16 -0.16 l-18.32 -18.56 l0 20.16 l4.2 0 l0 -11.8 l-1.48 -1.52 l0 11.88 l-1.28 0 l0 -15.2 l16.6 16.64 l2.56 0 l0 -28 l-6.96 0 l0 11.84 z M131.78 40 l0 -23.4 l19.16 19.44 l0 -2.12 l-20.56 -20.76 l0 26.84 l1.4 0 z" />
                    </g>
                </svg>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-none text-white"><a download={true} href="https://drive.google.com/file/d/1bpqdp9BSDh23P0omzbiJfhNBNABp5UKI/view?usp=sharing">Download CV</a></button>
            </div>
        </div>
    );
};

export default Navbar;