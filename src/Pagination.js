import React from 'react';

function Pagination(props) {
    return (
        <section className="Pagination">
            <table className="table table-striped table-bordered table-hover">
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
                                return (<td key={k}>{row[val]}</td>)
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
