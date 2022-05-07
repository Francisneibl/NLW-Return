import { X } from 'phosphor-react'
import successIconUrl from '../../../assets/images/Emoji.svg'
import { ButtonClose } from '../ButtonClose'

interface FeedbackSuccessStepProps{
  restartFeedBackForm: ()=>void;
}

export function FeedbackSuccessStep({restartFeedBackForm}:FeedbackSuccessStepProps){
  return (
    <>
      <header className=" text-zinc-100 leading-6 text-xl font-medium flex justify-center">
        <ButtonClose/>
      </header>
      <div className='flex flex-col items-center gap-1 mb-5 mt-10'>
        <img className='w-10 h-10' src={successIconUrl} alt="ícone de tarefa pronta"/>
        <span className="text-zinc-100 text-[20px] leading-6 font-medium">Agradecemos o feedback!</span>
      </div>
      <button 
        onClick={restartFeedBackForm}
        className='bg-zinc-800 text-sm leading-6 font-medium text-zinc-100 rounded py-2 px-6 mb-8'
      >
        Quero enviar outro
      </button>
      <footer className="text-zinc-400">
        Feito com ♥ pela <a className="underline underline-offset-1" href="https://wwww.rocktseat.com.br">Rocketseat</a>
      </footer>
    </>
  )
}