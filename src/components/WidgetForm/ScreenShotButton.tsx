import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps{
  onScreenShotTook: (screenShot: string | null)=> void;
  screenShot: string | null;
}

export function ScreenShotButton({onScreenShotTook, screenShot}:ScreenShotButtonProps){
  const [isTakinScreenshot, setIsTakeScreenshot] = useState(false);
  async function handleTakeScreenshot(){
    setIsTakeScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenShotTook(base64Image);
    setIsTakeScreenshot(false);
  }
  if(screenShot){
    return (
    <button 
      className="p-1 w-10 h-10 flex justify-end items-end text-zinc-400 hover:text-zinc-100 rounded-md"
      style={{
        backgroundImage:`url()${screenShot})`
      }}
      onClick={()=>onScreenShotTook(null)}
    >
      <Trash weight="fill"/>
    </button>)
  }

  return (
    <button
      className="bg-zinc-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900"
      onClick={handleTakeScreenshot}
    >
      {isTakinScreenshot ? <Loading/>:<Camera className="text-zinc-100 w-6 h-6"/>}
    </button>
  )
}