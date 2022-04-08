import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import styled from "styled-components";

export const GuardarCambios=styled.button`
width: 100px;
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: rgb(255, 255, 255);
    font-size: 16px;
    transition: 0.5s;
    line-height: 25px;
    text-align:center;
    &:hover{
        height: 20px;
    width: 500px;
    padding: 0 6px;
    }
    &:placeholder-shown{
        color: white;
    }

`;