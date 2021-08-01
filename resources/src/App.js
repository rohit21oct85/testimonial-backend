import React from "react";
import useTestimonials from "./hooks/useTestimonials";

function App() {
  const { data: testimonials } = useTestimonials(1);
  return (
    <main>

  <section class="py-2 text-center container">
    <div class="row py-lg-2">
      <div class="col-lg-12 col-md-8 mx-auto">
        <h1 class="fw-light">Add Testimonial</h1>
        <hr />
        <form>
          <div className="row col-md-12">
            <div className="form-group col-md-2 pr-0">
              <input type="text" placeholder="Enter Name" className="form-control"/>
            </div>
            <div className="form-group col-md-2">
              <input type="text" placeholder="Enter Post" className="form-control"/>
            </div>
            <div className="form-group col-md-4">
              <input type="text" placeholder="Enter Description" className="form-control"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {testimonials?.map((testimonial) => {
                return (
                  <>
                  <div class="col-3" key={testimonial?._id}>
                      <div class="card shadow-sm">
                        <img src={testimonial.photo} alt="Author"/>
                        <div class="card-body">
                          <h6 className="author-name">{testimonial.name}</h6>
                          <span className="sub-title"><b>{testimonial.post}</b></span>
                          <p class="card-text">
                            {testimonial.description.substr(0,100)}
                          </p>
                          
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
          )})}
        

      </div>
    </div>
  </div>

</main>

  );
}

export default App;
