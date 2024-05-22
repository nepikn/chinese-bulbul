import { twMerge } from 'tailwind-merge';

export default {
  hamburgur: () => (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.379578"
        y1="2.8696"
        x2="24.3796"
        y2="2.8696"
        stroke="black"
        strokeWidth="4"
      />
      <line
        x1="0.379578"
        y1="20.8696"
        x2="24.3796"
        y2="20.8696"
        stroke="black"
        strokeWidth="4"
      />
      <line
        x1="0.379578"
        y1="11.8696"
        x2="15.6523"
        y2="11.8696"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  ),
  logo: ({ className = '' }) => (
    <div
      className={twMerge(
        'relative aspect-square w-full overflow-hidden bg-white',
        className,
      )}
    >
      <div className="absolute left-[19%] top-[22%] h-[68%] w-[78%] rounded-[50%] bg-black"></div>
      <div className="absolute left-[66%] top-[21%] h-[34%] w-[32%] bg-white"></div>
      <div className="absolute left-[47%] top-[22%] h-[27%] w-[30%] rounded-[50%] bg-black"></div>
      <div className="absolute left-[11%] top-[32%] aspect-square w-[94%] rounded-[50%] bg-white"></div>
      <div className="absolute left-[37%] top-[36%] aspect-square w-[42%] rounded-[50%] bg-black"></div>
      <div className="absolute left-[25%] top-[34%] h-[33%] w-[60%] -rotate-[12deg] rounded-[50%] bg-white"></div>
      <div className="absolute left-[19%] top-[67%] h-[11%] w-[38%] bg-black"></div>
      <div className="absolute left-[55%] top-[44%] aspect-square w-[12%] rounded-[50%] bg-black"></div>
      <div className="absolute left-[79%] top-[38%] h-[16%] w-[17%] -rotate-[1deg] rounded-r-[50%] bg-black"></div>
      <div className="absolute left-[79%] top-[46%] h-[14%] w-[19%] -rotate-[9deg] bg-white"></div>
    </div>
  ),
  logoSvg: () => (
    <svg
      width="39"
      height="35"
      viewBox="0 0 39 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full opacity-40"
    >
      <rect
        x="0.778931"
        y="0.628082"
        width="37.9807"
        height="33.483"
        fill="url(#pattern0_5_275)"
      />
      <defs>
        <pattern
          id="pattern0_5_275"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_5_275"
            transform="scale(0.0131579 0.0149254)"
          />
        </pattern>
        <image
          id="image0_5_275"
          width="76"
          height="67"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABDCAYAAAA2weP+AAAFoElEQVR4Ae2a+StlYRjH538yZIwlyVKMiJos0dhCGvyACL/IUkgzmGlikJKQLTGyJCF7IfODlCzZxr5mf6bvqaN7r+ve877n3HuP23nqdO655znnfd7Ped7ted53pAkTgXdM2poyacAYnUADpgFjJMCornmYBoyRAKO65mEaMEYCjOqah2nAGAkwqqvWwzY3N+nv3780MzNDIyMj1NvbS62trVRfX0+/f/+mpqYm6urqooGBAVpcXKSLiwvGqvOpqwbYyckJdXd3U2ZmJrm7u5ODgwPzERISQg0NDXR1dcVHQ8JTNgUGr6irq6OoqChmOKaAurm50c+fPyVUn13FJsCOjo7o+/fv5OrqqigoQ4ihoaG0trbGTsXEE1YFdnh4SKWlpfThwweLgjIEhz5QKbEasLa2NquDEsE5OzvT5OSkIswsDuzs7IxSU1Ot6lEiKN0z+rX9/X3Z0CwKbHZ2lnx9fW0OSwSXlJSkXmCVlZWqASUCwxlzNzliEQ8rKiqSBcvLy4tiY2MpIyODCgsL6cePH8JEta+vjyYmJmh6eprGxsZocHCQenp6hAltY2Mj/fr1i7KyssjHx+fV8v38/OTwUj5EjYmj7hc19/vLly9UXFxMzc3NAgj0M3d3d7KP9fV16uzspPz8/Bfdwr9//7ihKeph/f39kmBhEOjo6CBMM5SAI+Ud4+PjlJaWJti3sLBge2AYth0dHV8FlpiYKKz7MGpKqaCldNCk0Zx5RREPg6dg2DbW/KKjo2lqasqmkAzhY1GPpo9mu7W1RfiIUkURYOhoDWGFhYXR6OioqkAlJCRQQEDAC1thOwaar1+/Cn0plm6viWxgc3NzegagWdbW1tLt7a2qYMHLSkpK9Gw1/Mi61xUVFfTw8PCCmyxggPLp06dnIzCcY8g3bAJquUY8TReKud/oTk5PT/WgyQJWXV39bEBcXBzt7u6qFhY+2vz8/LO95mCJ9xGf0xVuYPf39+Ti4iIYgCXH9fW1xWGtrKxQQUEBRUZGUkREBCUnJ1NLS4vkcuEtIgiWM6K/onADGx4eFgr//PkzIVpq6WaHqYCTk5PRCmdnZ0suPzAw0Og7ABD9Lwar3NxcIXKLMnd2dkRWwpkbGIzEyLK9vS3ZWDlQEQw05RXt7e2S7BAnrxgt09PTqaqqiv78+UOrq6v09PSkB8fYBRewm5sb8vT0FPoEORCkPru8vGwSFkCi8lLehwjK8fGxMRaS/uMCNjQ0JNlAKZUwp4OJrynvwr34+HhJwFAW+l9e4QJWVlZG+OrmKqrUfaTazAHD0ktqeVYHhjCKVOOU0MOgYg7Yt2/fJNtkdWBInioBguUdpgKS3t7ewmgm9X1Y+/IKV5NcWlqyOjDAQCDRMOMUExMjZL6lwoIe5nO8wgzs8fGRzs/PbQIMlcUEGf0nPhqiDSygoIsRHjN+XmEGhvbPaqSa9LGetGoAESt4NQFgseXy8pLQ3x0cHPA6GHtMH02SxUi16O7t7VFwcDAFBQVxw8KDzE3yLQITYWFqUlNTowF7zYs3NjYoJyeH3r9//zyP04088JCzOw/D3jDME5GZMoxu5OXl8TDSe8ZugGEXIvKbCAoYWxV8/PhRCEPp1Z7j4s0BQ3+EHCMSxohbmQv7iPCQGVdCmIGhv0hJSRGiA4gQWPpAdBUjG/IFYoRXhCD1jIU5BislhAuYVEPVoBceHi6sDpSAhXfYNTB/f/8XWR+54OwWGGLzCJ8rLXYJDAlb5EwtIczAsJZUQ99kzAbs71ByA7Ax4HYBDDGy8vJyMrUnwljlef5708A8PDyE/RJyNsixQntzwLCXA96ETTDGNouwAmDVZwaGAjAJtOaBBKuUJCtr5Xn0uYDxFGQvz2jAGL+kBkwDxkiAUV3zMA0YIwFGdc3DNGCMBBjVNQ/TgDESYFT/Dwwv4onq+gTfAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  ),
  x: () => (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-2"
        x2="28.6924"
        y2="-2"
        transform="matrix(0.730323 0.683102 -0.702025 0.712152 0.379639 2.8696)"
        stroke="black"
        strokeWidth="4"
      />
      <line
        y1="-2"
        x2="28.0896"
        y2="-2"
        transform="matrix(0.716329 -0.697763 0.716329 0.697763 3.2583 22.4695)"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  ),
};
