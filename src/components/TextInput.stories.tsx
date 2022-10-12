
import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope} from 'phosphor-react'


export default {
  title: 'Components/TextIntput',
  component: TextInput.Root,
  args:{
      children: (
        <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
         <TextInput.Input placeholder="Insira seu melhor e-mail" />
        </>
       
        ) 


  
  },
argTypes:{
  children:{
    table: {
      disable: true
    }
  },
}
}as Meta<TextInputRootProps>


export const Defaut: StoryObj<TextInputRootProps> = {}



export const WithoutIcon: StoryObj<TextInputRootProps> = {


  args:{
    children: (

      <TextInput.Input placeholder="Insira seu melhor e-mail" />
 
    
     ) 
  }


}

