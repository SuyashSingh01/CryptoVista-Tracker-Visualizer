import * as React from 'react';

function Section2({ source, description, heading }) {
  return (
    <>
      <div className="card w-96 glass shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={source} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{heading}</h2>
          <p className='text-xl'>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">learn more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;