import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, User, UserName, OrderCount } from './styles';
import logo from '~/assets/logo-gympoint.svg';
import colors from '~/styles/colors';

export default function Header() {
  const dispatch = useDispatch();
  const helpOrderCount = useSelector(state => state.helporders.orders.length);
  const user = useSelector(state => state.user);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (window.location.pathname === '/students') {
      setActive('students');
    }
  }, []);

  function handleActive(pathName) {
    setActive(pathName);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <Link to="/students">
          <img src={logo} alt="GymPoint" />
        </Link>

        <ul>
          <li>
            <Link
              to="/students"
              style={{ color: active === 'students' && colors.blackIsh }}
              onClick={() => handleActive('students')}
            >
              Alunos
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              style={{ color: active === 'plans' && colors.blackIsh }}
              onClick={() => handleActive('plans')}
            >
              Planos
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              style={{ color: active === 'registration' && colors.blackIsh }}
              onClick={() => handleActive('registration')}
            >
              Matrículas
            </Link>
          </li>
          <li>
            <Link
              to="/help-orders"
              style={{ color: active === 'helpOrders' && colors.blackIsh }}
              onClick={() => handleActive('helpOrders')}
            >
              Pedidos de Auxílio
            </Link>
            {helpOrderCount > 0 && <OrderCount />}
          </li>
        </ul>
      </nav>

      <User>
        <UserName>{user.name}</UserName>

        <button type="button" alt="Sair do Sistema" onClick={handleSignOut}>
          Sair do Sistema
        </button>
      </User>
    </Container>
  );
}
