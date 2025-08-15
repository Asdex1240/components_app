import React from 'react';
import { Text, TextProps, View } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

interface Props extends TextProps {
    className?: string;
    type?: TextType;
    
}

const ThemedText = ({ className, type, ...rest}: Props) => {
  // className='mt-10 text-3xl text-light-primary dark:text-dark-primary'
  return (
    <View>
      <Text
        className={[
          'text-light-primary dark:text-dark-primary',
          type === 'normal' ? 'font-normal' : undefined,
          type === 'h1' ? 'text-3xl font-bold' : undefined,
          type === 'h2' ? 'text-2xl font-bold' : undefined,
          type === 'semi-bold' ? 'font-semibold' : undefined,
          type === 'link' ? 'font-normal underline' : undefined,
          className
        ].join(' ')}
        {...rest}/>
    </View>
  )
}

export default ThemedText