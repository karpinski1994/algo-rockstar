import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className="p-5 mt-5 bg-dark text-light" >
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                    <p className="copyright">Copyright © 2023 <a className="link" href="https://rockstar-programmer.com/">Rockstar Programmer</a>.</p>
                </div>
            </div>
        </div >
    )
}

export default Footer