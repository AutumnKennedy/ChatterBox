import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import Style from './Style';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <SafeAreaProvider style={Style.container}>
            <Searchbar style={Style.searchBar}
                placeholder="Search Messages"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
        </SafeAreaProvider>
    );
}