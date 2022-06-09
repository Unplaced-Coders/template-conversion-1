 const Card = ({cardTitle,cardDescription,btnText}) => {
     return (
        <div className="col-4">
        <div className="card" style={{width: "18rem"}}>
          <img
            src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">
              {cardDescription}
            </p>
            <a href="#" className="btn btn-success">{btnText}</a>
          </div>
        </div>
      </div>
     )
 }
 export default Card;