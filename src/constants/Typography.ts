import {TextStyle} from 'react-native'
import {Colors} from './Colors'

type TypographyType = 'Text' | 'Header' | 'Title'

export const Typography: Record<TypographyType, TextStyle> = {
  Text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.Black,
  },
  Header: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    fontWeight: 700,
    color: Colors.Black,
  },
  Title: {
    fontFamily: 'Inter-Regular',
    fontSize: 42,
    color: Colors.Black,
  },
}
