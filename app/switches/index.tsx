import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: false,
    isHumgry: false,
    isHappy: false
  });


  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        <ThemedSwitch
          text='Activo'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-2'
        />

        <ThemedSwitch
          text='Hambriento'
          value={state.isHumgry}
          onValueChange={(value) => setState({ ...state, isHumgry: value })}
          className='mb-2'
        />

        <ThemedSwitch
          text='Contento'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-2'
        />
      </ThemedCard>
        
    </ThemedView>
  );
};
export default Switches;
