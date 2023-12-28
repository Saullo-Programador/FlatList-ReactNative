import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { Coffee, coffeeList } from './src/Data/List';
import { CoffeeItem } from './src/Components/CoffeeItem';
import { CoffeeHeader } from './src/Components/CoffeeHeader/CoffeeHeader';
import { SeparatorItem } from './src/Components/SeparatorItem/SeparatorItem';

export default function App() {

  function renderItem({item} : ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item}/>
  }

  return (
      <FlatList
        ItemSeparatorComponent={SeparatorItem}
        ListHeaderComponent={CoffeeHeader}
        keyExtractor={(item) => item.name}
        data={coffeeList}
        renderItem={renderItem}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
