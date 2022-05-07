import { FeedBackType, STEPS } from ".."
import {ButtonClose} from '../ButtonClose';
import { FormFooter } from "../FormFooter";


interface FeedBackTypeStepProps {
  onFeedBackTypeChanged: (type: FeedBackType) => void;
}

export function FeedbackTypeStep({onFeedBackTypeChanged}: FeedBackTypeStepProps){

  return (
    <>
      <header className="flex justify-center">
        <span className="text-zinc-100 leading-6 text-xl font-medium">Deixe seu feedback</span> 
        <ButtonClose/>
      </header>
      <div className="flex gap-2 py-8 max-w-[100%]">
      {Object.entries(STEPS).map(([key, content]) =>{
        return (
            <button 
              key={key}
              className="py-5 w-24 flex flex-1 flex-col items-center bg-zinc-800 rounded-lg gap-2"
              type="button"
              onClick={()=> onFeedBackTypeChanged(key as FeedBackType)}
            >
              <img src={content.image.source} alt={content.image.alt} />
              <span className="text-zinc-100 text-sm leading-6">{content.title}</span>
            </button>
            )
          })}
      </div>
      <FormFooter/>
    </>
  )
}