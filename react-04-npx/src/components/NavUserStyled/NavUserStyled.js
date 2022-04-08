import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import styled from "styled-components";

export const NavUserStyled=styled.li `
    padding: 10px;
    width: 100%;
    justify-content:center;
    cursor: pointer;
    text-align: center;
    transition: all .2s ease-in-out;
    border-left: rgba(0, 0, 0, .2);
    border-right: rgba(0, 0, 0, .2);
    color: black;
    &:hover,:active{
        box-shadow: 0px -3px 0px rgba(255, 188, 86, 0.9) inset;
    }
`