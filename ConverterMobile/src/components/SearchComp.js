import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import { SearchBar, Icon, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SearchComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : '',
      isSearch : false,
      isLoading: false
    };
  }

  updateSearch = ({ search }) => {
    this.setState({
      isSearch : true,
      searchValue : search
    })
  }

  render() {
    let { search } = this.state;
    return (
      <View style={s.container}>
        <View style={s.topNav}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[s.iconNav] }>
              <Text>Jarak</Text>
            </View>
            <SearchBar
              round
              searchIcon={{ name:'search1', type:'antdesign', color:'#636e72', size:18 }}
              clearIcon={{ color: "#636e72" }}
              placeholder='Find Product'
              placeholderTextColor="#636e72"
              onChangeText={(text) => {
              this.updateSearch(text)
            }}
            value={this.state.searchValue}
            selectionColor='#b2bec3'
            containerStyle={s.searchCont}
            inputContainerStyle={s.inputSearchBar}
            inputStyle={{ color: "#636e72", fontSize: 14 }}
            />
            <View style={s.iconNav}>
              <TouchableNativeFeedback>
                <Icon 
                  name="heart"
                  type="feather"
                  color="#fafafa"
                  size={20}
                />
              </TouchableNativeFeedback>
            </View>
            <View style={s.iconNav}>
              <TouchableWithoutFeedback>
                <Icon
                    name="mail"
                    type="feather"
                    color="#fafafa"
                    size={20}
                  />
              </TouchableWithoutFeedback>
            </View>
            <View style={s.iconNav}>
              <TouchableWithoutFeedback>
                <Icon
                    name="bell"
                    type="feather"
                    color="#fafafa"
                    size={20}
                />
              </TouchableWithoutFeedback>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  topNav : {
    height: 50,
  },
  searchCont: {
    backgroundColor: "#0189f1",
    borderColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    width:'30%'
  },
  inputSearchBar: {
    backgroundColor: "#f5f6fa",
    width: '100%'
  },
  iconNav: {
    flex: 0.34,
    backgroundColor :'#0189f1',
    paddingTop : 18
  },
  sliderItem: {
    width: "90%",
    borderRadius: 15,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default SearchComp;
