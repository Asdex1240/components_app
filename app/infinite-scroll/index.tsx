import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 5}, (_, i) => numbers.length + i)
    
    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 1000)
  
  }

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={primaryColor}/>
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number,

}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage 
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ width: '100%', height: 400, marginBottom: 20 }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{ width: '100%', height: 400 }}
    // />
  );
}