import styled from 'styled-components';

export const Container = styled.div`
padding: 0 15px 0 15px;
`;

export const Title = styled.h2`
font-weight: bold;
font-size: 30px;
`;

export const List = styled.ul`
`;

export const Item = styled.li`
&:not(:last-child){
    margin-bottom: 5px;
};
`;