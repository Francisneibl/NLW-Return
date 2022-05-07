import {ChatCircleDots} from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget(){
  return(
    <Popover className=" absolute bottom-4 right-4 flex items-end flex-col md:bottom-8 md:ring-10">
      <Popover.Panel><WidgetForm/></Popover.Panel>
      <Popover.Button className="bg-violet-500 px-3 h-12 rounded-full flex items-center text-white group">
        <ChatCircleDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>Feed Back</span>
      </Popover.Button>
    </Popover>
  );
}