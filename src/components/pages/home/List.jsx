import React, { useState } from "react";

export default function List ({data}) {
    // changer les attributs data en fonction des noms dans le json
    // utiliser map si liste 
    return(
        <>
            <table className="table table-striped bg-color-light">
                <thead>
                <tr>
                    <th className={'bg-dark text-white'}>Nom</th>
                    <th className={'bg-dark text-white'}>Catégories</th>
                    <th className={'bg-dark text-white'}>Genre</th>
                    <th className={'bg-dark text-white'}>Date</th>
                    <th className={'bg-dark text-white text-center'}>Link</th>
                </tr>
                </thead>

                <tbody>
                
                        
                            <tr className={"small hover-bg-color"}>
                                <td>{data.weight}</td>
                                <td>{data.base_experience}</td>
                                <td>{data.base_experience}</td>
                                <td>{data.base_experience} </td>
                                <td className={"text-center"}>
                                    <a href={data.url} download>
                                        <i className="fas fa-download ml-1 text-success cursor-pointer"></i>
                                    </a>
                                </td>
                            </tr>
                            <p>{data.weight}</p>
                </tbody>
            </table>
        </>
    )
} 
/*
{data['game_indices'].map((content)=>(<tr className={"small hover-bg-color"}>
                                <td>{content.game_index}</td>
                                <td>{content.game_index}</td>
                                <td>{content.version.name}</td>
                                <td>{content.version.url} Mo</td>
                                <td className={"text-center"}>
                                    <a href={data.url} download>
                                        <i className="fas fa-download ml-1 text-success cursor-pointer"></i>
                                    </a>
                                </td>
                            </tr>))}
*/