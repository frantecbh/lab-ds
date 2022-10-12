import { Text, TextProps  } from "./Text";
import {Meta, StoryObj} from '@storybook/react'


export default {
  title: 'Components/Text',
  component: Text,
  args:{
    children: 'Default text',
    size: 'md'
  },
  argTypes:{
    size:{
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}as Meta<TextProps>


export const Defaut: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {

  args:{
    size: 'sm'
  }

}

export const Large: StoryObj<TextProps> = {

  args:{
    size: 'lg'
  }

}

export const CustonComponent : StoryObj<TextProps> = {

  args:{
   asChild: true,
   children: (
    <p>Text with P tag</p>
   )
  },
  argTypes:{
    children:{
      table: {
        disable: true
      }
    },
    asChild:{
      table:{
        disable: true
      }
    }
  }

}