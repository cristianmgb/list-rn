import React, {Component} from 'react'; 
import {Alert} from 'react-native';
import Menu from '../components/menuOptions';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 1,
          title: 'You',
          color: '#FF4500',
          image: 'https://img.icons8.com/color/70/000000/name.png',
        },
        {
          id: 2,
          title: 'Home',
          color: '#87CEEB',
          image: 'https://img.icons8.com/office/70/000000/home-page.png',
        },
        {
          id: 3,
          title: 'Love',
          color: '#4682B4',
          image: 'https://img.icons8.com/color/70/000000/two-hearts.png',
        },
        {
          id: 4,
          title: 'Family',
          color: '#6A5ACD',
          image: 'https://img.icons8.com/color/70/000000/family.png',
        },
        {
          id: 5,
          title: 'Friends',
          color: '#FF69B4',
          image: 'https://img.icons8.com/color/70/000000/groups.png',
        },
        {
          id: 6,
          title: 'School',
          color: '#00BFFF',
          image: 'https://img.icons8.com/color/70/000000/classroom.png',
        },
        {
          id: 7,
          title: 'Things',
          color: '#00FFFF',
          image: 'https://img.icons8.com/dusk/70/000000/checklist.png',
        },
        {
          id: 8,
          title: 'World',
          color: '#20B2AA',
          image: 'https://img.icons8.com/dusk/70/000000/globe-earth.png',
        },
        {
          id: 9,
          title: 'Remember',
          color: '#191970',
          image: 'https://img.icons8.com/color/70/000000/to-do.png',
        },
        {
          id: 10,
          title: 'Game',
          color: '#008080',
          image: 'https://img.icons8.com/color/70/000000/basketball.png',
        },
      ],
    };
  }

  click(title) {
    Alert.alert(title);
  }

  render() {
    return <Menu data={this.state.menu} click={this.click} />;
  }
}

export default MenuContainer;
