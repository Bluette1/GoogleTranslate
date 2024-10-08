import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { supabase } from '~/utils/supabase';

const textToSpeech = async (text: string) => {
  const { data, error } = await supabase.functions.invoke('text-to-speech', {
    body: JSON.stringify({ input: text }),
  });

  if (data) {
    const { sound } = await Audio.Sound.createAsync({
      uri: `data:audio/mp3;base64,${data.mp3Base64}`,
    });
    sound.playAsync();
  }
};
