import {ChatCircleDots} from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget(){
  return(
    <Popover className=" absolute bottom-3 right-3">
      <Popover.Panel >Hello Word</Popover.Panel>
      <Popover.Button className="bg-violet-500 px-3 h-12 rounded-full flex items-center text-white group">
        <ChatCircleDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>Feed Back</span>
      </Popover.Button>
    </Popover>
  );
}