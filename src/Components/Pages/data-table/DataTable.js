import React from "react";
import { Fragment } from "react";
import "./DataTable.css";


const DataTable = () => {
    return (
        <Fragment>
            <table id="example" className="table data-table" style={{width:'90%'}} >
                    <thead>
                        <tr>
                            <th colSpan="4" scope="row">
                                <div className="search-box">
                                    <div className="input">
                                        <input type="text" placeholder="بحث"/>
                                    </div>
                                    <div className="icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>كود التجمع السكاني</th>
                            <th>التجمع السكاني</th>
                            <th>البلدية</th>
                            <th>مركز</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>جيزان</td>
                            <td>بلدية جيزان</td>
                            <td>جيزان</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>الفطيحه</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>الشبيكات</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>الكحلي</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>الرجفه</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>دوله</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>الملقا</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>جبجب</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>ظهره بن ماجور</td>
                            <td>بلدية جيزان</td>
                            <td>مركز الفطيحه</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" scope="row">
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
        </Fragment>
    );
}

export default DataTable;