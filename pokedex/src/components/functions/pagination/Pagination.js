import React from 'react'

const max_Items = 9;
const max_Left = (max_Items - 1) / 2;

export const Pagination = ({ limit, total, offSet, setOffset }) => {

    const currentPage = offSet ? offSet / limit + 1 : 1;
    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - max_Left, 1)


    return (

        <ul>
            {Array.from({ length: max_Items })
                .map((_, index) => index + firstPage)
                .map((page) => (
                    <li>
                        <button onClick={()=>setOffset((page -1) * limit)}
                        >
                            {page}</button>
                    </li>
                )
                )}
        </ul>
    )
}


<div className="container-button ">
    <button className="btn btn-danger" >Anterior</button>
    <button className="btn btn-danger" >Próxima</button>
</div>
