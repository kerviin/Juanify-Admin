import React from 'react'

export default function NewProduct() {
    return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>New Product</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active">New Product</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* jquery validation */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add a Product</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form role="form" id="quickForm">
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input type="text" name="Name" className="form-control" id="exampleInputEmail1" placeholder="Enter product name" />
                      </div>
                     <div className="form-group">
                        <label>Category</label>
                        <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} data-select2-id={1} tabIndex={-1} aria-hidden="true">
                            <option selected="selected" data-select2-id={3}>Apparel - Men Tees</option>
                            <option data-select2-id={30}>Apparel - Women Tees</option>
                            <option data-select2-id={31}>Footwear - Men</option>
                            <option data-select2-id={32}>Footwear - Women</option>
                        </select>
                        </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">SKU</label>
                        <input type="text" name="SKU" className="form-control" id="exampleInputPassword1" placeholder="Enter SKU" />
                      </div>
                   <div className="form-group">
                    <label htmlFor="exampleInputFile">Upload Picture</label>
                    <div className="input-group">
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>
                        <div className="input-group-append">
                        <span className="input-group-text" id>Upload</span>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6">
              </div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    )
}
