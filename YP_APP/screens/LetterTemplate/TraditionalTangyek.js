import { View,TextInput } from 'react-native'
import React, { useState } from 'react'
import TTFloatButton from '../../src/components/TraditionalTangyekFloatButton'

const TraditionalTangyek = () => {
  const [header,setHeader] = useState('༊ ཤེས་བྱ་ཀུན་གཟིགས་མི་རྗེ་ཤེས་རིག་བློན་པོ་རིན་པོ་ཆེའི་༢ ཞབས་དྲུང་ལུ།\n');
  const [content,setContent] = useState('ཤེས་བྱ་ཀུན་གཟིགས་མི་རྗེ་ཤེས་རིག་བློན་པོ་རིན་པོ་ཆེའི་༢ ཞབས་དྲུང་ལུ། \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
  return (
    <View>
      <View style={{padding:10}}>
     <TextInput autoCorrect={false} value={header} onChangeText ={(header)=>{setHeader(header)}}/>
     <TextInput autoCorrect={false}  multiline value={content} onChangeText ={(content)=>{setContent(content)}}/>
     </View>
      <TTFloatButton header={header} content={content}/>
    </View>
  )
}

export default TraditionalTangyek