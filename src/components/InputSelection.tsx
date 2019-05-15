import React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import fonts from '../fonts';

const Input = styled.input`
    // Nothing yet
    // have to change the default checkbox image
`
const Label = styled.label`
    ${fonts.optionLabel}
    color: ${colors.option}    
`

const SmallWrapper = styled.div`
    margin: 15px;
`
const BigWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const getTaggedOptions = (options, name, right, radio) => (
    options.map((option, index) => (
        <SmallWrapper>        
            {right ? <Label for={option}>{option}</Label> : ""}
            <Input name={name}  id={option} value={option} type={radio ? 'radio' : 'checkbox'}/>
            {right ? "" : <Label for={option}>{option}</Label>}
        </SmallWrapper>
    ))
)

export default ({options=['option1'], name='group1', right=false, radio=false}) => 
    <BigWrapper>{getTaggedOptions(options, name, right, radio)}</BigWrapper>