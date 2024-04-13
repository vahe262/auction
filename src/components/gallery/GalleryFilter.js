import React, { useContext, useState } from 'react'
import { carNames } from '../../allLists'
import { Context } from '../../Context';

export default function GalleryFilter() {
    const $ = useContext(Context);
    const changing = e => {
        $.setSelect(true)
        $.realFilter(e.target.value)
        $.setCurrentPage(1)
    }

    return (
        <div className='filter_container'>
            <select onChange={changing}>
                <option selected disabled>Car Brand</option>
                {carNames.map(car => {
                    return <option key={car}>{car}</option>
                })}
            </select>
        </div>
    )
}