import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBarComponent = ({searchQuery, setSearchQuery}: SearchBarProps) => {
  return (
    <Searchbar
      placeholder="Search by label or coordinates"
      value={searchQuery}
      icon={() => <Icon name="magnify" size={24} />}
      clearIcon={() => <Icon name="close" size={24} />}
      onChangeText={setSearchQuery}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    borderRadius: 8,
  },
});

export default SearchBarComponent;
