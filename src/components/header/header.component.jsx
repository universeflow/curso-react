import React  from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

// recurso que se permite manejar como componente
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo'></Logo>
        </Link>

    </div>
);

export default Header;