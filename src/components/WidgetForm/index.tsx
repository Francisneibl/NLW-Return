import thoughtImageUrl from '../../assets/images/Thought.svg';
import ideaImageUrl from '../../assets/images/Idea.svg';
import bugImageUrl from '../../assets/images/Bug.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedBAckContentStep } from "./Steps/FeedbackContentStep";
import { useState } from "react";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const STEPS = {
  BUG:{
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto"
    }
  },
  IDEA:{
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER:{
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento"
    }
  }
}

export type FeedBackType = keyof typeof STEPS;

export type FeedBackContentType = {
  message: string,
  imageSource: string,
}

export function WidgetForm(){
  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedBackSend, setFeedBackSend] = useState<boolean>(false);

  function restartFeedBackForm(){ 
    setFeedBackType(null);
    setFeedBackSend(false);
  }
  return (
    <div className="relative flex flex-col items-center bg-zinc-900  p-4 mb-4 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
    {feedBackSend ? (
    <FeedbackSuccessStep restartFeedBackForm={restartFeedBackForm}/>
    ):(
      <>
      {!feedBackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType}/>
      ):(
        <FeedBAckContentStep 
          feedBackType={feedBackType} 
          restartFeedBackForm={restartFeedBackForm}
          onFeedBackSend={()=>setFeedBackSend(true)}
        />
      )}
      </>
    )}
    </div>
  )
}