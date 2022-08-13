import React from 'react';

const CentersTab = ({ arialabelledby, classess, id, role, tabindex })=>{
    return (
        <div  className={`container ${classess}`}
        id={id}
        aria-labelledby={arialabelledby}
        role={role}
        tabIndex={tabindex} >
            <table id="example" className="table data-table  table-dark table-striped" style={{width:'90%'}} >
                    <thead className='bg-light'>
                        <tr className='bg-light'>
                            <th className='bg-light text-dark' colSpan="4" scope="row">
                                <div className="search-box">
                                    <div className="input">
                                        <input type="text" placeholder="بحث"/>
                                    </div>
                                    <div className="icon bg-dark">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </th>
                        </tr>
                       
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>جيزان</td>
                            <td>جيزان</td>
                            <td>بلدية جيزان</td>
                            <td>جيزان</td>
                        </tr>
                        <tr>
                         <td>جيزان</td>
                            <td>الفطيحه</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>جيزان</td>
                            <td>الشبيكات</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>جيزان</td>
                            <td>الكحلي</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='bg-light text-dark' colSpan="4" scope="row">
                                <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                    </li>
                                </ul>
                                </nav>
                            </td>
                        </tr>
                    </tfoot>
            </table>
        </div>
    );
}

export default CentersTab;