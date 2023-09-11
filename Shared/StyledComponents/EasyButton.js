import React from "react";
import styled, {css} from "styled-components";


const EasyButton = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    justify-content: center;
    background: transparent;
    borderWidth: 1px;
    borderColor: #B3B3B3;

    ${(props) =>
        props.primary && 
        css`
            background: #FDABE0;
        `
    }

    ${(props) =>
        props.secondary &&
        css`
            background: #B3B3B3;
        `
    }

    ${(props) => 
        props.danger &&
        css`
            background: #808080;
        `
    }

    ${(props) =>
        props.large &&
        css`
            width: 135px;
        `
    }

    ${(props) =>
        props.medium &&
        css`
            width: 100px;
        `
    }

    ${(props) =>
        props.small &&
        css`
            width: 40px;
        `
    }
`;

export default EasyButton

