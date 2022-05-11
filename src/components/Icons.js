import React from 'react'
import { Icon } from '@ui-kitten/components';


const Icons = () => {
  return (
    <></>
  )
}

export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);
  
export const SearchIcon = (props) => (
    <Icon {...props} name='search-outline'/>
);
  
export const SettingsIcon = (props) => (
    <Icon {...props} name='settings'/>
);

export const SmileIcon = (props) => (
    <Icon {...props} name='smiling-face-outline'/>
);

export const AttachmentIcon = (props) => (
    <Icon {...props} name='attach'/>
);

export const SendIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward-outline'/>
);

export const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical'/>
  );
export const DocIcon = (props) => (
    <Icon {...props} name='archive'/>
  );

export default Icons;