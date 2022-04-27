import React from 'react';
import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const StyledListItem = styled.li`
`;

type CatListProps = {
    cats: {
        id: string,
        created: string,
        tags: string[]
    }[]
}

function CatList({cats}: CatListProps) {

    return (
       <>
           <StyledList>
              {cats.length > 0 &&
                cats.map(cat => (
                    <StyledListItem key={cat.id}>
                        <img src={`https://cataas.com/cat/${cat.id}`} alt="cat"/>
                    </StyledListItem>
                ))
              }
           </StyledList>
       </>
    );
}

export default CatList;