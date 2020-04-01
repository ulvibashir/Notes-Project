import React from 'react'
import styled from 'styled-components';
export function Loader() {
    return (
        <Container>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px
`