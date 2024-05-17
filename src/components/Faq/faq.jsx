import { useState } from "react"

export default function Faq({ title, pass }) {
     const [active, setActive] = useState(false);
     return (
          <li className="border-y border-black/15 overflow-hidden">
               <button onClick={() => { setActive(!active) }} className={`w-full flex items-center justify-between py-5 px-6 ${active ? 'bg-green-20' : 'bg-green-20/0'}`}>
                    <span className="font-bold text-xl">{title}</span>
                    <span className="text-black-80 w-8 h-8">
                         <svg className={`${active ? 'rotate-180' : 'rotate-0'}`} width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
                         </svg>
                    </span>
               </button>
               <p className={`${active ? 'max-h-96 py-5' : 'max-h-0'} px-6`}>{pass}</p>
          </li>
     )
}