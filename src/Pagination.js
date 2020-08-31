import React from 'react';
import {Link} from "react-router-dom";

function Pagination(props) {
    return (
        <section className="Pagination">
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                    <tr>
                        {props.columns.map(col => (
                            <th key={col.id}>{col.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map(row => (
                        <tr key={row[props.keyName]}>
                            {Object.keys(row).map((val, k) => {
                                if (k > 0) {
                                    return (<td key={k}>{row[val]}</td>)
                                } else {
                                    return (
                                        <td><Link key={k} to={props.urlRef + row[props.keyName]}>{row[val]}</Link></td>)
                                }
                            })
                            }
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        {props.columns.map(col => (
                            <th key={col.id}>{col.title}</th>
                        ))}
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div className="row">
                <div className="col-10">
                    Total Records {props.totalRecords}
                    Total Records {props.totalPages}
                </div>
            </div>

        </section>
    );
}

export default Pagination;
