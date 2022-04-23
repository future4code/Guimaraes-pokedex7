import styled from "styled-components";


export const StylePagination = styled.div`
font-size: 1.5rem;

.pagination{
    display: flex;
    list-style: none;
    
}

.pagination li + li{
    margin-left: 1rem;
    background-color:#fff;
}
.pagination button{
    width: 30px;
    background-color:#000;
    color: #fff;
    font-weight: bold;
}
.pagination__item--active{
    font-weight: bold;
    background-color:#000;
    color: #fff;
}

.pagination__item--active{
    outline: none;
}

#button-prev, #button-next{
    background-color: #CC0000;
    width: 6rem;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;

}

`
