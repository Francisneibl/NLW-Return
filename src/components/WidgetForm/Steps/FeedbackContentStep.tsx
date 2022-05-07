import { ArrowLeft, Camera, X } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackContentType, FeedBackType, STEPS } from "..";
import { ButtonClose } from "../ButtonClose";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedBAckContentStepProps {
  feedBackType: FeedBackType;
  restartFeedBackForm: ()=>void;
  onFeedBackSend: ()=>void;
}

export function FeedBAckContentStep({feedBackType, restartFeedBackForm, onFeedBackSend}: FeedBAckContentStepProps){
  const feedBackTypeInfo = STEPS[feedBackType];
  const [feedBackText, setFeedBackText] = useState<string>('');
  const [screenShot, setScreenShot] = useState<string | null>('');

  function handleSubmitFeedBack(event:FormEvent){
    event.preventDefault();
    console.log({
      feedBackText,
      screenShot
    });
    onFeedBackSend();
  }
  return (
    <>
      <header className="text-zinc-100 leading-6 text-xl font-medium flex justify-center">
        <button 
          className="absolute left-5 top-5"
          onClick={restartFeedBackForm}
        >
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <div className="flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="h-6 w-6"/>
          {feedBackTypeInfo.title}
        </div>
        <ButtonClose/>
      </header>

      <form onSubmit={handleSubmitFeedBack} className="my-4 w-full">
        <textarea 
          className="rounded-md my-2 border-zinc-600 text-sm text-zinc-100 placeholder-zinc-400 p-2 bg-transparent w-[100%]  md:min-w-[304px] w-full min-h-[112px]  focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          onChange={(evt)=>setFeedBackText(evt.target.value)}
        />
        <div className="flex items-center gap-2 w-full mb-4">
          <ScreenShotButton 
            screenShot={screenShot}
            onScreenShotTook={setScreenShot}
          />
          <button 
            disabled={feedBackText.length === 0}
            className="bg-brand-500 flex-1 text-zinc-100 text-sm leading-6 font-medium px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900 hover:bg-brand-300 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          > 
            Enviar feedback
          </button>
        </div>
      </form>


      <footer className="text-zinc-400">
        Feito com ♥ pela <a className="underline underline-offset-1" href="https://wwww.rocktseat.com.br">Rocketseat</a>
      </footer>

    </>
  );
}