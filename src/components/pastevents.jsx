import PropTypes from 'prop-types'

const eventRound = [
    {
      photoName: " Pic/section5.jpg",
      message: "Round 1: Written category with 120 participants (Basic Qualiifier)",
    },
    {
      photoName: "Pic/section1.jpg",
      message:
        "Round 2: 30 Participants competed against each other in 3 Families (Test of Team Effort)",
    },
    {
      photoName: "Pic/section2.jpg",
      message: "Round 3: 10 Finalists from the winning family compete amongst themselves to win the ultimate prize ",
    },
  ];

  function PastEvent(){
    return(
        <EventUl/>
    )
  };
  
  function EventUl() {
    const eventFlex = {
      listStyleType: "none",
      position: "relative",
    };
  
    return (
      <div className="py-12 mb-12 ">
        <ul style={eventFlex} className='w-full lg:flex md:flex gap-6 '>
          {eventRound.map((event =>(
            <EventList eventObj ={event} key={event.message}/>
          )))}
        </ul>
        
      </div>
    );
  };

  function EventList({eventObj}){
    const pStyle ={
        marginRight: "2px",
    
        // border: "2px solid green",
        height: "5rem",
    padding: "4px",
    color: "white",
    fontSize: "17px",
    background: "#339258",
    textAlign: "center",
    borderBottom: '2px solid green',
    borderRadius: '12px'

    }
    return(
        <li className="w-full lg:m-0 sm:m-0 transform  hover:scale-95 transition-transform duration-300">
      <img
        src={eventObj.photoName}
        alt={eventObj.photoName}
        className="  w-full h-full  border-2 rounded-2xl"
      />
       <div
        className="sm:hidden lg:block overflow-hidden"
        style={{
        // position: "relative",
        // bottom: "30px",
           
          textAlign: "center",
        }}
      >
     <p style={pStyle}>{eventObj.message}</p>
      </div>
      </li>

    
    )
  }
  EventList.propTypes = {
    eventObj: PropTypes.shape({
      photoName: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default PastEvent;